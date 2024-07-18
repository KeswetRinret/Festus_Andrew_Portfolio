import React from "react";
import { Link } from "react-router-dom";
import Laptop from "../../assets/images/Laptop.jpg";
import Contact from "../Contact";
import Footer from "../Footer";

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
          // className=" w-[1000px] h-[550px] rounded-2xl "
          // src={Laptop}
          src="https://framerusercontent.com/images/ZuDzZNFD4y4ZbZ3Cf9QFDB0vGs.jpg?scale-down-to=2048"
          alt="Marb Store"
        />
      </div>

      <div className="mt-16">
        <div className="">
          <p className="font-semibold text-4xl font-tetiaryFont">E-Commerce</p>
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

      <div className="mt-16">
        <p className="mt-8 text-5xl font-tertiaryFont font-semibold ">
          Process
        </p>

        <hr className="mt-6" />

        <p className="text-xl mt-8 leading-8 ">
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
      <div className="flex items-center justify-center mt-12">
        <img
          className=" w-[1000px] h-[550px] rounded-2xl "
          src={Laptop}
          alt="Marb Store"
        />
      </div>

      <div className="flex items-center justify-center mt-8">
        <img
          className=" w-[1000px] h-[550px] rounded-2xl "
          src={Laptop}
          alt="Marb Store"
        />
      </div>

      <div className="mt-16">
        <p className="mt-8 text-5xl font-tertiaryFont font-semibold ">Goal</p>
        <hr className="mt-8" />
        <p className="text-xl mt-8 leading-8 ">
          The design process for Marb-store is a strategic and goal-oriented
          approach that begins with a thorough analysis of objectives and target
          outcomes. In the ideation phase, innovation is key as we envision and
          iteratively refine solutions tailored to the unique needs of bag
          enthusiasts. These concepts are brought to life in the design and
          development stage, where we emphasize both visual appeal and
          functional effectiveness to create an immersive online shopping
          experience. Rigorous testing ensures alignment with our initial goals
          and optimal user engagement. Following a carefully planned launch,
          ongoing assessment and adaptation ensure that the design of Marb-store
          continues to meet and exceed its intended objectives, delivering
          premium bags and unmatched customer satisfaction.
        </p>

        <div className="flex items-center justify-center mt-12">
          <img
            className=" w-[1000px] h-[550px] rounded-2xl "
            src={Laptop}
            alt="Marb Store"
          />
        </div>

        <div className="flex items-center justify-center mt-12">
          <img
            className=" w-[1000px] h-[550px] rounded-2xl "
            src={Laptop}
            alt="Marb Store"
          />
        </div>

        <div className=" mt-16">
          <p className="mt-8 text-5xl font-tertiaryFont font-semibold ">
            Result
          </p>
          <hr className="mt-8" />
          <p className="text-xl mt-8 leading-8 ">
            The design process for Marb-store's results-driven approach begins
            with a clear definition of desired outcomes and benchmarks. In the
            brainstorming phase, we explore and refine potential pathways to
            achieve these results. During the design and development stage, we
            prioritize crafting solutions that directly align with these
            benchmarks, ensuring every element contributes to the overall
            success of the store. Thorough testing validates the efficacy and
            impact of our design choices, guaranteeing a seamless user
            experience. After a strategic launch optimized for maximum impact,
            we leverage post-launch analytics and feedback to measure success
            and guide further refinements, ensuring Marb-store consistently
            delivers outstanding results for bag enthusiasts.
          </p>
        </div>
      </div>

      <div className="mt-16">{Contact}</div>
        <div>
          <p className="text-5xl font-tertiaryFont font-semibold">Contact</p>
        </div>
        <hr className="mt-10" />

        <div className="">
          <div className="mt-12 flex">
            <p className="w-1/2 text-8xl space-y-8">
              Let's <br /> work <br /> together
            </p>

            <p className="w-1/2 text-xl leading-8">
              I'm very happy to tackle new challenges and dive into the most
              innovative projects. If you are looking for a dedicated and
              enthusiastic designer to enhance your vision, this is where it
              will end. We'll work together to develop unique experiences that
              will be remembered forever. Contact me, and let's go on an
              exciting journey together to meet your objectives!
              <div className=" mt-10 text-3xl font-tertiaryFont font-semibold relative group">
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full group-hover:transition-all group-hover:duration-200"></span>
                hello@mail.com
              </div>
            </p>
          </div>
        </div>
      <div>{Footer}</div>
     
    </div>
  );
};

export default Marb;
