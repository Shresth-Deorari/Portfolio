import memojiImage from '@/assets/images/memoji-computer.png'
import Image from 'next/image'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg'
import StarIcon from '@/assets/icons/star.svg'
import HeroOrbit from '@/components/HeroOrbit'
import SparkleIcon from '@/assets/icons/sparkle.svg'

export const HeroSection = () => {
  return (
    <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip' id="Hero">
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none'>
        {/* Grain Background */}
        <div
          className='absolute inset-0 -z-30 opacity-5'
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}></div>

        {/* Rings */}
        <div className='size-[620px] hero-ring'></div>
        <div className='size-[820px] hero-ring'></div>
        <div className='size-[1020px] hero-ring'></div>
        <div className='size-[1220px] hero-ring'></div>

        {/* Stars */}
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration='30s' shouldSpin spinDuration='12s'>
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='12s'>
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration='34s'>
          <div className='size-2 rounded-full bg-emerald-300/20'></div>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration='36s' shouldSpin spinDuration='12s'>
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration='38s' shouldSpin spinDuration='8s'>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='8s'>
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration='42s'>
          <div className='size-2 rounded-full bg-emerald-300/20'></div>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={150} shouldOrbit orbitDuration='44s' shouldSpin spinDuration='12s'>
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration='46s'>
          <div className='size-3 rounded-full bg-emerald-300/20'></div>
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-70} shouldOrbit orbitDuration='48s' shouldSpin spinDuration='8s'>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className='container'>
        <div className='flex flex-col items-center'>
          <Image className='size-[100px]' src={memojiImage} alt='emoji with computer' />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='relative bg-green-500 size-2.5 rounded-full'>
              <div className='bg-green-500 absolute inset-0 rounded-full animate-ping-large'></div>
            </div>
            <div className='text-sm font-medium'>Avialable for new Projects</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className='font-serrif text-3xl md:text-5xl text-center mt-8 tracking-wide'>
            Building Exceptional User Experiences
          </h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>
            I specialize in transforming designs into functional, high performing
            web applications. Let's discuss your next project.
          </p>
        </div>
        <div className='flex flex-col items-center md:flex-row justify-center mt-8 gap-4'>
          <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
            <span className='font-semibold'>Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
            <span className='font-semibold '>Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
