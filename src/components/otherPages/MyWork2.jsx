import React from "react";
import { NavLink, Link } from "react-router-dom";
import Footer from "../pages/Footer";
import Contact from "../pages/Contact";

const Works = () => {
  return (
    <div>
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

        
      </div>

      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Works;
