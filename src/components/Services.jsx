import React from "react";

const Services = () => {
  return (
    <div className="md:mx-32 mx-4 md:mt-20 mt-14 md:space-y-14 space-y-6">
      <div className="">
        <p className="font-tertiaryFont md:text-5xl text-3xl font-semibold">
          Services
        </p>
      </div>
      <hr className="md:mt-0 mt-6 mx-4" />

      <div className="flex md:space-x-4 space-x-2">
        <div className="md:text-8xl text-5xl flex items-center font-secondaryFont">1</div>
        <div className="">
          <p className="md:text-3xl text-2xl font-tertiaryFont font-semibold">Branding</p>
          <p className="font-secondaryFont text-lg mt-2 md:mt-4 pl-1">
            Revealing your brand's core with a meticulous mix of visuals and
            strategy. Crafting enduring identities that resonate.
          </p>
        </div>
      </div>
      <hr className="md:mx-0 mx-3"  />

      <div className="flex md:space-x-4 space-x-2">
        <div className="md:text-8xl text-5xl flex items-center ">2</div>
        <div className="">
          <p className="md:text-3xl text-2xl font-tertiaryFont font-semibold">Design</p>
          <p className="font-secondaryFont text-lg mt-2 md:mt-4 pl-1">
            Crafting engaging experiences from the initial click. Creating
            intuitive interfaces for seamless user interactions.
          </p>
        </div>
      </div>
      <hr className="md:mx-0 mx-3" />
      <div className="flex md:space-x-4 space-x-2">
        <div className="md:text-8xl text-5xl flex items-center">3</div>
        <div className="">
          <p className="md:text-3xl text-2xl font-tertiaryFont font-semibold">
            Development
          </p>
          <p className="font-secondaryFont text-lg mt-2 md:mt-4 pl-1">
            Transforming visions into dynamic digital realities. From responsive
            websites to interactive apps, propelling innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
