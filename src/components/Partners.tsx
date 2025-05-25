const Partners = () => {
  const partners = [
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png",
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/320px-Microsoft_logo.svg.png",
    },
    {
      name: "AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/320px-Amazon_Web_Services_Logo.svg.png",
    },
    {
      name: "NVIDIA",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/NVIDIA_logo.svg/320px-NVIDIA_logo.svg.png",
    },
    {
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/320px-IBM_logo.svg.png",
    },
    {
      name: "OpenAI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/320px-OpenAI_Logo.svg.png",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Наши партнеры и спонсоры
          </h3>
          <p className="text-gray-600">
            Мы сотрудничаем с ведущими технологическими компаниями
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
