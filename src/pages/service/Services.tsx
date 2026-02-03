import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";

const Service = () => {
  const [serviceData, setServiceData] = useState<any>();

  useEffect(() => {
    const fetchService = async () => {
      const snap = await getDoc(doc(db, "pages", "service"));
      if (snap.exists()) setServiceData(snap.data());
    };
    fetchService();
  }, []);

  if (!serviceData)
    return (
      <div className="flex h-screen items-center justify-center bg-[#1e1e2f]">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[rgb(170,143,82)] border-t-transparent"></div>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#1e1e2f] text-white">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-20 max-w-3xl">
          <h1 className="mb-6 font-serif text-5xl font-bold text-[rgb(170,143,82)] md:text-7xl">
            {serviceData.serviceTitle}
          </h1>
          <p className="text-xl text-gray-400">
            {serviceData.serviceIntroduction}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceData.serviceList.map((service: any, index: number) => (
            <div
              key={index}
              className="group border border-white/10 p-10 transition-colors hover:border-[rgb(170,143,82)]"
            >
              <span className="mb-4 block font-serif text-4xl text-[rgb(170,143,82)]/30 group-hover:text-[rgb(170,143,82)]">
                0{index + 1}
              </span>
              <h3 className="mb-4 text-xl font-bold text-white uppercase tracking-wider">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Service;
