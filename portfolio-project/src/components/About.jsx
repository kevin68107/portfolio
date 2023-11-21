import Face from '../assets/me.jpg'

const About = () => {
  return (
    <>
        <div className='max-w-6xl py-20 mx-auto'>
            <div className='flex px-10'>
            <div className='pr-20'>
                <img className='rounded-2xl h-80 w-[120rem] object-cover' src={Face}/>
            </div>

            <div className='space-y-5 pr-5'>
                <h2 className='text-blue-500 uppercase font-bold text-xl'>About me</h2>
                <p className='font-bold text-3xl'>A dedicated Front-end Developer
                        based in Accra, Ghana </p>
                <p className='text-gray-400 text-lg'>As a Junior Front-End Developer, I possess an impressive 
                arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, 
                and SCSS. I excel in designing and maintaining responsive websites 
                that offer a smooth user experience. My expertise lies in crafting 
                dynamic, engaging interfaces through writing clean and optimized code 
                and utilizing cutting-edge development tools and techniques. I am also 
                a team player who thrives in collaborating with cross-functional teams 
                to produce outstanding web applications.</p>
            </div>
            </div>
        </div>
    </>
  )
}

export default About