import React from "react";
import { Link } from "react-router-dom";
import Laptop from "../../assets/images/Laptop.jpg";

const Marb = () => {
  return (
    <div className=" mx-32 my-4">
      <div className="w-full flex flex-col justify-center items-center space-y-4">
        <Link to={"/"}>
          <img
            className="rounded-full size-36"
            src="https://framerusercontent.com/images/KwncUFvOHcwyCrBvsIzWSbIoxSc.png"
            alt=""
          />
        </Link>
      </div>

      <div className="flex items-center justify-center mt-8">
        <img
          className=" w-[1000px] h-[550px] rounded-2xl "
          src={Laptop}
          alt="Marb Store"
        />
      </div>

      <div className="mt-16">
        <div className="">
          <p className="font-semibold text-4xl font-secondaryFont">
            E-Commerce
          </p>
        </div>
        <hr className="mt-6" />

        <div className="flex gap-20 mt-8">
          <div className="w-[60%]">
            <p className="text-2xl font-semibold font-secondaryFont">Intro</p>
            <p className="text-xl mt-6 leading-8">
              The "Marb-store" design project epitomizes the fusion of modern
              aesthetics and functionality where craftsmanship meets elegance in
              the realm of bag making. In this case study, we delve into the
              journey of Marb-store, an ecommerce platform dedicated to offering
              exquisite bags that seamlessly blend style and functionality. From
              its inception to its current standing as a thriving online
              destination for bag enthusiasts, Marb-store has continuously
              strived to redefine the standards of quality and design in the
              fashion industry. Join us as we explore the key strategies, design
              innovations, and user experiences that have propelled Marb-store
              to success in the competitive ecommerce landscape.
            </p>
          </div>
          <div className="w-[40%] space-y-20 ">
            <div>
              <p className="text-2xl font-semibold font-secondaryFont ">Year</p>
              <p className="mt-6 font-medium">2024</p>
              <hr className="mt-2" />
            </div>

            <div>
              <p className="text-2xl font-semibold font-secondaryFont ">
                Services
              </p>
              <p className="mt-2">UI/UX, Branding</p>
              <hr className="mt-2" />
            </div>

            <div>
              <p className="text-2xl font-semibold font-secondaryFont ">
                Client
              </p>
              <p className="mt-2">Marb-Store</p>
              <hr className="mt-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <p className="mt-8">Process</p>
        <hr className="mt-6" />
        <p className="mt-8">
          The "Marb-store" design process is a streamlined yet dynamic approach,
          beginning with in-depth research to understand client needs and user
          behaviors. Creativity blooms in the conceptualization phase, where
          ideas are sketched and refined. These concepts materialize in the
          design and development stage, with a keen focus on aesthetic cohesion
          and user-centric functionality. After meticulous testing and
          refinement to ensure flawless user interaction, the project culminates
          in a strategic launch. Post-launch, continuous evaluation feeds back
          into the cycle, ensuring the brand's enduring resonance and relevance.
        </p>
      </div>
    </div>
  );
};

export default Marb;
