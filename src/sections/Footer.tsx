import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'

const footerLinks=[
  {
    title:'LinkedIn',
    href:'https://www.linkedin.com/in/shresth-deorari-iit-patna/',
  },
  {
    title:'Github',
    href:'https://github.com/Shresth-Deorari',
  },
  {
    title:'Gmail',
    href:'mailto:shresthdeorari38@gmail.com', // Changed to mailto for email
  },
  {
    title:'Leetcode',
    href:'https://leetcode.com/u/Shresth_Deorari/',
  },
];

export const Footer = () => {
  return( 
    <footer className='relative z-0'>
      <div className='absolute h-[400px] w-full max-w-[1600px] bottom-0 
      left-1/2 -translate-x-1/2 bg-emerald-300/30 -z-10 overflow-x-clip
      [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]'></div>

      <div className='container relative z-10'>
        <div className='border-t border-white/15 py-6 
          text-sm flex flex-col md:flex-row md:justify-between items-center gap-8'>
          <div className='text-white/40'>
            &copy; 2024. All rights reserved.
          </div>
          <nav className='flex flex-col md:flex-row gap-8 items-center'>
            {footerLinks.map(link=>(
              <a 
                href={link.href} 
                key={link.title} 
                target="_blank" 
                rel="noopener noreferrer"
                className='inline-flex items-center gap-1.5 
                hover:text-white/80 transition-colors duration-300'
              >
                <span className='font-semibold'>{link.title}</span>
                <ArrowUpRightIcon className="size-4"/>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
};