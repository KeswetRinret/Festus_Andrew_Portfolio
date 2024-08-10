import React from "react";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <div className=" md:mx-auto my-6">
      <div className="flex justify-between md:mx-32 mx-6 ">
        <p className="font-primaryFont md:text-4xl text-2xl font-semibold">My Works</p>
          <Link to={"./MyWork2"}>
        <p class="font-primaryFont md:text-xl text-lg font-semibold relative group">
          All Works
           <span class="absolute bottom-0 left-0 w-0 h-0.5  bg-black group-hover:w-full group-hover:transition-all group-hover:duration-300"></span>
        </p>
        </Link>
      </div>
      <hr className="md:mx-28 md:mt-6 mt-6 border mx-6 " />

      <div className=" flex  justify-center items-center gap-8 mx-3 md:mx-4 md:mt-14 mt-8 flex-col md:flex-row">
        <div className="relative overflow-hidden ">
          <Link to={"./Marb"}>
            <img
              className=" w-[500px] h-64 md:h-[600px] object-cover rounded-2xl hover:scale-110 transition duration-500 cursor-pointer "
              src="https://framerusercontent.com/images/ZuDzZNFD4y4ZbZ3Cf9QFDB0vGs.jpg?scale-down-to=2048"
              alt="Marb Store"
            />
            <div className="absolute bottom-0 text-white md:p-10 p-6 font-tertiaryFont ">
              <h3 className="md:mb-2 md:text-3xl text-2xl font-semibold">Marb Store</h3>
              <p className=" text-white cursor-pointer">UI/UX,Branding</p>
            </div>
          </Link>
        </div>

        <div className="relative overflow-hidden ">
          <Link to={"./ProClub"}>
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

      <div className=" flex  justify-center items-center gap-8 mx-3 md:mx-4 mt-8 flex-col md:flex-row">
        <div className="relative overflow-hidden">
          <Link to={"./Infinity"}>
            <img
              className="w-[500px] h-64 md:h-[600px] object-cover rounded-2xl hover:scale-110 transition duration-500 cursor-pointer"
              src="https://framerusercontent.com/images/DjmKQYQKRd2h0Q1wAkfkOGHIYw.jpg"
              alt=""
            />
            <div className="absolute bottom-0 text-white md:p-10 p-4 font-tertiaryFont  ">
              <h3 className="md:mb-2 md:text-3xl text-2xl font-semibold">Infinity Gem</h3>
              <p className=" text-white cursor-pointer">UI/UX</p>
            </div>
          </Link>
        </div>

        <div className="relative overflow-hidden">
          <Link to={"./Wander"}>
          
            <img
              className="w-[500px] h-64 md:h-[600px] object-cover rounded-2xl hover:scale-110 transition duration-500 cursor-pointer"
              src="https://framerusercontent.com/images/WisIsy97GUDG2UDk2aEq1F6MUaY.jpg?scale-down-to=2048"
              alt=""
            />
            <div className="absolute bottom-0 text-white md:p-10 p-4 font-tertiaryFont ">
              <h3 className="md:mb-2 md:text-3xl text-2xl font-semibold">Wander</h3>
              <p className=" text-white cursor-pointer">UI/UX,Branding</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Works;
