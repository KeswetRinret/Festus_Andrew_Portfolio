import React from "react";
import { Link } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { FaDribbble } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const About = () => {
  return (
    <div className="mx-32 mt-20">
      <div>
        <p className="text-5xl font-tertiaryFont font-semibold">About</p>
      </div>
      <hr className="mt-10"  />

      <div className="flex justify-between mt-8">
        <div className="w-[60%]">
          <p className="text-xl mt-8 leading-8 ">
            Hello! I'm Festus Andrew, a passionate product designer with
            Bluehouse Technologies. With over four years of experience in the
            field, I've had the privilege to delve into various facets of
            product design, honing my skills and expanding my knowledge along
            the way. <br /> <br /> At Bluehouse, I serve not only as a product
            designer but also as a mentor and the current lead of our dynamic
            design team. Collaborating with talented individuals and guiding
            them toward achieving their full potential has been one of the most
            rewarding aspects of my career.
          </p>
          <div className="flex">
            <button className=" border border-gray-950 rounded-full px-6 mt-6 font-tertiaryFont bg-gray-200 hover:bg-gray-300">
              More about me
            </button>

            <div className="grid grid-cols-1 gap-2">
              <Link>
                <BsTwitterX className="w-6 h-6" />
                <FaDribbble className="w-6 h-6" />
                <IoLogoInstagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[40%]">
          <img
            className="rounded-full"
            src="https://framerusercontent.com/images/IuUojHQ2ubRvYhbw2cmlrQLats.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
