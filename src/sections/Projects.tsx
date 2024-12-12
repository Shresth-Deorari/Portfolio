import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import { profileEnd } from "console";
import Image from 'next/image'
import CheckCircleIcon from '@/assets/icons/check-circle.svg'
import ArrayUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
  <section className="pb-16">
    <div className="container">
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
          Real-World Results
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
        Featured Projects
      </h2>
      <p className="text-center md:text-lg text-white/60 mt-4 max-w-md mx-auto">
        See how i transformed concepts into egaging digital experiences.
      </p>
      <div className="flex flex-col mt-10 md:mt-20 gap-20">
        {portfolioProjects.map(project=>(
          <div key={project.title} className="bg-gray-800 rounded-3xl relative z-0 
            overflow-hidden after:z-10 content-[''] after:absolute after:inset-0
            after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl
            after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 :after:pointer-events-none">
            <div className="absolute inset-0 -z-10 opacity-5" style={{backgroundImage:`url(${grainImage.src})`}}></div>
            <div className="bg-gradient-to-r from-emerald-300 to-sky-400 
            inline-flex gap-2 font-bold tracking-widest text-sm
            text-transparent bg-clip-text uppercase">
              <span>
                {project.company} 
              </span>
              <span>&bull;</span>
              <span>
                {project.year}
              </span>
            </div>
            <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">{project.title}</h3>
            <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
            <ul className="flex flex-col gap-4 mt-4 md:mt-5">
              {project.results.map((result)=>(
                <li className="flex gap-2 text-sm md:text-base text-white/50" key={project.title}>
                  <CheckCircleIcon className="size-5 md:size-6"/>
                  <span>
                    {result.title}
                  </span>
                </li>
              ))}
            </ul>
            <a href={project.link}>
              <button className="bg-white text-gray-950 h-12 w-full md:w-auto
              rounded-xl font-semibold flex justify-center items-center 
              gap-2 mt-8 px-6">
                <span>
                  View Source Code
                </span>
                <ArrayUpRightIcon className="size-4"/>
              </button>
            </a>
            <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:mb-0"/>
          </div>
        ))}
      </div>
    </div>
  </section>);
};