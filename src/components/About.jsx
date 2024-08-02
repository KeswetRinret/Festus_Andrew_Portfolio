import React from "react";


const About = () => {
  return (
    <div className="md:mx-32 mx-4 md:mt-20 mt-10 h-fit">
      <div>
        <p className="md:text-5xl text-3xl font-tertiaryFont font-semibold">About</p>
      </div>
      <hr className="md:mt-10 mt-6" />

      <div className="flex md:flex-row-reverse flex-col justify-between mt-8">
      <div className="md:w-[40%] w-auto">
          <img
            className="rounded-full md:size-auto size-60 ml-14"
            src="https://framerusercontent.com/images/IuUojHQ2ubRvYhbw2cmlrQLats.png"
            alt=""
          />
        </div>
        <div className="md:w-[60%] w-auto">
          <p className="md:text-xl text-lg md:mt-8 mt-6 font-secondaryFont md:leading-8 leading-7 ">
            Hello! I'm Festus Andrew, a passionate product designer with
            Bluehouse Technologies. With over four years of experience in the
            field, I've had the privilege to delve into various facets of
            product design, honing my skills and expanding my knowledge along
            the way. <br /> <br className="md:block hidden" /> At Bluehouse, I serve not only as a product
            designer but also as a mentor and the current lead of our dynamic
            design team. Collaborating with talented individuals and guiding
            them toward achieving their full potential has been one of the most
            rewarding aspects of my career.
          </p>

          <div className="flex md:flex-row flex-col items-center">
            <a href="moreAbout">
              <button className=" border rounded-full md:px-8 px-28 p-2 md:mt-6 mt-5 font-tertiaryFont bg-gray-200 hover:bg-gray-300">
                More about me
              </button>
            </a>

            <div className="flex md:gap-8 gap-10 md:mt-4 mt-8 md:pl-14 ">
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
    </div>
  );
};

export default About;
