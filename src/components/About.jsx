import React from "react";

const About = () => {
  return (
    <div className="mx-32 mt-20">
      <div>
        <p className="text-3xl font-tertiaryFont font-semibold">About</p>
      </div>
      <hr />

      <div className="flex justify-between mt-8">
        <div className="w-[56%]">
          <p className="text-xl mt-8 leading-8">
            Hello! I'm Festus Andrew, a passionate product designer with
            Bluehouse Technologies. With over four years of experience in the
            field, I've had the privilege to delve into various facets of
            product design, honing my skills and expanding my knowledge along
            the way. <br /> At Bluehouse, I serve not only as a product designer but
            also as a mentor and the current lead of our dynamic design team.
            Collaborating with talented individuals and guiding them toward
            achieving their full potential has been one of the most rewarding
            aspects of my career.
          </p>
          </div>
          <div className="w-[40%]">
          <img className="rounded-full"
           src="https://framerusercontent.com/images/IuUojHQ2ubRvYhbw2cmlrQLats.png" alt="" 

           />
           
        </div>
        
      </div>
    </div>
  );
};

export default About;
