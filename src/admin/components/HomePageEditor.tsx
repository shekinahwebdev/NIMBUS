import { BiSave } from "react-icons/bi";
import { ImageUpload } from "./ImageUpload";
import { useEffect, useState } from "react";
import { doc, setDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const HomePageEditor = () => {
  const [heroTitle, setHeroTitle] = useState("");
  const [heroSubtitle, setHeroSubtitle] = useState("");
  const [mainDescription, setMainDescription] = useState("");
  const [heroImage, setHeroImage] = useState<any>();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSave = async () => {
    if (!heroImage) return alert("Upload hero image");

    if (loading) return;
    setLoading(true);

    try {
      // Convert File to base64 if needed
      const heroImageData =
        heroImage instanceof File
          ? await new Promise<string>((resolve, reject) => {
              const reader = new FileReader();
              reader.onloadend = () => resolve(reader.result as string);
              reader.onerror = reject;
              reader.readAsDataURL(heroImage);
            })
          : heroImage; // already a base64 string

      // Save/update home page document in Firestore
      await setDoc(doc(db, "pages", "home"), {
        heroTitle,
        heroSubtitle,
        heroImage: heroImageData,
        mainDescription,
        updatedAt: serverTimestamp(),
      });

      toast.success("Home page updated");

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Failed to update home page:", error);
      toast.error("Failed to update home page");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchHomePage = async () => {
      const snap = await getDoc(doc(db, "page", "home"));
      if (snap.exists()) {
        const data = snap.data();
        setHeroTitle(data.heroTitle || "");
        setHeroSubtitle(data.heroSubtitle || "");
        setMainDescription(data.mainDescription || "");
        setHeroImage(data.heroImage || null);
      }
    };
    fetchHomePage();
  }, []);

  return (
    <section className="px-3 lg:px-0 pb-5 lg:pb-0">
      <div className="mb-8">
        <h1 className="text-mold-yellow text-xl mb-2">Home Page</h1>
        <p className="text-muted-gray">
          Edit content and manage your home page
        </p>
      </div>
      <div className="space-y-6 my-6">
        <div>
          <label className="block text-white mb-2">Hero Title</label>
          <input
            value={heroTitle}
            onChange={(e) => setHeroTitle(e.target.value)}
            type="text"
            // defaultValue="Welcome to Our Football Agency"
            className="w-full text-black px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-white mb-2">Hero Subtitle</label>
          <textarea
            value={heroSubtitle}
            onChange={(e) => setHeroSubtitle(e.target.value)}
            // defaultValue="We represent world-class football talent and help players reach their full potential."
            rows={3}
            className="w-full px-4 py-3  text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>
        <ImageUpload
          label="Hero Image"
          onImageChange={(file, preview) => setHeroImage(file || preview)}
        />

        <div>
          <label className="block text-white mb-2">Main Description</label>
          <textarea
            value={mainDescription}
            onChange={(e) => setMainDescription(e.target.value)}
            // defaultValue="Our agency has been connecting talented players with top clubs for over 15 years. We provide comprehensive career management, contract negotiation, and personal development support."
            rows={5}
            className="w-full px-4 py-3  text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>
      </div>
      <div className="mt-8 flex items-center justify-end gap-4 pt-6">
        <button
          type="button"
          className="px-6 py-3 rounded-lg text-white bg-bright-green hover:bg-bright-green/60 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          disabled={loading}
          type="submit"
          className="flex items-center gap-2 px-6 py-3 bg-blue-tone text-white rounded-lg hover:bg-blue-tone/50 transition-colors shadow-sm"
        >
          <BiSave className="w-5 h-5" />
          {loading ? "Saving" : " Save & Publish"}
        </button>
      </div>
    </section>
  );
};

export default HomePageEditor;
