import React, { useEffect, useState } from "react";
import lodash from "lodash";
import { Flipped, Flipper } from "react-flip-toolkit";
import {
  SiRemix,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiVite,
  SiMui,
  SiTailwindcss,
  SiGithub,
  SiAntdesign,
} from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiCoreldraw } from "react-icons/si";
import { LinkPreview } from "./ui/link-preview";

const Skills: React.FC = () => {
  const skillItems = [
    {
      title: "Adobe Photoshop",
      icon: <SiAdobephotoshop className="text-blue-500" />,
      link: "https://www.adobe.com/products/photoshop.html",
    },
    {
      title: "Adobe illustrator",
      icon: <SiAdobeillustrator className=" text-orange-400 dark:text-white" />,
      link: "https://www.adobe.com/products/illustrator.html",
    },
    {
      title: "CorelDraw",
      icon: <SiCoreldraw className="text-green-400" />,
      link: "https://www.coreldraw.com/en/",
    },
  ];

  const [items, setItems] = useState(skillItems);

  useEffect(() => {
    const shuffleInterval = setInterval(() => {
      const newShuffledItems = lodash.shuffle(items);
      setItems(newShuffledItems);
    }, 3000); // Shuffle every 3 seconds

    return () => clearInterval(shuffleInterval);
  }, [items]);

  return (
    <div className="container mx-auto py-12 flex flex-col items-center">
      <Flipper flipKey={items.map((item) => item.title).join("")}>
        <div className="flex flex-wrap justify-center items-center gap-6 w-full">
          {items.map((item) => (
            <Flipped key={item.title} flipId={item.title}>
              <div className="w-32 p-3 gap-1 flex flex-col justify-center items-center">
                <LinkPreview url={item.link}>
                  <div className="text-4xl mb-2">{item.icon}</div>
                </LinkPreview>
                <h3 className="text-lg font-semibold text-black dark:text-zinc-50 text-center">
                  {item.title}
                </h3>
              </div>
            </Flipped>
          ))}
        </div>
      </Flipper>
    </div>
  );
};

export default Skills;
