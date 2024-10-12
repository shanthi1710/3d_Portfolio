import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div className=" py-6 px-12">
      <h3 className="text-center text-2xl text-white font-bold">
        Shanthinath Shedbale
      </h3>
      <ul className="my-4 flex items-center justify-center gap-6 text-[1.6rem] text-white">
        <li className="cursor-pointer transition-transform duration-150 hover:translate-y-[-5px] hover:text-accent-400">
          <Link
            to="https://www.linkedin.com/in/shanthi1710/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </Link>
        </li>
        <li className="cursor-pointer transition-transform duration-150 hover:translate-y-[-5px] hover:text-accent-400">
          <Link
            to="https://github.com/shanthi1710"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithub />
          </Link>
        </li>
        <li className="cursor-pointer transition-transform duration-150 hover:translate-y-[-5px] hover:text-accent-400">
          <Link
            to="https://leetcode.com/Shanthinath/"
            aria-label="Leetcode"
            target="_blank"
            rel="noreferrer noopener"
          >
            <TbBrandLeetcode />
          </Link>
        </li>
        <li className="cursor-pointer transition-transform duration-150 hover:translate-y-[-5px] hover:text-accent-400">
          <Link
            to="https://www.geeksforgeeks.org/user/shanthinathshedabale17/"
            aria-label="GeeksForGeeks"
            target="_blank"
            rel="noreferrer noopener"
          >
            <SiGeeksforgeeks />
          </Link>
        </li>
      </ul>
      <p className="text-center text-sm text-secondary">
        Learning Bit By Bit...
      </p>
    </motion.div>
  );
}
