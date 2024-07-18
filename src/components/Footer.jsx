import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {
  return (
    <div className='mx-32 mb-10'>
       <hr className="mt-12" />
      <footer className="mt-16 flex">
        <p className="w-[60%] text-xl font-tertiaryFont">
          © 2023 Templify by Patryk Moskot
        </p>

        <div className=" w-[40%] flex justify-end ">
            <Link to={"./Works"}>
          <p className="font-primaryFont text-3xl  relative group">
            Work
            <span class="absolute bottom-0 left-0 w-0 h-0.5  bg-gray-800 group-hover:w-full group-hover:transition-all group-hover:duration-300"></span>
          </p>
          </Link>

          <Link to={"./About"}>
          <p className="text-3xl ml-8 font-primaryFont relative group">
            
            About
            <span class="absolute bottom-0 left-0 w-0 h-0.5  bg-gray-800 group-hover:w-full group-hover:transition-all group-hover:duration-300"></span>
          </p>
          </Link>
        </div>

      </footer>
    </div>
  )
}

export default Footer
