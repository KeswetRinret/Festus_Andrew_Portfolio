import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="md:mx-32 mx-4 md:mt-20 mt-14 mb-6 h-fit ">
        <div href="contact">
          <p className="md:text-5xl text-3xl font-tertiaryFont font-semibold">Contact</p>
        </div>
        <hr className="md:mt-10 mt-6" />

        <div className="">
          <div className="md:mt-12 mt-7 flex md:flex-row flex-col">
            <p className="w-1/2 md:text-8xl text-5xl md:space-y-8">
              Let's <br /> work <br /> together
            </p>

            <p className="md:w-1/2 w-full font-secondaryFont md:text-xl text-lg md:leading-8 leading-7 mt-4">
              I'm very happy to tackle new challenges and dive into the most
              innovative projects. If you are looking for a dedicated and
              enthusiastic designer to enhance your vision, this is where it
              will end. We'll work together to develop unique experiences that
              will be remembered forever. Contact me, and let's go on an
              exciting journey together to meet your objectives!
              <div className="md:mt-10 mt-4 md:text-3xl text-2xl font-tertiaryFont font-semibold relative group">
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 group-hover:w-full group-hover:transition-all group-hover:duration-300"></span>
                festusandrew23@gmail.com
              </div>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
