import laundryLink from '@/assets/images/laundry-link.png'
import wcaShresth from '@/assets/images/wca-shresth.png'
import littleLemon from '@/assets/images/little-lemon.png'
import Image from 'next/image'
import CheckCircleIcon from '@/assets/icons/check-circle.svg'
import ArrayUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'
import {SectionHeader} from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    "month": "October",
    "year": "2024",
    "title": "Laundry Link",
    "results": [
      { "title": "Built using Jetpack Compose and Material3 for a sleek, responsive UI." },
      { "title": "Enabled real-time bookings with Firebase Firestore, supporting 100 users." },
      { "title": "Revolutionizing machine management at IIT Patna, awaiting official recognition." }
    ],
    "link": "https://github.com/Shresth-Deorari/Laundry-Link",
    "image": laundryLink
  },  
  {
    "month": "August",
    "year": "2024",
    "title": "WhatsApp Chat Analyzer",
    "results": [
      { "title": "Performed EDA and sentiment analysis, providing valuable insights." },
      { "title": "Utilized SQLAlchemy for database integration for real-time data exploration." },
      { "title": "Built a secure encryption system using werkzeug." }
    ],
    "link": "https://github.com/Shresth-Deorari/Shresth-Wca",
    "image": wcaShresth
  },
  {
    "month": "Ongoing Projects",
    "year": "2024 & beyond",
    "title": "Little Lemon Food App & Code Editor in WSL",
    "results": [
      { "title": "Capstone project for Meta’s Professional Android Development Certification." },
      { "title": "Incorporating UI/UX principles, wireframing, and MVVM architecture." },
      { "title": "Developing a Code Editor in C to deepen low-level programming skills closer to hardware." }
    ],
    "link": "https://github.com/Shresth-Deorari/little-lemon",
    "image": littleLemon
  }  
];

export const ProjectsSection = () => {
  return (
  <section className="pb-16 lg:py-24" id="Projects">
    <div className="container">
    <SectionHeader eyebrow="My Journey in Code" title="Featured Projects" description="Explore how I turned ideas into impactful solutions, across diverse domains ." />
    <div className="flex flex-col mt-10 md:mt-20 gap-20">
        {portfolioProjects.map((project,projectIndex)=>(
          <Card key={project.title} className="px-8 pb-0 pt-8 md:pt-12 md:px-10 lg:px-20 lg:pt-16 after:pointer-events-none
          sticky" style={{
            top:`calc(64px + ${projectIndex * 55}px)`
          }}>
            <div className="absolute inset-0 -z-10 opacity-5" style={{backgroundImage:`url(${grainImage.src})`}}></div>

            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 
              inline-flex gap-2 font-bold tracking-widest text-sm
              text-transparent bg-clip-text uppercase">
                <span>
                  {project.month} 
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
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-white text-gray-950 h-12 w-full md:w-auto
                rounded-xl font-semibold flex justify-center items-center 
                gap-2 mt-8 px-6">
                  <span>
                    View Source Code
                  </span>
                  <ArrayUpRightIcon className="size-4"/>
                </button>
              </a>
            </div>
            <div>
              <Image src={project.image} alt={project.title} 
              className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
            </div>
            </div>
          </Card>     
        ))}
      </div>
    </div>
  </section>);
};
