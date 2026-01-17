import { BiSave } from "react-icons/bi";

const ContactPageEditor = () => {
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
            defaultValue="Get In Touch"
            className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-white mb-2">Contact Description</label>
          <textarea
            defaultValue="Have questions or want to discuss representation? We'd love to hear from you."
            rows={3}
            className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-white mb-2">Email Address</label>
            <input
              type="email"
              defaultValue="contact@footballagency.com"
              className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-white mb-2">Phone Number</label>
            <input
              type="tel"
              defaultValue="+1 (555) 123-4567"
              className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        <div>
          <label className="block text-white mb-2">Office Address</label>
          <textarea
            defaultValue="123 Sport Street, Suite 100&#10;New York, NY 10001&#10;United States"
            rows={3}
            className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
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

export default ContactPageEditor;
