import { BiSave } from "react-icons/bi";
import { ImageUpload } from "./ImageUpload";
import { useEffect, useState } from "react";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AboutPageEditor = () => {
  const [aboutTitle, setAboutTitle] = useState("");
  const [aboutImage, setAboutImage] = useState<any>();
  const [aboutStory, setAboutStory] = useState("");
  const [missionStatement, setMissionStatement] = useState("");
  const [published, setPublished] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAboutPage = async () => {
      const snap = await getDoc(doc(db, "pages", "about"));
      if (snap.exists()) {
        const data = snap.data();
        setAboutTitle(data.aboutTitle || "");
        setAboutStory(data.aboutStory || "");
        setAboutImage(data.aboutImage || "");
        setMissionStatement(data.missionStatement || "");
        setPublished(data.published || false);
      }
    };

    fetchAboutPage();
  }, []);

  const handleSave = async () => {
    if (!aboutImage) return alert("Upload about image");

    if (loading) return;
    setLoading(true);

    try {
      // Convert File to base64
      const aboutImageData =
        aboutImage instanceof File
          ? await new Promise<string>((resolve, reject) => {
              const reader = new FileReader();
              reader.onloadend = () => resolve(reader.result as string);
              reader.onerror = reject;
              reader.readAsDataURL(aboutImage);
            })
          : aboutImage;

      // Save/update home page document in Firestore
      await setDoc(doc(db, "pages", "about"), {
        aboutTitle,
        aboutStory,
        aboutImage: aboutImageData,
        missionStatement,
        updatedAt: serverTimestamp(),
        published,
      });

      toast.success("About page updated");

      setTimeout(() => {
        navigate("/about");
      }, 3000);
    } catch (error) {
      console.error("Failed to update about page:", error);
      toast.error("Failed to update about page");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-3 py-4 lg:py-0 lg:px-0 pb-5 lg:pb-0">
      <div className="mb-8">
        <h1 className="text-mold-yellow text-xl mb-2">About Page</h1>
        <p className="text-muted-gray">
          Edit content and manage your about page
        </p>
      </div>
      <div>
        <div className="space-y-6">
          <div>
            <label className="block text-white mb-2">Page Title</label>
            <input
              type="text"
              value={aboutTitle}
              onChange={(e) => setAboutTitle(e.target.value)}
              className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <ImageUpload
            label="About Image"
            onImageChange={(file, preview) => setAboutImage(file || preview)}
          />

          <div>
            <label className="block text-white mb-2">Our Story</label>
            <textarea
              value={aboutStory}
              onChange={(e) => setAboutStory(e.target.value)}
              rows={6}
              className="w-full px-4 py-3 bg-white border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          <div>
            <label className="block text-white mb-2">Mission Statement</label>
            <textarea
              value={missionStatement}
              onChange={(e) => setMissionStatement(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>
        </div>
      </div>

      <div className="mb-4 flex items-center gap-2">
        <input
          type="checkbox"
          checked={published}
          onChange={(e) => setPublished(e.target.checked)}
        />
        <span>Publish page</span>
      </div>

      <div className="mt-8 flex items-center justify-end gap-4 pt-6">
        <button
          type="button"
          className="px-6 py-3 text-white rounded-lg bg-bright-green hover:bg-bright-green/60 transition-colors"
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

export default AboutPageEditor;
