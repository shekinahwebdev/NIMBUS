import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";

const About = () => {
  const [aboutData, setAboutData] = useState<any>(null);

  useEffect(() => {
    const fetchAbout = async () => {
      const snap = await getDoc(doc(db, "pages", "about"));
      if (snap.exists()) setAboutData(snap.data());
    };
    fetchAbout();
  }, []);

  if (!aboutData)
    return (
      <div className="flex h-screen items-center justify-center bg-[#1e1e2f]">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[rgb(170,143,82)] border-t-transparent"></div>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#1e1e2f] text-white">
      {/* Header Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h1 className="mb-4 font-serif text-5xl font-bold text-[rgb(170,143,82)] md:text-7xl">
          {aboutData.aboutTitle}
        </h1>
        <div className="mx-auto h-1 w-24 bg-[rgb(170,143,82)]"></div>
      </section>

      {/* Image & Story Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <img
            src={aboutData.aboutImage}
            alt="About Us"
            className="rounded-sm border border-white/10 shadow-2xl"
          />
          <div className="space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[rgb(170,143,82)]">
              Our Story
            </h2>
            <p className="text-xl leading-relaxed text-gray-300">
              {aboutData.aboutStory}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement (Banner Style) */}
      <section className="bg-[rgb(170,143,82)] py-24 text-[#1e1e2f]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-xs font-black uppercase tracking-widest opacity-70">
            Mission Statement
          </h2>
          <blockquote className="font-serif text-3xl font-medium italic md:text-5xl">
            "{aboutData.missionStatement}"
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default About;
