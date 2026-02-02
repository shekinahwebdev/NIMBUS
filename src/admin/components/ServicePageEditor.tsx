import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { BiSave, BiTrash } from "react-icons/bi";
import { db } from "../../firebase/firebase";
import toast from "react-hot-toast";

const ServicePageEditor = () => {
  const [serviceTitle, setServiceTitle] = useState("");
  const [serviceIntroduction, setServiceIntroduction] = useState("");
  const [serviceList, setServiceList] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [published, setPublished] = useState(false);

  useEffect(() => {
    const fetchServicesPage = async () => {
      const snap = await getDoc(doc(db, "pages", "service"));
      if (snap.exists()) {
        const data = snap.data();
        setServiceTitle(data.serviceTitle || "");
        setServiceIntroduction(data.serviceIntroduction || "");
        setServiceList(data.serviceList || []);
        setPublished(data.published || false);
      }
    };

    fetchServicesPage();
  }, []);

  const updateService = (index: number, value: string) => {
    const updated = [...serviceList];
    updated[index] = value;
    setServiceList(updated);
  };

  const addService = () => {
    setServiceList([...serviceList, ""]);
  };

  const removeService = (index: number) => {
    setServiceList(serviceList.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    if (loading) return;
    setLoading(true);

    try {
      await setDoc(doc(db, "pages", "service"), {
        serviceTitle,
        serviceIntroduction,
        serviceList: serviceList.filter(Boolean),
        published,
        updatedAt: serverTimestamp(),
      });

      toast.success("Service page updated");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update service page");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-3 py-4 space-y-6">
      <div>
        <label className="block text-white mb-2">Page Title</label>
        <input
          value={serviceTitle}
          onChange={(e) => setServiceTitle(e.target.value)}
          className="w-full px-4 py-3 text-black rounded-lg bg-white"
        />
      </div>

      <div>
        <label className="block text-white mb-2">Introduction</label>
        <textarea
          value={serviceIntroduction}
          onChange={(e) => setServiceIntroduction(e.target.value)}
          rows={3}
          className="w-full px-4 py-3 text-black rounded-lg bg-white"
        />
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="mb-4 text-gray-900">Service List</h3>

        <div className="space-y-3">
          {serviceList.map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white p-3 rounded-lg border"
            >
              <input
                value={service}
                onChange={(e) => updateService(index, e.target.value)}
                className="flex-1 px-3 py-2 text-black border rounded-lg"
              />

              <button
                onClick={() => removeService(index)}
                className="text-red-500 hover:text-red-700"
              >
                <BiTrash />
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={addService}
          className="mt-4 text-blue-600 hover:underline"
        >
          + Add service
        </button>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={published}
          onChange={(e) => setPublished(e.target.checked)}
        />
        <span className="text-white">Publish page</span>
      </div>

      <button
        onClick={handleSave}
        disabled={loading}
        className="flex items-center gap-2 px-6 py-3 bg-blue-tone text-white rounded-lg hover:bg-blue-tone/50 transition-colors shadow-sm"
      >
        <BiSave />
        {loading ? "Saving..." : "Save & Publish"}
      </button>
    </section>
  );
};

export default ServicePageEditor;
