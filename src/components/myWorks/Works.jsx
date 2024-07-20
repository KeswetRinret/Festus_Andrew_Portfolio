import React from "react";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <div className="container mx-auto my-6 max-w-full mt-12">
      <div className="flex justify-between mx-32 ">
        <p className="font-primaryFont text-4xl font-semibold">My Works</p>
          <Link to={"./Works"}>
        <p class="font-primaryFont text-xl font-semibold relative group">
          All Works
          <span class="absolute bottom-0 left-0 w-0 h-0.5  bg-black group-hover:w-full group-hover:transition-all group-hover:duration-300"></span>
        </p>
        </Link>
      </div>
      <hr className="mx-32 mt-6 border " />

      <div className=" flex  justify-center items-center space-x-10 mt-14">
        <div className="relative overflow-hidden ">
          <Link to={"./Marb"}>
            <img
              className=" w-[550px] h-[600px] object-cover rounded-2xl hover:scale-110 transition duration-500 cursor-pointer "
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
              className="w-[550px] h-[600px] object-cover rounded-2xl"
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
              className="object-cover w-[550px] h-[600px] rounded-2xl"
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
              className="w-[550px] h-[600px] object-cover rounded-2xl"
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
    </div>
  );
};

export default Works;
