import Face from '../assets/me.jpg'

const Hero = () => {
  return (
    <div className='max-w-6xl py-20 mx-auto'>
      <div className='flex justify-between px-10'>
        <div>
            <h1 className='font-extrabold text-2xl'>Front-End Developer✌</h1>
            <p>Hi, I&#39;m Kevin Aihoon a passionate front-end Developer based in Ghana.</p>
        </div>
        <div>
            <img className='rounded-full w-80 h-80' src={Face}/>
        </div>
      </div>
      <div>
        <p>Tech Stack</p>
      </div>
    </div>
  )
}

export default Hero