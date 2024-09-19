import React from "react";
import { NavLink, Link } from "react-router-dom";

const Works = () => {
  return (
    <div className="mx-4 md:my-6 my-2 md:max-w-full ">
      <div className="w-full flex flex-col justify-center items-center space-y-2">
        <NavLink to={"/"}>
          <img
            className="rounded-full size-36"
            src="https://framerusercontent.com/images/KwncUFvOHcwyCrBvsIzWSbIoxSc.png"
            alt=""
          />
        </NavLink>
      </div>

      <div className="flex justify-between md:mx-32  md:mt-8 mt-4">
        <p className="font-primaryFont md:text-4xl text-2xl font-semibold">
          My Works
        </p>
      </div>
      <hr className="md:mt-6 mt-4 " />

      <div className=" flex  justify-center items-center gap-8 md:mx-0 md:mt-14 mt-8 flex-col md:flex-row">
        <div className="relative overflow-hidden ">
          <Link to={"../../Marb"}>
            <img
              className=" w-[500px] h-64 md:h-[600px] object-cover rounded-2xl hover:scale-110 transition duration-500 cursor-pointer "
              src="https://framerusercontent.com/images/ZuDzZNFD4y4ZbZ3Cf9QFDB0vGs.jpg?scale-down-to=2048"
              alt="Marb Store"
            />
            <div className="absolute bottom-0 text-white md:p-10 p-6 font-tertiaryFont ">
              <h3 className="md:mb-2 md:text-3xl text-2xl font-semibold">
                Marb Store
              </h3>
              <p className=" text-white cursor-pointer">UI/UX,Branding</p>
            </div>
          </Link>
        </div>

        <div className="relative overflow-hidden ">
          <Link to={"../../ProClub"}>
            <img
              className="w-[500px] h-64 md:h-[600px] object-cover rounded-2xl hover:scale-110 transition duration-500 cursor-pointer"
              src="https://framerusercontent.com/images/kYjjTQZX4yro1jpWWY7stCFLY.jpg"
              alt=""
            />
            <div className="absolute bottom-0 text-white md:p-10 p-4 font-tertiaryFont  ">
              <h3 className="md:mb-2 md:text-3xl text-2xl font-semibold">
                ProDevelopers Club
              </h3>
              <p className=" text-white cursor-pointer">UI/UX,Branding</p>
            </div>
          </Link>
        </div>
      </div>

      <div className=" flex  justify-center items-center gap-8 md:mx-0 md:mt-14 mt-8 flex-col md:flex-row">
        <div className="relative overflow-hidden">
          <Link to={"../../Infinity"}>
            <img
              className="w-[500px] h-64 md:h-[600px] object-cover rounded-2xl hover:scale-110 transition duration-500 cursor-pointer"
              src="https://framerusercontent.com/images/DjmKQYQKRd2h0Q1wAkfkOGHIYw.jpg"
              alt=""
            />
            <div className="absolute bottom-0 text-white md:p-10 p-4 font-tertiaryFont  ">
              <h3 className="md:mb-2 md:text-3xl text-2xl font-semibold">
                Infinity Gem
              </h3>
              <p className=" text-white cursor-pointer">UI/UX</p>
            </div>
          </Link>
        </div>

        <div className="relative overflow-hidden">
          <Link to={"../../Wander"}>
            <img
              className="w-[500px] h-64 md:h-[600px] object-cover rounded-2xl hover:scale-110 transition duration-500 cursor-pointer"
              src="https://framerusercontent.com/images/WisIsy97GUDG2UDk2aEq1F6MUaY.jpg?scale-down-to=2048"
              alt=""
            />
            <div className="absolute bottom-0 text-white md:p-10 p-4 font-tertiaryFont ">
              <h3 className="md:mb-2 md:text-3xl text-2xl font-semibold">
                Wander
              </h3>
              <p className=" text-white cursor-pointer">UI/UX,Branding</p>
            </div>
          </Link>
        </div>
      </div>

      <section id="contact">
        <div className="md:mx-32 mx-4 md:mt-20 mt-14 mb-6 h-fit ">
          <div href="contact">
            <p className="md:text-5xl text-3xl font-tertiaryFont font-semibold">
              Contact
            </p>
          </div>
          <hr className="md:mt-10 mt-6" />

          <div className="">
            <div className="md:mt-12 mt-7 flex md:flex-row flex-col">
              <p className="md:w-1/2 w-full md:text-8xl text-5xl md:space-y-8">
                Let's <br /> work <br /> together
              </p>

              <p className="md:w-1/2 w-full font-secondaryFont md:text-xl text-lg md:leading-8 leading-7 mt-4">
                I'm very happy to tackle new challenges and dive into the most
                innovative projects. If you are looking for a dedicated and
                enthusiastic designer to enhance your vision, this is where it
                will end. We'll work together to develop unique experiences that
                will be remembered forever. Contact me, and let's go on an
                exciting journey together to meet your objectives!
                <div className="md:mt-10 mt-4 md:text-3xl text-xl w-full ml-4 font-tertiaryFont font-semibold relative group">
                  <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 group-hover:w-full group-hover:transition-all group-hover:duration-300"></span>
                  festusandrew23@gmail.com
                </div>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="md:mx-32 mx-4 md:mb-10 mb-6">
        <hr className="md:mt-12 mt-6" />
        <footer className="md:mt-16 mt-8 flex">
          <p className="md:w-[60%] md:text-xl md:font-tertiaryFont hidden md:block">
          @ 2024 Festus Andrew
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
    </div>
  );
};

export default Works;
