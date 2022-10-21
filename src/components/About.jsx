import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        My Name Is Anu Oyebanjo, Fullstack Developer and Information Technology Expert, Certified Project Manager ,
         Agile And Scrum Method In Software Development Life Cycle. </p>
        <br /><br />

        <p className="text-xl">
        Knowledge In Programming Concepts Of Web Technology With Over 6 Years Work Experience In Project Management.
        </p>
      </div>
    </div>
  );
};

export default About;
