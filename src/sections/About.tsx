'use client'

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from '@/assets/images/book-cover.png'
import Image from "next/image";
import JavaScriptIcon from '@/assets/icons/square-js.svg'
import HTMLIcon from '@/assets/icons/html5.svg'
import CssIcon from '@/assets/icons/css3.svg'
import ReactIcon from '@/assets/icons/react.svg'
import Java from '@/assets/icons/java.svg'
import Kotlin from '@/assets/icons/kotlin.svg'
import Python from '@/assets/icons/python.svg'
import Cpp from '@/assets/icons/cpp.svg'
import GithubIcon from '@/assets/icons/github.svg'
import ChromeIcon from '@/assets/icons/chrome.svg'
import IitpMap from '@/assets/images/iitp-map.png'
import MyEmoji from '@/assets/images/file.png'
import { CardHeader } from '@/components/CardHeader'
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: 'C++',
    iconType: Cpp
  },
  {
    title: 'Kotlin',
    iconType: Kotlin,
  },
  {
    title: 'Java',
    iconType: Java,
  },
  {
    title: 'Python',
    iconType: Python,
  },
  {
    title: 'JavaScript',
    iconType: JavaScriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS3',
    iconType: CssIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon,
  }
  
];

const hobbies = [
  {
    title: 'Sketching',
    emoji: '🎨',
    top: "5%",
    left: "5%",
  },
  {
    title: 'Photography',
    emoji: '📸',
    left: "50%",
    top: "5%",
  },
  {
    title: 'Guitarist',
    emoji: '🎸',
    left: "35%",
    top: "40%",
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: "10%",
    top: "35%",
  },
  {
    title: 'Music',
    emoji: '🎵',
    left: "70%",
    top: "45%",
  },
  {
    title: 'Fitness',
    emoji: '🏋',
    left: "5%",
    top: "65%",
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28" id="About">
      <div className="container">
        <SectionHeader eyebrow="About Me" title="A Glimpse Into My World"
          description="Learn more about who i am, what i do and what inspires me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="My Reads" description="Explore the books shaping my perspective" />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" className="" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader title="My Toolbok"
                description="Explore the Technologies and tools I use 
              to scraft exceptional digital experiences"
                className=""
              />
              <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
              <ToolboxItems items={toolboxItems} itemsWrapperClassName="animate-move-right [animation-duration:15s]" className="mt-6" />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-8 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader title="Beyond the Code" description="Explore my interests and hobbies beyond the digital realm"
                className="px-6 py-6" />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map(hobby => (
                  <motion.div key={hobby.title} className="inline-flex gap-2 px-6 items-center
                bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" 
                style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}>
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={IitpMap} alt="map" className="h-full w-full object-cover object-left-top" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              size-20 rounded-full after:content-[''] 
              after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 
              after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full
                 bg-gradient-to-r from-emerald-300 to-sky-400 animate-ping [animation-duration:2s] -z-20"></div>
                 <div className="absolute inset-0 rounded-full
                 bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image 
                  src={MyEmoji} 
                  alt="smiling memoji" 
                  className="size-20 overflow-clip rounded-full object-cover" 
                  style={{objectPosition: '0 2px'}} 
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
