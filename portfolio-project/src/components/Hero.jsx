import Face from '../assets/me.jpg'
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react'

const Hero = () => {
  return (
    <div className=' bg-gray-50'>
      <div className='max-w-6xl py-20 mx-auto px-10'>
        <div className='flex space-x-5'>
          <div className='space-y-6 w-7/12'>
              <h1 className='text-6xl font-semibold'>Front-End Developer✌</h1>
              <p className='text-xl font-medium flex flex-wrap'>Hi, I&#39;m Kevin Aihoon a passionate front-end Developer based in Accra, Ghana.</p>
              <span className='flex space-x-5'>
                <a
                className='hover:text-blue-400'
                aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/kevin-aihoon-917b84182/"
                ><IconBrandLinkedin width={32} height={32} /></a>
                <a
                className='hover:text-blue-400'
                aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/kevin68107"
                ><IconBrandGithub width={32} height={32} /></a>
              </span>
          </div>
          <div>
              <img className='rounded-full w-80 h-80' src={Face}/>
          </div>
        </div>
      <div>
        <p className='text-lg font-medium'>Tech Stack</p>
      </div>
      </div>
    </div>
  )
}

export default Hero