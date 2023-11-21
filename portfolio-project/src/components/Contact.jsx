import { IconMail, IconMap2 } from "@tabler/icons-react"


const contact = () => {
  return (
    <>
        <div className='max-w-6xl py-20 mx-auto px-10'>
            <div>
                <h1 className='text-blue-500 uppercase font-bold text-xl'>contact</h1>
                <p className='font-bold text-3xl mt-2'>You are one step away from reaching me</p>
            </div>
            <div className='flex items-center mt-20 space-x-20'>
                <div className="flex items-center">
                    <div className="rounded-full drop-shadow-xl bg-gray-50 p-3 mr-10">
                        <IconMap2 width={32} height={32} className="text-blue-600"/>
                    </div>
                    <span>
                        <h2 className="text-xl font-medium">Location</h2>
                        <p>Accra, Ghana</p>
                    </span>
                </div>
                <div className="flex items-center justify-center">
                    <div className="rounded-full drop-shadow-xl bg-gray-50 p-3 mr-10">
                        <IconMail width={32} height={32} className="text-blue-600"/>
                    </div>
                    <span>
                        <h2 className="text-xl font-medium">mail</h2>
                        <a className="hover:text-blue-700 font-medium text-gray-600" href="mailto:kevinaihoon16@gmail.com">
                            kevinaihoon16@gmail.com
                        </a>
                    </span>
                </div>    
            </div>
        </div>
    </>
  )
}

export default contact