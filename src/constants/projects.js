import login from '../assets/images/Projects/login.png';
import frame1 from '../assets/images/Projects/frame1.png'
import br from "../assets/images/Projects/br.png";
import ag from '../assets/images/Projects/ag.png';
import chat from "../assets/images/Projects/chat.png";
import sprintsync from '../assets/images/Projects/sprintsync.png';
import gocli from '../assets/images/Projects/gocli.jpg';
import keepNotes from "../assets/images/Projects/keepNotes.png";
import movieLand from "../assets/images/Projects/movieLand.jfif";
import npm from '../assets/images/Projects/npm.jpg';
import portfolio from '../assets/images/Projects/portfolio.jpg';
import videotube from "../assets/images/Projects/video-tube.png";

import {
    AiFillHtml5,
    BsDiamond,
    BsDroplet,
    DiDatabase,
    FaStripe,
    GiDiamondTrophy,
    GrDiamond,
    GrStripe,
    RiDrizzleFill,
    RiDrizzleLine,
    SiAmazonaws,
    SiBootstrap,
    SiCss3,
    SiDart,
    SiExpress,
    SiFigma,
    SiFirebase,
    SiFlutter,
    SiGo,
    SiHtml5,
    SiJavascript,
    SiMaterialui,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiNpm,
    SiReact,
    SiRedux,
    SiStripe,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
    SiVite
} from "react-icons/all";

export const PROJECTS = [
  {
    id: "project-200",
    title: "Campus Connect",
    link: "https://www.figma.com/design/EvvRYA4JUpFOlhrIZgBoSo/Campus?node-id=0-1&t=Q9NvzMLuA94Mzbys-1",
    image: login,
    content:
      "Designed a user-centric social media platform tailored for campus students to connect, collaborate, and share experiences.",
    stack: [
      {
        id: "icon-1",
        icon: SiFigma,
        name: "Figma"
      },
    ],
  },
  {
    id: "project-201",
    title: "Websters",
    link: "https://www.figma.com/design/5WcWjQTvgtB62O48cC3oYb/Websters?t=Q9NvzMLuA94Mzbys-0",
    image: frame1,
    content:
      " Created an interactive college event website in Figma to showcase, promote, and manage campus events efficiently.",
    stack: [
      {
        id: "icon-1",
        icon: SiFigma,
        name: "Figma "
      },
    ],
  },
  {
    id: "project-100",
    title: "Brahma Recycles",
    image: br,
    content:
      "Developed a static website for Romanian Scrapping Company.",
    stack: [
      {
        id: "icon-1",
        icon: SiHtml5,
        name: "HTML"
      },
      {
        id: "icon-2",
        icon: SiCss3,
        name: "CSS"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "Javascript"
      },

    ],
  },
  {
    id: "project-101",
    title: "Aureate Global",
    image: ag,
    content:
      "Developed a website for Real State Company.",
    stack: [
      {
        id: "icon-1",
        icon: SiHtml5,
        name: "HTML"
      },
      {
        id: "icon-2",
        icon: SiCss3,
        name: "CSS"
      },
      {
        id: "icon-3",
        icon: SiBootstrap,
        name: "BootStrap"
      },
      {
        id: "icon-4",
        icon: SiJavascript,
        name: "Javascript"
      },
    ],
  },
  {
    id: "project-1",
    title: "Real Time Chat App",
    image: chat,
    content:
      "Working on a real-time chat application featuring user authentication and seamless messaging. ",
    stack: [
      {
        id: "icon-1",
        icon: SiMongodb,
        name: "MongoDB"
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: SiCss3,
        name: "CSS"
      },
      {
        id: "icon-4",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-5",
        icon: SiFirebase,
        name: "Firebase"
      },
    ],
  },
  {
    id: "project-2",
    title: "SprintSync",
    image: sprintsync,
    content:
      "In the process of building a full-stack project management tool with features like task management, deadlines, and team coordination.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS"
      },
      {
        id: "icon-3",
        icon: SiNodedotjs,
        name: "Nodejs"
      },
      {
        id: "icon-4",
        icon: SiMysql,
        name: "Mysql"
      },
      {
        id: "icon-5",
        icon: SiTypescript,
        name: "Typescript"
      },
      {
        id: "icon-6",
        icon: SiAmazonaws,
        name: "AWS"
      },

    ],
  },

]