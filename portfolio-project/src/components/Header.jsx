

const Header = () => {
  return (
    <div className="sticky top-0 drop-shadow-xl bg-white">
      <div className="flex justify-between items-center mx-auto py-7 px-12">
        <div>
          <h1 className="text-2xl font-bold">Kevin.dev</h1>  
        </div>
        <div className="flex space-x-4 font-semibold text-gray-900">
            <a>Home</a>
            <a>About</a>
            <a>Projects</a>
            <a>Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Header