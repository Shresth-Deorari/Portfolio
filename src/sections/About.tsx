import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from '@/assets/images/book-cover.png'
import Image from "next/image";
import JavaScriptIcon from '@/assets/icons/square-js.svg'
import HTMLIcon from '@/assets/icons/html5.svg'
import CssIcon from '@/assets/icons/css3.svg'
import ReactIcon from '@/assets/icons/react.svg'
import ChromeIcon from '@/assets/icons/chrome.svg'
import GithubIcon from '@/assets/icons/github.svg'
import MapImage from '@/assets/images/map.png'
import SmileMemoji from '@/assets/images/memoji-smile.png'
import { CardHeader } from '@/components/CardHeader'
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
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
    title: 'Chrome',
    iconType: ChromeIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  }
];

const hobbies = [
  {
    title: 'Painting',
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
    title: 'Hiking',
    emoji: '👟',
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
  return (
    <div className="py-20 lg:py-28">
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
              <ToolboxItems items={toolboxItems} className="" />
              <ToolboxItems items={toolboxItems} itemsWrapperClassName="-translate-x-1/2" className="mt-6" />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-8 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader title="Beyond the Code" description="Explore my interests and hobbies beyond the digital realm"
                className="px-6 py-6" />
              <div className="relative flex-1">
                {hobbies.map(hobby => (
                  <div key={hobby.title} className="inline-flex gap-2 px-6 items-center
                bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" 
                style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}>
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={MapImage} alt="map" className="h-full w-full object-cover object-left-top" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] 
              after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 
              after:rounded-full after:outline-gray-950/30">
                <Image src={SmileMemoji} alt="smiling memoji" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
