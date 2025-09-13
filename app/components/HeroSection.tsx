import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useOutletContext } from "@remix-run/react";
import { IconDownload } from "@tabler/icons-react";
import resume from "~/assets/resume.pdf";
interface ContextType {
  isIntroDone: boolean;
}
const HeroSection: React.FC = () => {
  const { isIntroDone } = useOutletContext<ContextType>();
  return (
    <div className="flex py-10 flex-col-reverse gap-8 md:flex-row items-center justify-between w-full md:py-0">
      {/* Text Section */}
      <div className="w-full text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white">
          Hi, I'm Durgesh Kaiwartya
        </h1>
        <p className="mt-4 text-base md:text-xl text-zinc-700 dark:text-zinc-600 text-justify">
          I'm a passionate Graphic Designer and Image Editor with expertise in
          creating eye-catching and effective designs. I enjoy transforming
          ideas into visually appealing banners, flexes, and posters that are
          both impactful and easy to understand. Let&apos;s collaborate to bring
          your brand&apos;s vision to life!
        </p>
        {/* Know More Button */}
        {/* <button className="btn btn-primary mt-5 flex items-center">
          Resume <IconDownload />
        </button> */}
        <a href={resume} download="Durgesh_Kaiwartya_Resume.pdf">
          <button
            className="bg-black dark:bg-zinc-50 text-center w-48 rounded-2xl h-14 relative text-white dark:text-black text-xl font-semibold group mt-5"
            type="button"
          >
            <div className="bg-purple-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
              <IconDownload className="w-5 h-5" />
            </div>
            <p className="translate-x-2">Resume</p>
          </button>
        </a>
      </div>

      {/* Lottie Animation */}
      <div className="w-full">
        <DotLottieReact
          src={
            "https://lottie.host/fbeb6c21-aa1e-4e9d-bfcf-d94393c68fe8/XIcJg8n5io.lottie"
          }
          className="w-full h-auto md:h-[500px]"
          loop
          autoplay
          key={isIntroDone ? 1 : 0}
        />
      </div>
    </div>
  );
};

export default HeroSection;
