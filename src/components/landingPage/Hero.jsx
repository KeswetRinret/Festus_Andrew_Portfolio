import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { FaDribbble } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="container mx-auto my-6">
      <div className="w-full flex flex-col justify-center items-center space-y-4">
        <NavLink to={"/"}>
          <img
            className="rounded-full size-36"
            src="https://framerusercontent.com/images/KwncUFvOHcwyCrBvsIzWSbIoxSc.png"
            alt=""
          />
        </NavLink>
        <button className="flex justify-center items-center font-primaryFont font-semibold text-primaryColor rounded-full border-2 p-2 px-6">
          <span class="relative flex h-3 w-3 mr-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Avalaible for work
        </button>
      </div>

      <div className="flex justify-center w-full ">
        <div className="space-y-16 mt-8 pl-44 w-[25%]">
          <BsTwitterX className="w-10 h-10" />
          <FaDribbble className="w-10 h-10" />
          <IoLogoInstagram className="w-10 h-10" />
        </div>

        <div className="w-[75%] mt-10 ml-12">
          <p className="font-tertiaryFont text-7xl font-semibold leading-tight">
            👋🏼Hey there, it's <br /> Festus Andrew.
          </p>

          <p className="mt-6 font-tertiaryFont text-xl ml-24">
            I am a Designer based in Jos, Nigeria
          </p>

          <div className=" space-x-4 mt-12 pl-12">
            <button className="border rounded-full px-10 p-4 font-bold text-lg bg-primaryColor text-white hover:bg-hoverColor">
              Let's Work Together
            </button>
            <button className="border rounded-full px-10 p-4 font-bold text-lg bg-slate-100 hover:bg-slate-200">
              My Experience
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
