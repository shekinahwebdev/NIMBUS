import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { BiSave } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase/firebase";
import toast from "react-hot-toast";

const ContactPageEditor = () => {
  const [contactTitle, setContactTitle] = useState("");
  const [contactDescription, setContactDescription] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [officeAddress, setOfficeAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [loading, setLoading] = useState(false);
  const [published, setPublished] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContactPage = async () => {
      const snap = await getDoc(doc(db, "pages", "contact"));
      if (snap.exists()) {
        const data = snap.data();
        setContactTitle(data.contactTitle || "");
        setContactDescription(data.contactDescription || "");
        setEmailAddress(data.emailAddress || "");
        setOfficeAddress(data.officeAddress || "");
        setPhoneNumber(data.phoneNumber || "");
        setPublished(data.published || false);
      }
    };
    fetchContactPage();
  }, []);

  const handleSave = async () => {
    if (loading) return;
    setLoading(true);

    try {
      // Save/update home page document in Firestore
      await setDoc(doc(db, "pages", "contact"), {
        contactTitle,
        contactDescription,
        emailAddress,
        officeAddress,
        phoneNumber,
        updatedAt: serverTimestamp(),
        published,
      });

      toast.success("Contact page updated");

      setTimeout(() => {
        navigate("/contact");
      }, 3000);
    } catch (error) {
      console.error("Failed to update contact page:", error);
      toast.error("Failed to update contact page");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-3 py-4 lg:py-0 lg:px-0 pb-5 lg:pb-0">
      <div className="mb-8">
        <h1 className="text-mold-yellow text-xl mb-2">Contact Page</h1>
        <p className="text-muted-gray">
          Edit content and manage your contact page
        </p>
      </div>
      <div className="space-y-6">
        <div>
          <label className="block text-white mb-2">Page Title</label>
          <input
            type="text"
            // defaultValue="Get In Touch"
            value={contactTitle}
            onChange={(e) => setContactTitle(e.target.value)}
            className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-white mb-2">Contact Description</label>
          <textarea
            // defaultValue="Have questions or want to discuss representation? We'd love to hear from you."
            value={contactDescription}
            onChange={(e) => setContactDescription(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-white mb-2">Email Address</label>
            <input
              type="email"
              // defaultValue="contact@footballagency.com"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-white mb-2">Phone Number</label>
            <input
              type="tel"
              // defaultValue="+1 (555) 123-4567"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        <div>
          <label className="block text-white mb-2">Office Address</label>
          <textarea
            // defaultValue="123 Sport Street, Suite 100&#10;New York, NY 10001&#10;United States"
            rows={3}
            value={officeAddress}
            onChange={(e) => setOfficeAddress(e.target.value)}
            className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
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

export default ContactPageEditor;
