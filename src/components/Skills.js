import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaBootstrap,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiExpress,
  SiTensorflow,
  SiScikitlearn,
  SiMongodb,
  SiVercel,
  SiFirebase,
  SiFlutter,
  SiHuggingface,
} from "react-icons/si";
import { SiMysql } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="mt-10 mb-10 w-full px-6 py-12 md:px-16 bg-white flex flex-col md:flex-row justify-center items-center gap-10">
      {/* Left Section: Text */}
      <div className="md:w-4/12">
        <h2 className="text-5xl font-bold text-richorange">
          <span className="block overflow-visible">Me and</span>
          <span className="block text-4xl"> MyTech Stack</span>
        </h2>

        <p className="mt-6 text-gray-700 leading-relaxed">
          Hi Everyone! My name is <strong>Mediga Koushik</strong>. I am a Full Stack Web Developer pursuing B-TECH in National Institute of Technology, Andhra pradesh. Currently working on the MERN stack and ML/DL. Beautiful UI-UX is my key strength.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
            Proficient in building responsive web applications using modern frameworks and technologies such as React.js, Node.js, and Flask. Skilled in leveraging machine learning frameworks including TensorFlow and scikit-learn to develop predictive solutions. Excels in delivering innovative solutions that bridge the gap between web development and artificial intelligence.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
            I am a committed and enthusiastic professional eager to contribute my full potential to impactful projects. With a strong work ethic and a passion for learning, I am dedicated to delivering high-quality results and driving success in every role I undertake. I approach challenges with a proactive mindset and a collaborative spirit.
        </p>
      </div>

      {/* Right Section: Tech Icons */}
      <div className="md:w-4/12 grid grid-cols-4 gap-6 justify-items-center text-7xl text-[#333]">
        <FaHtml5 className="text-orange-600" />
        <FaCss3Alt className="text-blue-600" />
        <FaJsSquare className="text-yellow-500" />
        <FaReact className="text-cyan-400" />

        <FaNodeJs className="text-green-600" />
        <SiMysql className="text-black"/>
        <SiRedux className="text-purple-500" />
        <SiTailwindcss className="text-cyan-500" />

        <FaBootstrap className="text-indigo-600" />
        <SiExpress className="text-gray-600" />
        <FaGitAlt className="text-red-500" />
        <FaGithub className="text-black" />

        <FaPython className="text-blue-400" />
        <SiTensorflow className="text-orange-500" />
        <SiScikitlearn className="text-yellow-600" />
        <SiMongodb className="text-green-700" />

        <SiVercel className="text-black" />
        <SiFirebase className="text-yellow-500" />
        <SiFlutter className="text-blue-600" />
        <SiHuggingface className="text-yellow-400" />

      </div>
    </section>
  );
};

export default Skills;
