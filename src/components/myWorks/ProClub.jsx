import React from "react";
import { Link } from "react-router-dom";
import Laptop from "../../assets/images/Laptop.jpg";
import Contact from "../Contact";
import Footer from "../Footer";

const ProClub = () => {
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
          className="object-cover h-[600px] w-dvw rounded-xl "
          src="https://framerusercontent.com/images/kYjjTQZX4yro1jpWWY7stCFLY.jpg"
          alt="ProDevelopers Club"
        />
      </div>

      <div className="mt-16">
        <div className="">
          <p className="font-semibold text-4xl font-tetiaryFont">EdTech Solution</p>
        </div>
        <hr className="mt-6" />

        <div className="flex gap-20 mt-8">
          <div className="w-[60%]">
            <p className="text-2xl font-semibold font-secondaryFont">Intro</p>
            <p className="text-xl mt-6 leading-8">
              The "ProDevelopersClub" design project harmoniously blends modern
              aesthetics and functionality, we believe that coding can be both
              powerful and beautiful. At ProDevelopersClub, our mission is to
              help developers like you master the art of writing elegant,
              efficient, and effective code. Our platform is designed to provide
              a comprehensive learning experience, where you can refine your
              skills, stay up-to-date with industry trends, and connect with a
              community of like-minded professionals. Whether you're a seasoned
              developer or just starting out, we invite you to join us on this
              journey to transform the everyday into an exceptional experience.
              Let's write the code that shapes the future, together!
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
              <p className="mt-2">ProDevelopersClub</p>
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
          The design process for creating ProDevelopersClub, a platform to learn
          coding, begins with thorough research and analysis of the target
          audience and competitors. Goals and objectives are defined to guide
          the project, followed by brainstorming ideas and prototyping key
          features. High-quality educational content is created, and visual
          design elements are developed to ensure an engaging user experience.
          The platform is then developed and tested rigorously before launch,
          with a strategic marketing plan in place. Community building and
          engagement are prioritized post-launch, and continuous improvement is
          emphasized through regular updates and feedback gathering. This
          iterative process ensures that ProDevelopersClub remains a valuable
          resource for developers to enhance their coding skills effectively.
        </p>
      </div>
      <div className="flex items-center justify-center mt-16">
        <img
          className="object-cover h-[600px] w-dvw rounded-xl "
          src="https://framerusercontent.com/images/cofLlvrdf71d7i5raChitGnKzB0.jpg?scale-down-to=2048"
          alt="Marb Store"
        />
      </div>

      <div className="flex items-center justify-center mt-16">
        <img
          className=" object-cover h-[600px] w-dvw rounded-xl "
          src="https://framerusercontent.com/images/HWOyPZyYgpYyXrgSHgCYnWlPkDE.jpg?scale-down-to=2048"
          alt="Marb Store"
        />
      </div>

      <div className="mt-16">
        <p className="mt-8 text-5xl font-tertiaryFont font-semibold ">Goal</p>
        <hr className="mt-8" />
        <p className="text-xl mt-8 leading-8 ">
          The goal of designing ProDevelopersClub is to create a comprehensive
          and engaging platform that empowers developers to learn and master
          coding effectively. This platform should offer high-quality
          educational content, foster a supportive learning community, and
          provide innovative features and resources tailored to the needs of
          developers at different skill levels. The ultimate aim is to create an
          environment where developers can enhance their coding skills, advance
          their careers, and stay updated with the latest industry trends and
          technologies
        </p>

        <div className="flex items-center justify-center mt-16">
          <img
            className=" object-cover h-[600px] w-dvw rounded-xl "
            src="https://framerusercontent.com/images/fTg6HPQuBTwO09wrMQ9ODz9vxR8.jpg?scale-down-to=2048"
            alt="Marb Store"
          />
        </div>

        <div className="flex items-center justify-center mt-16">
          <img
            className=" object-cover h-[700px] w-dvw rounded-xl "
            src="https://framerusercontent.com/images/h27v9biikjvGJGeyQEeG4fhDgc.jpg?scale-down-to=2048"
            alt="Marb Store"
          />
        </div>

        <div className=" mt-16">
          <p className="mt-8 text-5xl font-tertiaryFont font-semibold ">
            Result
          </p>
          <hr className="mt-8" />
          <p className="text-xl mt-8 leading-8 ">
            The result of designing ProDevelopersClub is a dynamic and
            user-centric platform that revolutionizes the way developers learn
            and master coding. With a comprehensive library of high-quality
            educational content, interactive learning resources, and real-world
            projects, developers gain the knowledge and skills they need to
            excel in their careers. The platform fosters a vibrant community
            where members can collaborate, share insights, and support each
            other's learning journey. As a result, developers achieve greater
            proficiency in coding, unlock new opportunities, and stay ahead of
            the curve in an ever-evolving industry. Ultimately,
            ProDevelopersClub becomes the go-to destination for developers
            seeking to elevate their coding skills and achieve their
            professional goals.
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
            enthusiastic designer to enhance your vision, this is where it will
            end. We'll work together to develop unique experiences that will be
            remembered forever. Contact me, and let's go on an exciting journey
            together to meet your objectives!
            <div className=" mt-10 text-3xl font-tertiaryFont font-semibold relative group">
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full group-hover:transition-all group-hover:duration-200"></span>
              hello@mail.com
            </div>
          </p>
        </div>
      </div>

      <div className='mb-10'>
       <hr className="mt-12" />
      <footer className="mt-16 flex">
        <p className="w-[60%] text-xl font-tertiaryFont">
          © 2023 Templify by Patryk Moskot
        </p>

        <div className=" w-[40%] flex justify-end ">
            <Link to={"./Works"}>
          <p className="font-primaryFont text-3xl  relative group">
            Work
            <span class="absolute bottom-0 left-0 w-0 h-0.5  bg-gray-800 group-hover:w-full group-hover:transition-all group-hover:duration-300"></span>
          </p>
          </Link>

          <Link to={"./About"}>
          <p className="text-3xl ml-8 font-primaryFont relative group">
            
            About
            <span class="absolute bottom-0 left-0 w-0 h-0.5  bg-gray-800 group-hover:w-full group-hover:transition-all group-hover:duration-300"></span>
          </p>
          </Link>
        </div>

      </footer>
    </div>
    </div>
  );
};

export default ProClub;
