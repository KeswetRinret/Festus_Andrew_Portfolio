import React from "react";
import { NavLink, Link } from "react-router-dom";

const Works = () => {
  return (
    <div className="container mx-auto my-6 max-w-full mt-6">
      <div className="w-full flex flex-col justify-center items-center space-y-2">
        <NavLink to={"/"}>
          <img
            className="rounded-full size-36"
            src="https://framerusercontent.com/images/KwncUFvOHcwyCrBvsIzWSbIoxSc.png"
            alt=""
          />
        </NavLink>
      </div>

      <div className="flex justify-between mx-32 mt-8">
        <p className="font-primaryFont text-4xl font-semibold">My Works</p>
        {/* <Link to={"./Works"}>
        <p class="font-primaryFont text-xl font-semibold relative group">
          All Works
          <span class="absolute bottom-0 left-0 w-0 h-0.5  bg-black group-hover:w-full group-hover:transition-all group-hover:duration-300"></span>
        </p>
        </Link> */}
      </div>
      <hr className="mx-32 mt-6 border " />

      <div className=" flex  justify-center items-center space-x-10 mt-14">
        <div className="relative overflow-hidden ">
          <Link to={"./Marb"}>
            <img
              className=" w-[500px] h-[600px] object-cover rounded-2xl hover:scale-110 transition duration-500 cursor-pointer "
              src="https://framerusercontent.com/images/ZuDzZNFD4y4ZbZ3Cf9QFDB0vGs.jpg?scale-down-to=2048"
              alt="Marb Store"
            />
            <div className="absolute bottom-0 text-white p-10 font-tertiaryFont  ">
              <h3 className="mb-2 text-3xl font-semibold">Marb Store</h3>
              <p className=" text-white cursor-pointer">UI/UX,Branding</p>
            </div>
          </Link>
        </div>

        <div className="relative overflow-hidden ">
          <Link to={"./ProClub"}>
            <img
              className="w-[500px] h-[600px] object-cover rounded-2xl hover:scale-110 transition duration-500 cursor-pointer"
              src="https://framerusercontent.com/images/kYjjTQZX4yro1jpWWY7stCFLY.jpg"
              alt=""
            />
            <div className="absolute bottom-0 text-white p-10 font-tertiaryFont  ">
              <h3 className="mb-2 text-3xl font-semibold">
                ProDevelopers Club
              </h3>
              <p className=" text-white cursor-pointer">UI/UX,Branding</p>
            </div>
          </Link>
        </div>
      </div>

      <div className=" flex  justify-center items-center space-x-10 mt-8">
        <div className="relative overflow-hidden">
          <Link to={"./Infinity"}>
            <img
              className="w-[500px] h-[600px] object-cover rounded-2xl hover:scale-110 transition duration-500 cursor-pointer"
              src="https://framerusercontent.com/images/DjmKQYQKRd2h0Q1wAkfkOGHIYw.jpg"
              alt=""
            />
            <div className="absolute bottom-0 text-white p-10 font-tertiaryFont  ">
              <h3 className="mb-2 text-3xl font-semibold">Infinity Gem</h3>
              <p className=" text-white cursor-pointer">UI/UX</p>
            </div>
          </Link>
        </div>

        <div className="relative overflow-hidden">
          <Link to={"./Wander"}>
            <img
              className="w-[500px] h-[600px] object-cover rounded-2xl hover:scale-110 transition duration-500 cursor-pointer"
              src="https://framerusercontent.com/images/WisIsy97GUDG2UDk2aEq1F6MUaY.jpg?scale-down-to=2048"
              alt=""
            />
            <div className="absolute bottom-0 text-white p-10 font-tertiaryFont  ">
              <h3 className="mb-2 text-3xl font-semibold">Wander</h3>
              <p className=" text-white cursor-pointer">UI/UX,Branding</p>
            </div>
          </Link>
        </div>
      </div>

      <section id="contact">
        <div className="mx-32 mt-20 mb-6 h-fit ">
          <div href="contact">
            <p className="text-5xl font-tertiaryFont font-semibold">Contact</p>
          </div>
          <hr className="mt-10" />

          <div className="">
            <div className="mt-12 flex">
              <p className="w-1/2 text-8xl space-y-8">
                Let's <br /> work <br /> together
              </p>

              <p className="w-1/2 font-secondaryFont text-xl leading-8">
                I'm very happy to tackle new challenges and dive into the most
                innovative projects. If you are looking for a dedicated and
                enthusiastic designer to enhance your vision, this is where it
                will end. We'll work together to develop unique experiences that
                will be remembered forever. Contact me, and let's go on an
                exciting journey together to meet your objectives!
                <div className=" mt-10 text-3xl font-tertiaryFont font-semibold relative group">
                  <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 group-hover:w-full group-hover:transition-all group-hover:duration-300"></span>
                  festusandrew23@gmail.com
                </div>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-32 mb-10">
        <hr className="mt-12" />
        <footer className="mt-16 flex">
          <p className="w-[60%] text-xl font-tertiaryFont">
            © 2023 Templify by Patryk Moskot
          </p>

          <div className=" w-[40%] flex justify-end ">
            <a href="MyWork2">
              <p className="font-primaryFont text-3xl  relative group">
                Work
                <span class="absolute bottom-0 left-0 w-0 h-0.5  bg-gray-800 group-hover:w-full group-hover:transition-all group-hover:duration-300"></span>
              </p>
            </a>

            <a href="MoreAbout">
              <p className="text-3xl ml-8 font-primaryFont relative group">
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
