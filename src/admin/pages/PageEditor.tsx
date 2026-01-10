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
        <div className="flex w-full lg:px-10 border-5">
          <section className="bg-panel-background text-white rounded-xl min-h-screen flex flex-col gap-5 px-5 py-5 mt-6 lg:py-6 border-3 border-border-line w-full">
            <HomePageEditor />
          </section>
        </div>
      );

    case "about":
      return (
        <div className="flex w-full lg:px-10">
          <section className="bg-panel-background text-white rounded-xl min-h-screen flex flex-col gap-5 px-5 py-5 mt-6 lg:py-6 border-3 border-border-line w-full">
            <AboutPageEditor />
          </section>
        </div>
      );

    case "service":
      return (
        <div className="flex w-full lg:px-10">
          <section className="bg-panel-background text-white rounded-xl min-h-screen flex flex-col gap-5 px-5 py-5 mt-6 lg:py-6 border-3 border-border-line w-full">
            <ServicePageEditor />
          </section>
        </div>
      );
    case "contact":
      return (
        <div className="flex w-full lg:px-10">
          <section className="bg-panel-background text-white rounded-xl min-h-screen flex flex-col gap-5 px-5 py-5 mt-6 lg:py-6 border-3 border-border-line w-full">
            <ContactPageEditor />
          </section>
        </div>
      );

    default:
      return null;
  }
};

export default PageEditor;
