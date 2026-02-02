const Service = ({ data }: any) => {
  return (
    <div className="min-h-screen bg-[#1e1e2f] text-white">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-20 max-w-3xl">
          <h1 className="mb-6 font-serif text-5xl font-bold text-[rgb(170,143,82)] md:text-7xl">
            {data.pageTitle}
          </h1>
          <p className="text-xl text-gray-400">{data.introduction}</p>
        </div>

        {/* Service List Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.serviceList.map((service: any, index: number) => (
            <div
              key={index}
              className="group border border-white/10 p-10 transition-colors hover:border-[rgb(170,143,82)]"
            >
              <span className="mb-4 block font-serif text-4xl text-[rgb(170,143,82)]/30 group-hover:text-[rgb(170,143,82)]">
                0{index + 1}
              </span>
              <h3 className="mb-4 text-xl font-bold text-white uppercase tracking-wider">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Service;
