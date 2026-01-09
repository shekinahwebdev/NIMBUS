import { BiSave } from "react-icons/bi";
import HomePageEditor from "../components/HomePageEditor";
import AboutPageEditor from "../components/AboutPageEditor";
import ServicePageEditor from "../components/ServicePageEditor";
import ContactPageEditor from "../components/ContactPageEditor";

interface PageEditorProps {
  pageId: string;
}
const PageEditor = ({ pageId }: PageEditorProps) => {
  switch (pageId) {
    case "home":
      return (
        <div className="flex w-full lg:px-10">
          <section className="bg-panel-background text-white rounded-xl min-h-screen flex flex-col gap-5 px-5 py-5 mt-6 lg:py-6 border-3 border-border-line w-full">
            <HomePageEditor />
            <div className="mt-8 flex items-center justify-end gap-4 pt-6">
              <button
                type="button"
                className="px-6 py-3 rounded-lg bg-bright-green hover:bg-bright-green/60 transition-colors"
              >
                Cancel
              </button>
              <button
                //   onClick={handleSave}
                className="flex items-center gap-2 px-6 py-3 bg-blue-tone text-white rounded-lg hover:bg-blue-tone/50 transition-colors shadow-sm"
              >
                <BiSave className="w-5 h-5" />
                Save & Publish
              </button>
            </div>
          </section>
        </div>
      );

    case "about":
      return (
        <div className="flex w-full lg:px-10">
          <section className="bg-panel-background text-white rounded-xl min-h-screen flex flex-col gap-5 px-5 py-5 mt-6 lg:py-6 border-3 border-border-line w-full">
            <AboutPageEditor />
            <div className="mt-8 flex items-center justify-end gap-4 pt-6">
              <button
                type="button"
                className="px-6 py-3 rounded-lg bg-bright-green hover:bg-bright-green/60 transition-colors"
              >
                Cancel
              </button>
              <button
                //   onClick={handleSave}
                className="flex items-center gap-2 px-6 py-3 bg-blue-tone text-white rounded-lg hover:bg-blue-tone/50 transition-colors shadow-sm"
              >
                <BiSave className="w-5 h-5" />
                Save & Publish
              </button>
            </div>
          </section>
        </div>
      );

    case "service":
      return (
        <div className="flex w-full lg:px-10">
          <section className="bg-panel-background text-white rounded-xl min-h-screen flex flex-col gap-5 px-5 py-5 mt-6 lg:py-6 border-3 border-border-line w-full">
            <ServicePageEditor />
            <div className="mt-8 flex items-center justify-end gap-4 pt-6">
              <button
                type="button"
                className="px-6 py-3 rounded-lg bg-bright-green hover:bg-bright-green/60 transition-colors"
              >
                Cancel
              </button>
              <button
                //   onClick={handleSave}
                className="flex items-center gap-2 px-6 py-3 bg-blue-tone text-white rounded-lg hover:bg-blue-tone/50 transition-colors shadow-sm"
              >
                <BiSave className="w-5 h-5" />
                Save & Publish
              </button>
            </div>
          </section>
        </div>
      );
    case "contact":
      return (
        <div className="flex w-full lg:px-10">
          <section className="bg-panel-background text-white rounded-xl min-h-screen flex flex-col gap-5 px-5 py-5 mt-6 lg:py-6 border-3 border-border-line w-full">
            <ContactPageEditor />
            <div className="mt-8 flex items-center justify-end gap-4 pt-6">
              <button
                type="button"
                className="px-6 py-3 rounded-lg bg-bright-green hover:bg-bright-green/60 transition-colors"
              >
                Cancel
              </button>
              <button
                //   onClick={handleSave}
                className="flex items-center gap-2 px-6 py-3 bg-blue-tone text-white rounded-lg hover:bg-blue-tone/50 transition-colors shadow-sm"
              >
                <BiSave className="w-5 h-5" />
                Save & Publish
              </button>
            </div>
          </section>
        </div>
      );

    default:
      return null;
  }
};

export default PageEditor;
