import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "The Durgesh | Resume" },
    { name: "description", content: "Welcome to The Durgesh!" },
  ];
};

const Resume: React.FC = () => {
  const headerRef = useRef(null);
  const sectionsRef = useRef([]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    sectionsRef.current.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          end: "bottom 25%",
          toggleActions: "play reverse play reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power4.out",
        delay: 0.3,
        stagger: 0.5,
      });
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 w-[90%] md:w-[50%]">
      {/* Header Section */}
      <div ref={headerRef} className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white">
          Durgesh Kaiwartya
        </h1>
        <p className="text-lg text-gray-600 dark:text-neutral-400 mt-2">
          Kasdol, Balodabazar (C.G.) | +91 8120619134 |
          kaiwartya.durgesh143@gmail.com
        </p>
        <p className="text-md text-gray-600 dark:text-neutral-400 mt-2">
          Languages: Hindi, English
        </p>
      </div>

      {/* Summary Section */}
      <div ref={(el) => (sectionsRef.current[0] = el)} className="my-10">
        <h2 className="text-3xl font-bold mb-4 text-gray-700 dark:text-gray-300">
          Summary
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Self-driven <strong>Graphic Designer and Image Editor</strong> with
          proven expertise in creating visually compelling, client-focused
          designs. Skilled in{" "}
          <strong>Adobe Photoshop, Illustrator, and Corel Draw</strong>, with
          experience designing{" "}
          <strong>
            templates, ID cards, banners, invoices, and invitation cards
          </strong>
          . Recognized for a strong grasp of{" "}
          <strong>typography and color theory</strong> to craft designs that
          elevate branding and communication.
          <br /> <br />
          Dedicated to delivering creative solutions that balance aesthetics
          with functionality. Beyond professional work, I experiment with design
          trends, create personal templates, and explore innovative approaches
          to ensure fresh and impactful results.
        </p>
      </div>

      {/* Experience Section */}
      <div className="my-10">
        <h2
          className="text-3xl font-bold mb-4 text-gray-700 dark:text-gray-300"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          Experience
        </h2>

        {/* Job 1: Satya Flex */}
        <div className="mb-8" ref={(el) => (sectionsRef.current[2] = el)}>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Graphic Designer
          </h3>
          <p className="text-gray-500 dark:text-neutral-400">
            Satya Flex | Kasdol, Balodabazar (C.G.)
          </p>
          <p className="text-gray-500 dark:text-neutral-400">
            06/2024 - Present
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
            <li>
              Designed high-quality promotional materials including banners,
              hoardings, and flex designs for businesses.
            </li>
            <li>
              Created professional templates, invoices, and invitation cards
              tailored to client requirements.
            </li>
            <li>
              Collaborated with clients to understand brand goals and delivered
              impactful design solutions.
            </li>
            <li>
              Handled end-to-end printing workflows ensuring accurate color and
              typography reproduction.
            </li>
          </ul>
        </div>

        {/* Job 2: Manish Printing */}
        <div className="mb-8" ref={(el) => (sectionsRef.current[3] = el)}>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Graphic Designer
          </h3>
          <p className="text-gray-500 dark:text-neutral-400">
            Manish Printing | Bilaigarh, Sarangarh-Bilaigarh (C.G.)
          </p>
          <p className="text-gray-500 dark:text-neutral-400">
            07/2022 - 06/2024
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
            <li>
              Created and edited designs for ID cards, wedding cards, and
              banners for local businesses.
            </li>
            <li>
              Managed bulk printing projects, ensuring timely delivery and
              client satisfaction.
            </li>
            <li>
              Developed custom graphic templates to streamline recurring design
              requests.
            </li>
            <li>
              Maintained brand consistency across all client deliverables.
            </li>
          </ul>
        </div>
      </div>

      {/* Education Section */}
      <div ref={(el) => (sectionsRef.current[5] = el)} className="my-10">
        <h2 className="text-3xl font-bold mb-4 text-gray-700 dark:text-gray-300">
          Education
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-semibold">
            Pt. Ravishankar Shukla University | Raipur, Chhattisgarh
          </span>
          <br />
          Bachelor of Arts | 2021
        </p>
      </div>

      {/* Skills Section */}
      <div ref={(el) => (sectionsRef.current[6] = el)} className="my-10">
        <h2 className="text-3xl font-bold mb-4 text-gray-700 dark:text-gray-300">
          Skills
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Adobe Photoshop, Adobe Illustrator, Corel Draw, Typography, Color
          Theory, Banner & Template Design, Invitation Card Design, Branding,
          Print Media, Creative Layouts, Image Editing & Retouching.
        </p>
      </div>
    </div>
  );
};

export default Resume;
