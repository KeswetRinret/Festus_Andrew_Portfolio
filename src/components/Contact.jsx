import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="mx-32 mt-20 mb-6 h-fit ">
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
    </section>
  );
};

export default Contact;
