const Features = () => {
  const features = [
    { title: "Live Availability", desc: "Check real-time open slots across locations." },
    { title: "Auto WhatsApp Confirmation", desc: "Get instant booking status on your phone." },
    { title: "Smart Pricing", desc: "Save more on underutilized slots." },
    { title: "Nearby Recommendations", desc: "Get alternatives if your preferred turf is full." },
  ];

  return (
    <section className="px-6 py-12 bg-white">
      <h3 className="text-2xl font-bold text-blue-700 mb-8">Features</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {features.map((feat, idx) => (
          <div
            key={idx}
            className="bg-[#fffaf0] border border-gray-200 p-6 rounded-lg w-72 shadow-md"
          >
            <h4 className="text-lg font-semibold text-blue-800 mb-2">{feat.title}</h4>
            <p className="text-gray-700">{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
