import React from "react";


const Footer = () => {
  return (
    <div className="md:mx-32 mx-4 md:mb-10 mb-6">
      <hr className="md:mt-12 mt-6" />
      <footer className="md:mt-16 mt-8 flex">
        <p className="md:w-[60%] md:text-xl md:font-tertiaryFont hidden md:block">
          © 2023 Templify by Patryk Moskot
        </p>

        <div className="md:w-[40%] w-full flex md:justify-end justify-center">
          <a href="MyWork2">
            <p className="font-primaryFont md:text-3xl text-2xl  relative group">
              Work
              <span class="absolute bottom-0 left-0 w-0 h-0.5  bg-gray-800 group-hover:w-full group-hover:transition-all group-hover:duration-300"></span>
            </p>
          </a>

          <a href="MoreAbout">
            <p className="md:text-3xl text-2xl ml-8 font-primaryFont relative group">
              About
              <span class="absolute bottom-0 left-0 w-0 h-0.5  bg-gray-800 group-hover:w-full group-hover:transition-all group-hover:duration-300"></span>
            </p>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
