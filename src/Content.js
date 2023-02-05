// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar6 from "./assets/images/Testimonials/avatar6.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Full Stack Developer",
    firstName: "SADMAN",
    LastName: "HOSSAIN",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of Experinse in Web development",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React js",
        logo: reactjs,
      },
      {
        name: "Express",
        logo: figma,
      },
      {
        name: "Node js",
        logo: nodejs,
      },
      {
        name: "JavaScript",
        logo: ps,
      },
      {
        name: "Django",
        logo: sketch,
      },
      {
        name: "Python",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Frontend Development",
        para: "I’m a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction.",
        logo: services_logo1,
      },
      {
        title: "Full Stack Development",
        para: "As a full stack developer, I handle the both frontend and the backend part and client can complete his project under a Reasonable price.",
        logo: services_logo1,
      },
      {
        title: "Backend Developer ",
        para: "I’m a Back End Web developer who is passionate about making error-free Backend part of a website with 100% client satisfaction.",
        logo: services_logo1,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Restaurant Website",
        image: project1,
        link: "https://restaurant400.netlify.app"
      },
      {
        title: "Portfolio Website",
        image: project2,
        link: "https://portfolio-400.netlify.app/"
      },
      {
        title: "Creative Website",
        image: project3,
        link: "https://stirring-cascaron-cbb05f.netlify.app/"
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Sadman was great to work with, very professional!”",
        img: avatar6,
        name: "Ryan Porter",
      },
      {
        review:
          "“Great work with Sadman hossain his work is very fast",
        img: avatar2,
        name: "Tom Alex",
      }
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "As a full stack developer I always try to learn new technologies for surviving in this competitive market. And i love to learn new language or framework for developing awesome and mind-blowing product. And i have 3 years of working experience.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "sadmanhossain400@gmail.com",
        icon: GrMail,
        link: "mailto:sadmanhossain400@gmail.com",
      },
      {
        text: "+88 01840 125084",
        icon: MdCall,
        link: "https://wa.me/01840125084",
      },
    ],
  },
  Footer: {
    text: "© Copy Right Reserved By Sadman Hossain",
  },
};
