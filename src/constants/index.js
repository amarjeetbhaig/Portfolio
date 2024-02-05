import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  radicalx,
  aistechx,
  suven,
  zumply,
  carrent,
  MTL,
  Foodiecart,
  Angularjs,
  cpp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Game Developer",
    icon: mobile,
  },
  {
    title: "Fronted Developer",
    icon: backend,
  },
  {
    title: " Software Developer ",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Angular JS",
    icon: Angularjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Cpp",
    icon: cpp,
  },
];

const experiences = [
  {
    title: " Fronted Developer",
    company_name: "AISTECHX",
    icon: aistechx,
    iconBg: "#ebedf5",
    date: "July 2022 - Sep 2022",
    points: [
      "Developing and maintaining web applications using Html, css, js, Bootstrap  and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "In this Intern working in Bloging web app as Fronted Developer",
    ],
  },
  {
    title: " Full stack Developer ",
    company_name: "Suven Consultants & Technology Pvt Ltd",
    icon: suven,
    iconBg: "#303a59",
    date: "Oct 2022- Nov 2022",
    points: [
      "I specialize in developing and maintaining web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack technologies.",
      "Collaborate with cross-functional teams, including designers, product managers, and fellow developers, to produce high-quality products that align with user needs and business goals.",
      "Actively engage in code reviews, offering constructive feedback to uphold code quality standards and contribute to continuous improvement in the overall development process.",
      "In this Intern Working in Inventry management system using MERN stack "
    ],
  },
  {
    title: "Software Developer",
    company_name: "Zumply software private limited LLp",
    icon: zumply,
    iconBg: "#ebedf5",
    date: "Jan 2022 - Jan 2023",
    points: [
      "As a software developer, I was fortunate enough to be a part of a talented team that collaborated on the development of a Doctor Appointment Booking System.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "The Doctor Appointment Booking System aims to simplify and streamline the appointment booking process for both patients and doctors",
      "In this Intern Working in Doctor Appointment Booking System using Spring Boot , Angular js, java, RestApi,  MySql .",
    ],
  },
  {
    title: " Software Engineer ",
    company_name: "Radicalx ai",
    icon: radicalx,
    iconBg: "#6aa0c4",
    date: " November 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js , Redux, Tailwindcss  and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I didn't think it was possible to create a website that's as visually stunning as our product, but Amarjeet proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    testimonial:
      "I have never met a web developer who cares about their clients' success as much as AJ does",
    name: "Chrish Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    testimonial:
      "After Amarjeet optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
  },
];

const projects = [
  {
    name: "E-commerce Admin Dashboard",
    description:
      "The E-commerce Admin Dashboard is a user interface created using the React JavaScript library, allowing for the creation of dynamic and responsive components. This ensures that administrators can efficiently navigate, monitor, and manage the various aspects of the e-commerce platform through a modern and user-friendly interface, providing a seamless and interactive user experience",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Multi-Thread Library ",
    description:
      "This project involves creating a C++ multi-threaded library with a simple web interface. The C++ library utilizes the <thread> and <functional> libraries to manage tasks concurrently. The web interface, designed with HTML and styled using CSS, features a  button. JavaScript, interacting with the C++ backend through WebAssembly, triggers the execution of tasks when the button is clicked. The C++ code is compiled to WebAssembly using Emscripten,",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: MTL,
    source_code_link: "https://github.com/",
  },
  {
    name: "FoodCart",
    description:
      "A React-Redux-powered FoodCart app providing users with a seamless ordering experience. Leveraging React for the UI and Redux for global state management, it ensures real-time updates to the cart and order details. The application's modular structure and responsive design enhance user interaction. Overall, it showcases the power of React-Redux in building scalable, dynamic, and responsive e-commerce applications.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Foodiecart,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
