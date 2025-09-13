import bssp from "~/assets/bssp1.png";
import bssp2 from "~/assets/bssp2.png";
import bssp3 from "~/assets/bssp3.png";
import bssp4 from "~/assets/bssp4.png";
import bsre from "~/assets/bsre.png";
import bsit from "~/assets/bsit.png";
import npm from "~/assets/npm.png";
import rgav from "~/assets/rgav.png";
import adminRgav from "~/assets/admin.png";
import adminRgav2 from "~/assets/admin2.png";
import cloudFlare from "~/assets/cloudflare.png";
import metamask from "~/assets/metamask.png";
export interface ProjectType {
  id: number;
  title: string;
  name: string;
  description: DescriptionSection[]; // Updated to array of sections
  mainImage: string;
  price?: number;
  image?: string[];
  techstack: string[];
  link?: string;
  github?: string;
  alt?: string;
  colSpan?: string;
  rowSpan?: string;
}

export interface DescriptionSection {
  title?: string;
  content?: string;
  list?: string[];
}

const products: ProjectType[] = [
  {
    id: 1,
    title: "Templates",
    alt: "Laptop",
    description: [],
    price: 149.99,
    mainImage:
      "https://4kwallpapers.com/images/wallpapers/your-name-shooting-3840x2160-14938.jpg",
    image: [bssp, bssp2, bssp3, bssp4],
    techstack: ["Adobe Photoshop", "Adobe Illustrator", "CorelDraw"],
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
  },
  {
    id: 2,
    title: "Business Card",
    alt: "bssp",
    description: [],
    price: 149.99,
    mainImage:
      "https://images.unsplash.com/photo-1731286507379-94216c27cf9d?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image: [bssp, bssp2, bssp3, bssp4],
    techstack: ["Adobe Photoshop", "Adobe Illustrator", "CorelDraw"],
  },
  {
    id: 3,
    title: "Menu Card",
    alt: "Bsre",
    description: [],
    price: 149.99,
    mainImage:
      "https://images.unsplash.com/photo-1716490710550-9844f5a98999?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image: [bssp, bssp2, bssp3, bssp4],
    techstack: ["Adobe Photoshop", "Adobe Illustrator", "CorelDraw"],
  },
  {
    id: 4,
    title: "Certificate",
    alt: "bsit",
    description: [],
    price: 149.99,
    mainImage:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image: [bssp, bssp2, bssp3, bssp4],
    techstack: ["Adobe Photoshop", "Adobe Illustrator", "CorelDraw"],
  },
  {
    id: 5,
    title: "Invitation Card",
    alt: "Rgav",
    description: [],
    price: 149.99,
    mainImage:
      "https://images.unsplash.com/photo-1431440869543-efaf3388c585?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image: [bssp, bssp2, bssp3, bssp4],
    techstack: ["Adobe Photoshop", "Adobe Illustrator", "CorelDraw"],
  },
  {
    id: 6,
    title: "Screen Offset",
    alt: "Rgav Admin",
    mainImage:
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: [],
    price: 149.99,
    image: [bssp, bssp2, bssp3, bssp4],
    techstack: ["Adobe Photoshop", "Adobe Illustrator", "CorelDraw"],
  },
  {
    id: 7,
    title: "ID Card",
    alt: "react-base64-to-pdf",
    description: [],
    price: 149.99,
    mainImage:
      "https://images.unsplash.com/photo-1475598322381-f1b499717dda?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image: [bssp, bssp2, bssp3, bssp4],
    techstack: ["Adobe Photoshop", "Adobe Illustrator", "CorelDraw"],
    link: "https://www.npmjs.com/package/react-base64-to-pdf",
    github: "https://github.com/PriyanshuGupta28/react-base64-to-pdf",
  },
  {
    id: 8,
    title: "Banner",
    alt: "Cloudflare Tunnel",
    description: [],
    price: 149.99,
    mainImage:
      "https://images.unsplash.com/photo-1488711500009-f9111944b1ab?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image: [bssp, bssp2, bssp3, bssp4],
    techstack: ["Adobe Photoshop", "Adobe Illustrator", "CorelDraw"],
  },
  {
    id: 9,
    title: "Pamphlet",
    alt: "Blockchain-Based Investment Web Application with Admin and User Panels",
    description: [],
    price: 149.99,
    mainImage:
      "https://images.unsplash.com/photo-1500835176302-48dbd01f6437?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image: [bssp, bssp2, bssp3, bssp4],
    techstack: ["Adobe Photoshop", "Adobe Illustrator", "CorelDraw"],
  },
];

export function getProjects(): ProjectType[] {
  return products;
}

export async function getOneProject(
  id: number
): Promise<ProjectType | undefined> {
  return products.find((product) => product.id === id);
}
