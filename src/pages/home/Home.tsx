import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const HomePage = () => {
  const [homeData, setHomeData] = useState<any>(null);

  useEffect(() => {
    const fetchHome = async () => {
      const snap = await getDoc(doc(db, "pages", "home"));
      if (snap.exists()) setHomeData(snap.data());
    };
    fetchHome();
  }, []);

  if (!homeData)
    return (
      <div className="flex h-screen items-center justify-center bg-[#1e1e2f]">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[rgb(170,143,82)] border-t-transparent"></div>
      </div>
    );

  return (
    <main className="min-h-screen bg-[#1e1e2f] text-white selection:bg-[rgb(170,143,82)] selection:text-[#1e1e2f]">
      {/* --- Hero Section --- */}
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12 lg:pt-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h1 className="mb-6 text-5xl font-serif font-bold leading-tight text-[rgb(170,143,82)] md:text-7xl">
              {homeData.heroTitle}
            </h1>
            <p className="mb-8 text-xl font-light tracking-wide text-gray-300 md:text-2xl">
              {homeData.heroSubtitle}
            </p>
            <div className="h-1 w-24 bg-[rgb(170,143,82)]"></div>
          </div>

          {/* Independent Hero Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Decorative Frame Element */}
              <div className="absolute -bottom-4 -right-4 h-full w-full border-2 border-[rgb(170,143,82)]"></div>
              <img
                src={homeData.heroImage}
                alt="Hero"
                className="relative z-10 w-full rounded-sm object-cover shadow-2xl grayscale-[20%] transition-all duration-500 hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- Description Section --- */}
      <section className="bg-white/5 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-8 text-sm font-bold uppercase tracking-[0.3em] text-[rgb(170,143,82)]">
            The Narrative
          </h2>
          <p className="text-lg leading-loose text-gray-300 md:text-xl italic">
            "{homeData.mainDescription}"
          </p>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
