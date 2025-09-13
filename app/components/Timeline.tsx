import React from "react";

const Timeline: React.FC = () => {
  const experiences = [
    {
      title: "Graphic Designer",
      company: "Satya Flex",
      location: "Kasdol, Balodabazar (C.G.)",
      date: "06/2024 - Present",
      description:
        "Led the creative design and layout development for banners, flexes, and posters for local businesses, ensuring visually appealing and brand-consistent marketing materials that effectively communicate their message.",
    },
    {
      title: "Graphic Designer",
      company: "Manish Printing",
      location: "Bilaigarh, Sarangarh-Bilaigarh (C.G.)",
      date: "07/2022 - 06/2024",
      description:
        "Spearheaded the creation and maintenance of over 20 custom, reusable design templates and layouts for banners, flexes, and posters, ensuring consistency, efficiency, and brand alignment across multiple projects.",
    }
    //   {
    //     title: "Front End Developer",
    //     company: "Echnotech pvt ltd",
    //     location: "Karnataka, Bangalore",
    //     date: "01/2023 - 06/2023",
    //     description:
    //       "Spearheaded the creation and maintenance of over 20 custom, reusable design templates and layouts for banners, flexes, and posters, ensuring consistency, efficiency, and brand alignment across multiple projects.",
    //   },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative border-l-4 border-purple-800">
        {experiences.map((experience, idx) => (
          <div className="mb-8 pl-8" key={idx}>
            <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9.5px] mt-1"></div>
            <p className="text-sm text-gray-600">{experience.date}</p>
            <h3 className="text-xl font-semibold">{experience.title}</h3>
            <p className="text-md font-medium text-purple-500">
              {experience.company}, {experience.location}
            </p>
            <p className="text-zinc-500">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
