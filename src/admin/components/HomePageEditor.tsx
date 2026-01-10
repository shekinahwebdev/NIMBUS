import { BiSave } from "react-icons/bi";
import { ImageUpload } from "./ImageUpload";

const HomePageEditor = () => {
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
            type="text"
            defaultValue="Welcome to Our Football Agency"
            className="w-full text-black px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-white mb-2">Hero Subtitle</label>
          <textarea
            defaultValue="We represent world-class football talent and help players reach their full potential."
            rows={3}
            className="w-full px-4 py-3  text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>

        <ImageUpload label="Hero Image" onImageChange={() => {}} />

        <div>
          <label className="block text-white mb-2">Main Description</label>
          <textarea
            defaultValue="Our agency has been connecting talented players with top clubs for over 15 years. We provide comprehensive career management, contract negotiation, and personal development support."
            rows={5}
            className="w-full px-4 py-3  text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>
      </div>
      <div className="mt-8 flex items-center justify-end gap-4 pt-6">
        {/* <Link to="/admin">
          <button
            type="button"
            className="px-6 py-3 rounded-lg text-white bg-bright-green hover:bg-bright-green/60 transition-colors"
          >
            Back
          </button>
        </Link> */}

        <button
          type="button"
          className="px-6 py-3 rounded-lg text-white bg-bright-green hover:bg-bright-green/60 transition-colors"
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
  );
};

export default HomePageEditor;
