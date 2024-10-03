import React from "react";
import { Link } from "react-router-dom";
import Footer from "../pages/Footer";
import Contact from "../pages/Contact";

const Marb = () => {
  return (
    <div>
      <div className="md:mx-32 mx-4 md:my-4 my-2">
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
            className="object-cover h-64 md:h-[600px] md:w-dvw w-full rounded-xl "
            // src={Laptop}
            src="https://framerusercontent.com/images/ZuDzZNFD4y4ZbZ3Cf9QFDB0vGs.jpg?scale-down-to=2048"
            alt="Marb Store"
          />
        </div>

        <div className="md:mt-16 mt-12">
          <div className="">
            <p className="font-semibold md:text-4xl text-3xl font-tetiaryFont">
              E-Commerce
            </p>
          </div>
          <hr className="md:mt-6 mt-4" />

          <div className="flex md:gap-20 md:flex-row flex-col md:mt-8 mt-6">
            <div className="md:w-[60%] w-full">
              <p className="md:text-2xl text-xl font-semibold font-secondaryFont">
                Intro
              </p>
              <p className="md:text-xl text-lg mt-6 md:leading-8 leading-7">
                The "Marb-store" design project epitomizes the fusion of modern
                aesthetics and functionality where craftsmanship meets elegance
                in the realm of bag making. In this case study, we delve into
                the journey of Marb-store, an ecommerce platform dedicated to
                offering exquisite bags that seamlessly blend style and
                functionality. From its inception to its current standing as a
                thriving online destination for bag enthusiasts, Marb-store has
                continuously strived to redefine the standards of quality and
                design in the fashion industry. Join us as we explore the key
                strategies, design innovations, and user experiences that have
                propelled Marb-store to success in the competitive ecommerce
                landscape.
              </p>
            </div>
            <div className="md:w-[40%] md:space-y-20 space-y-8 mt-6 ml-1 ">
              <div>
                <p className="md:text-3xl text-2xl font-semibold font-secondaryFont ">
                  Year
                </p>
                <p className="md:mt-6 mt-2 font-medium">2024</p>
                <hr className="mt-2" />
              </div>

              <div>
                <p className="md:text-3xl text-2xl font-semibold font-secondaryFont ">
                  Services
                </p>
                <p className="mt-2">UI/UX, Branding</p>
                <hr className="mt-2" />
              </div>

              <div>
                <p className="md:text-3xl text-2xl font-semibold font-secondaryFont ">
                  Client
                </p>
                <p className="mt-2">Marb-Store</p>
                <hr className="mt-2" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <p className="md:mt-8 md:text-5xl text-3xl font-tertiaryFont font-semibold ">
            Process
          </p>

          <hr className="md:mt-6 mt-4" />

          <p className="md:text-xl text-lg md:mt-8 mt-6 md:leading-8 leading-7">
            The "Marb-store" design process is a streamlined yet dynamic
            approach, beginning with in-depth research to understand client
            needs and user behaviors. Creativity blooms in the conceptualization
            phase, where ideas are sketched and refined. These concepts
            materialize in the design and development stage, with a keen focus
            on aesthetic cohesion and user-centric functionality. After
            meticulous testing and refinement to ensure flawless user
            interaction, the project culminates in a strategic launch.
            Post-launch, continuous evaluation feeds back into the cycle,
            ensuring the brand's enduring resonance and relevance.
          </p>
        </div>
        <div className="flex items-center justify-center md:mt-16 mt-8">
          <img
            className="object-cover h-64 md:h-[600px] w-dvw rounded-xl"
            src="https://framerusercontent.com/images/RcPneXyIYHylJg9O5zIYAFkaYw.jpg?scale-down-to=2048"
            alt="Marb Store"
          />
        </div>

        <div className="flex items-center justify-center md:mt-16 mt-8">
          <img
            className=" object-cover h-64 md:h-[600px] w-dvw rounded-xl "
            src="https://framerusercontent.com/images/bVFqO2djh4Z4ijH0AzoI2Aozo.jpg"
            alt="Marb Store"
          />
        </div>

        <div className="md:mt-16 mt-12">
          <p className="md:mt-8 md:text-5xl text-3xl font-tertiaryFont font-semibold ">
            Goal
          </p>
          <hr className="md:mt-8 mt-4" />
          <p className="md:text-xl text-lg md:mt-8 mt-6 md:leading-8 leading-7">
            The design process for Marb-store is a strategic and goal-oriented
            approach that begins with a thorough analysis of objectives and
            target outcomes. In the ideation phase, innovation is key as we
            envision and iteratively refine solutions tailored to the unique
            needs of bag enthusiasts. These concepts are brought to life in the
            design and development stage, where we emphasize both visual appeal
            and functional effectiveness to create an immersive online shopping
            experience. Rigorous testing ensures alignment with our initial
            goals and optimal user engagement. Following a carefully planned
            launch, ongoing assessment and adaptation ensure that the design of
            Marb-store continues to meet and exceed its intended objectives,
            delivering premium bags and unmatched customer satisfaction.
          </p>

          <div className="flex items-center justify-center md:mt-16 mt-8">
            <img
              className=" object-cover h-64 md:h-[600px] w-dvw rounded-xl "
              src="https://framerusercontent.com/images/hzL4ehQKmdkQmUTF814YViCOJ5g.jpg"
              alt="Marb Store"
            />
          </div>

          <div className="flex items-center justify-center md:mt-16 mt-8">
            <img
              className=" object-cover h-64 md:h-[600px] w-dvw rounded-xl "
              src="https://framerusercontent.com/images/9PNSzHhfGXSW26rY8kUd4OOHaY.jpg"
              alt="Marb Store"
            />
          </div>

          <div className=" md:mt-16 mt-12">
            <p className="md:mt-8 md:text-5xl text-3xl font-tertiaryFont font-semibold ">
              Result
            </p>
            <hr className="md:mt-8 mt-4" />
            <p className="md:text-xl text-lg md:mt-8 mt-6 md:leading-8 leading-7">
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
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default Marb;
