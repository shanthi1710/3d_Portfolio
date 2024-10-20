import { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

export default function Github() {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1032 || window.innerHeight < 621) {
        setIsDisabled(true);
      } else {
        setIsDisabled(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      variants={fadeIn("", "", 0.1, 1)}
      className="flex justify-center items-center"
    >
      {!isDisabled ? (
        <div className={`mt-12 rounded-[20px] p-5`}>
          <h1
            className={`text-white font-bold text-[24px] project-heading`}
            style={{ paddingBottom: "20px" }}
          >
            Github I<strong className="font-bold"> contribution</strong>
          </h1>

          <GitHubCalendar
            username="shanthi1710"
            blockSize={14}
            blockMargin={5}
            fontSize={16}
          />
        </div>
      ) : (
        ""
      )}
    </motion.div>
  );
}
