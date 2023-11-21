import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react"


const Footer = () => {
  return (
    <div className="bg-gray-800">
        <div className='max-w-6xl py-20 mx-auto px-10'>
        <div className="flex justify-between">
            <div className="text-white">copyright © 2023. All right reserved</div>
            <div className="flex hover:-translate-y-5 cursor-pointer">
                <IconBrandLinkedin/>
                <IconBrandGithub/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer