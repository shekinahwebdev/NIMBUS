import { BiSave } from "react-icons/bi";

const ServicePageEditor = () => {
  return (
    <section className="px-3 py-4 lg:py-0 lg:px-0 pb-5 lg:pb-0">
      <div className="mb-8">
        <h1 className="text-mold-yellow text-xl mb-2">Service Page</h1>
        <p className="text-muted-gray">
          Edit content and manage your service page
        </p>
      </div>
      <div className="space-y-6">
        <div>
          <label className="block text-white mb-2">Page Title</label>
          <input
            type="text"
            defaultValue="Our Services"
            className="w-full px-4 text-black py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-white mb-2">Introduction</label>
          <textarea
            defaultValue="We offer comprehensive services to support football players throughout their careers."
            rows={3}
            className="w-full px-4 text-black py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>

        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
          <h3 className="text-gray-900 mb-4">Service List</h3>
          <div className="space-y-4">
            {[
              "Contract Negotiation",
              "Career Planning",
              "Transfer Management",
              "Marketing & PR",
              "Legal Support",
              "Financial Advice",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg border border-gray-200"
              >
                <input
                  type="text"
                  defaultValue={service}
                  className="w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
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

export default ServicePageEditor;
