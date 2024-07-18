import React from "react";
import Laptop from "../../assets/images/Laptop.jpg";
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
              className=" w-[500px] h-[550px] rounded-2xl "
              src={Laptop}
              alt="Marb Store"
            />
            <div className="absolute bottom-0 text-white p-10 font-tertiaryFont  ">
              <h3 className="mb-2 text-3xl font-semibold">Marb Store</h3>
              <p className=" text-white cursor-pointer">UI/UX,Branding</p>
            </div>
          </Link>
        </div>

        <div className="relative overflow-hidden ">
          <Link to={"/"}>
            <img
              className="w-[500px] h-[550px] rounded-2xl"
              src={Laptop}
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
          <Link to={"/"}>
            <img
              className=" w-[500px] h-[550px] rounded-2xl"
              src={Laptop}
              alt=""
            />
            <div className="absolute bottom-0 text-white p-10 font-tertiaryFont  ">
              <h3 className="mb-2 text-3xl font-semibold">Infinity Gem</h3>
              <p className=" text-white cursor-pointer">UI/UX</p>
            </div>
          </Link>
        </div>

        <div className="relative overflow-hidden">
          <Link to={"/"}>
            <img
              className="w-[500px] h-[550px] rounded-2xl"
              src={Laptop}
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
