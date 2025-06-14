import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full bg-[#2e3555] text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="text-4xl font-thin text-white/40">Mediga Koushik</div>
          <nav className="flex gap-4 text-sm">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contact Me</a>
          </nav>
        </div>

        <div id="links" className="flex gap-4 text-xl">
          <a href="https://www.linkedin.com/in/koushik-mediga-532983247/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-400" />
          </a>
          <a href="https://github.com/Koushik-Mediga" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-400" />
          </a>
          <a href="https://leetcode.com/u/koushikmediga/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="hover:text-yellow-400"/>
          </a>
          <a href="https://www.geeksforgeeks.org/user/koushikkgsl/" target="_blank" rel="noopener noreferrer">
            <SiGeeksforgeeks className="hover:text-green-500"/>
          </a>
          <a href="mailto:koushikmediga@gmail.com">
            <FaEnvelope className="hover:text-red-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
