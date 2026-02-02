const Contact = ({ data }: any) => {
  return (
    <div className="min-h-screen bg-[#1e1e2f] text-white">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
          {/* Contact Details */}
          <div>
            <h1 className="mb-6 font-serif text-5xl font-bold text-[rgb(170,143,82)] md:text-7xl">
              {data.pageTitle}
            </h1>
            <p className="mb-12 text-xl text-gray-400">
              {data.contactDescription}
            </p>

            <div className="space-y-8">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-[rgb(170,143,82)]">
                  Email
                </span>
                <a
                  href={`mailto:${data.emailAddress}`}
                  className="text-2xl hover:underline"
                >
                  {data.emailAddress}
                </a>
              </div>

              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-[rgb(170,143,82)]">
                  Phone
                </span>
                <span className="text-2xl">{data.phoneNumber}</span>
              </div>

              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-[rgb(170,143,82)]">
                  Studio
                </span>
                <address className="not-italic text-2xl text-gray-300">
                  {data.officeAddress}
                </address>
              </div>
            </div>
          </div>

          {/* Visual Side / Form Area */}
          <div className="bg-white/5 p-12 rounded-sm border border-white/5">
            <h3 className="mb-8 text-2xl font-serif text-[rgb(170,143,82)]">
              Send a Message
            </h3>
            {/* You could drop your Form Builder component here! */}
            <div className="space-y-6">
              <div className="h-12 w-full border-b border-white/20 bg-transparent text-gray-500 italic">
                Name
              </div>
              <div className="h-12 w-full border-b border-white/20 bg-transparent text-gray-500 italic">
                Email
              </div>
              <div className="h-32 w-full border-b border-white/20 bg-transparent text-gray-500 italic">
                Your Message...
              </div>
              <button className="mt-6 bg-[rgb(170,143,82)] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#1e1e2f] hover:bg-white transition-colors">
                Submit Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
