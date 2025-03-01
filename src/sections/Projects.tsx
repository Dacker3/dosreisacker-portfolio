import chevronLandingPage from "@/assets/images/Chevron-logo.jpg";
import netflixLandingPage from "@/assets/images/netlfix-clone.jpg";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";

import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Chevron",
    year: "2024",
    title: "Network Visibilty Dashboard",
    results: [
      { title: "Reduced deployment failures by 30%" },
      { title: "Improved oversight by 50%" },
      { title: "Enhanced network efficiency and performance" },
    ],
    link: "",
    image: chevronLandingPage,
  },
  {
    company: "Personal Project",
    year: "2025",
    title: "MERN Netflix Sample",
    results: [
      { title: "Implemented user authentication with JWT for secure access" },
      { title: "Built a dynamic UI with React and Tailwind for a seamless experience" },
      { title: "Integrated a movie database API to fetch real-time content" },
    ],
    link: "https://mern-netflix-sample.onrender.com",
    image: netflixLandingPage,
  },
];

export const ProjectsSection = () => {
  return(
  <section className="pb-16 lg:py-34">
    <div className="container">
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">Real-world Results</p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">Featured Projects</h2>
      <p className="text-center md:text-lg text-white/60 mt-4 max-w-md mx-auto lg:text-xl">See how I transformed concepts into engaging digital experiences</p>
      <div className="flex flex-col mt-10 gap-20 md:mt-20">
        {portfolioProjects.map((project, projectIndex) => (
          <Card key={project.title} className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky" style = {{
            top: `calc(64px + ${projectIndex * 40}px)`,
          }}>
            <div className = "lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="lg:pb-16">
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
              <span>{project.year}</span>
              <span>&bull;</span>
              <span>{project.company}</span>
              </div>
              <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
              <ul className="flex flex-col gap-4 mt-4">
                {project.results.map((result) => (
                  <li key ={result.title} className = "flex gap-2 text-sm text-white/50 md:text-base">
                    <CheckCircleIcon className="size-5 md:size-6" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <a href = {project.link}>
                <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                  <span>View Live Site</span>
                  <ArrowUpRight classname="size-4"/>
                </button>
              </a>
            </div>
              <div className="relative">
              <Image src={project.image} alt={project.title}  
              className = "mt-8 -mb-4 md: -mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
  );
};
