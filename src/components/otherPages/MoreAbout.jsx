import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import bluehouselogo from "../../assets/images/bluehouselogo.png";

const About = () => {
  return (
    <section id="moreAbout">
      <div className="mx-32 mt-6">
        <div className="w-full flex flex-col justify-center items-center space-y-2">
          <NavLink to={"/"}>
            <img
              className="rounded-full size-36"
              src="https://framerusercontent.com/images/KwncUFvOHcwyCrBvsIzWSbIoxSc.png"
              alt=""
            />
          </NavLink>
        </div>
        <div>
          <p className="text-5xl font-tertiaryFont font-semibold">About me</p>
        </div>
        <hr className="mt-10" />

        <div className="flex justify-between mt-8">
          <div className="w-[50%]">
            <img
              className="rounded-full "
              src="https://framerusercontent.com/images/IuUojHQ2ubRvYhbw2cmlrQLats.png"
              alt=""
            />
          </div>
          <div className="w-[50%]">
            <p className="text-xl mt-6 font-secondaryFont leading-7 space-y-2 ">
              Hello! I'm Festus Andrew, a passionate product designer with
              Bluehouse Technologies. With over four years of experience in the
              field, I've had the privilege to delve into various facets of
              product design, honing my skills and expanding my knowledge along
              the way. <br /> <br /> At Bluehouse, I serve not only as a product
              designer but also as a mentor and the current lead of our dynamic
              design team. Collaborating with talented individuals and guiding
              them toward achieving their full potential has been one of the
              most rewarding aspects of my career.
            </p>
            <div className="flex items-center">
              {/* <button className=" border  rounded-full px-6 py-3 mt-6 font-tertiaryFont bg-gray-200 hover:bg-gray-300">
              More about me
            </button> */}

              <div className="flex gap-8 mt-8 p">
                <a href="https://x.com/1st_2s?t=crHq9Iq7XNVWcYbxIp1b3w&s=09">
                  <span>
                    <svg
                      className="w-10 h-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#000000"
                      viewBox="0 0 256 256"
                    >
                      <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
                    </svg>
                  </span>
                </a>

                <a href="https://www.linkedin.com/in/festusandrew?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <span>
                    <svg
                      className="w-10 h-10 "
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#000000"
                      viewBox="0 0 256 256"
                    >
                      <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                    </svg>
                  </span>
                </a>

                <a href="https://www.instagram.com/1st_2s?igsh=Y29kZG53b2ptbDlu">
                  <span>
                    <svg
                      className="w-10 h-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#000000"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div></div>
        <div className="mt-16">
          <p className="text-5xl font-tertiaryFont font-semibold">
            My Experience
          </p>
        </div>
        <hr className="mt-10 " />

        <div className="  flex mt-6">
          <div className="">
            <img src={bluehouselogo} alt="" className="w-32 h-32" />
          </div>

          <div className="mt-6">
            <p className="text-4xl font-semibold">Bluehouse</p>

            <p className="text-2xl mt-2">Design Lead</p>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-xl font-secondaryFont mt-8 leading-8 space-y-2">
            My role involves undertaking extensive research and user testing,
            engaging in ideation, and developing wireframes. I'm dedicated to
            crafting refined, high-fidelity user experiences and interfaces for
            iOS, Android, and Web platforms. I collaborate intimately with
            developers, product managers, and stakeholders, ensuring a cohesive
            and integrated approach. My focus is on designing experiences that
            are not only data-driven but also deeply human-centric.
          </p>
        </div>
        <hr className="mt-8" />

        <div className="mt-10">
          <div className="ml-8">
            <p className="text-4xl font-semibold">Zeustek Solutions</p>
            <p className="text-2xl mt-4"> Freelance Product Designer</p>
          </div>
          <div>
            <p className="text-xl font-secondaryFont mt-8 leading-8 space-y-2">
              I specialize in designing clear, efficient UI/UX-driven interfaces
              for web and mobile platforms, committed to delivering superior
              quality outcomes. My responsibilities extend to overseeing design
              projects are a success. A key aspect of my role is to ensure that
              our designs are in harmony with our clients' business objectives,
              achieved through close collaboration with our developers and
              engineers.
            </p>
          </div>
        </div>
        <hr className="mt-8" />

        <div className="mt-10">
          <div className="ml-8">
            <p className="text-4xl font-semibold">Genesys Hub</p>
            <p className="text-2xl mt-4">Upskill Product Designer</p>
          </div>
          <div>
            <p className="text-xl font-secondaryFont mt-8 leading-8 space-y-2">
              I am involved in crafting the visual design and developing
              prototypes for mobile and web applications. My work entails a
              collaborative effort with the design team, stakeholders, product
              owners, and developers, all within an agile framework.
            </p>
          </div>
        </div>

        <div className="mt-20 space-y-12">
          <div className="">
            <p className="font-tertiaryFont text-5xl font-semibold">Services</p>
          </div>
          <hr className="" />

          <div className="flex space-x-2">
            <div className="text-8xl flex items-center font-secondaryFont">
              1
            </div>
            <div className="">
              <p className="text-3xl font-secondaryFont font-semibold">
                Branding
              </p>
              <p className="font-secondaryFont text-lg mt-4">
                Revealing your brand's core with a meticulous mix of visuals and
                strategy. Crafting enduring identities that resonate.
              </p>
            </div>
          </div>
          <hr />

          <div className="flex space-x-6">
            <div className="text-8xl flex items-center ">2</div>
            <div className="">
              <p className="text-3xl font-tertiaryFont font-semibold">Design</p>
              <p className="font-secondaryFont text-lg mt-4">
                Crafting engaging experiences from the initial click. Creating
                intuitive interfaces for seamless user interactions.
              </p>
            </div>
          </div>
          <hr />
          <div className="flex space-x-6">
            <div className="text-8xl flex items-center">3</div>
            <div className="">
              <p className="text-3xl font-tertiaryFont font-semibold">
                Development
              </p>
              <p className="font-secondaryFont text-lg mt-4">
                Transforming visions into dynamic digital realities. From
                responsive websites to interactive apps, propelling innovation.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 mb-6 h-fit ">
          <div href="contact">
            <p className="text-5xl font-tertiaryFont font-semibold">Contact</p>
          </div>
          <hr className="mt-10" />

          <div className="">
            <div className="mt-12 flex">
              <p className="w-1/2 text-8xl space-y-8">
                Let's <br /> work <br /> together
              </p>

              <p className="w-1/2 font-secondaryFont text-xl leading-10">
                I'm very happy to tackle new challenges and dive into the most
                innovative projects. If you are looking for a dedicated and
                enthusiastic designer to enhance your vision, this is where it
                will end. We'll work together to develop unique experiences that
                will be remembered forever. Contact me, and let's go on an
                exciting journey together to meet your objectives!
                <div className=" mt-10 text-3xl font-tertiaryFont font-semibold relative group">
                  <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 group-hover:w-full group-hover:transition-all group-hover:duration-300"></span>
                  festusandrew23@gmail.com
                </div>
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <hr className="mt-12" />
          <footer className="mt-16 flex">
            <p className="w-[60%] text-xl font-tertiaryFont">
              © 2023 Templify by Patryk Moskot
            </p>

            <div className=" w-[40%] flex justify-end ">
              <a href="MyWork2">
                <p className="font-primaryFont text-3xl  relative group">
                  Work
                  <span class="absolute bottom-0 left-0 w-0 h-0.5  bg-gray-800 group-hover:w-full group-hover:transition-all group-hover:duration-300"></span>
                </p>
                </a>

              
                <a href="MoreAbout">
            <p className="text-3xl ml-8 font-primaryFont relative group">
              About
              <span class="absolute bottom-0 left-0 w-0 h-0.5  bg-gray-800 group-hover:w-full group-hover:transition-all group-hover:duration-300"></span>
            </p>
          </a>
                
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default About;
