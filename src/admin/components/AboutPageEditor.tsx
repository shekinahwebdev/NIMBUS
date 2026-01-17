import { BiSave } from "react-icons/bi";
import { ImageUpload } from "./ImageUpload";

const AboutPageEditor = () => {
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
              defaultValue="About Our Agency"
              className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <ImageUpload label="About Image" onImageChange={() => {}} />

          <div>
            <label className="block text-white mb-2">Our Story</label>
            <textarea
              defaultValue="Founded in 2008, our agency has grown to become one of the most respected names in football representation. We pride ourselves on our personal approach and commitment to each player's success."
              rows={6}
              className="w-full px-4 py-3 bg-white border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          <div>
            <label className="block text-white mb-2">Mission Statement</label>
            <textarea
              defaultValue="To provide exceptional representation and career guidance to football players, helping them achieve their professional goals while maintaining integrity and professionalism."
              rows={4}
              className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-end gap-4 pt-6">
        <button
          type="button"
          className="px-6 py-3 text-white rounded-lg bg-bright-green hover:bg-bright-green/60 transition-colors"
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

export default AboutPageEditor;
