import Heroimage from "../../../assets/pngegg.png";
import BackHeroImag from "../../../assets/hero_image_back.png";
import heart from "../../../assets/heart.png";
import calories from "../../../assets/calories.png";
import "./HeroRightSideBar.css";
import { transition } from "../../Transition/Transition";
import { motion } from "framer-motion";

export default function HeroRightSideBar() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, right: "-32px" }}
        whileInView={{ opacity: 1, right: "64px" }}
        transition={transition}
        className="heart"
      >
        <img src={heart} alt="heart-pulse" />
        <p>Heart Rate</p>
        <span>116 bpm</span>
      </motion.div>
      <img src={Heroimage} alt="sportsman" className="hero__image" />
      <motion.img
        initial={{ right: "120px" }}
        whileInView={{ right: "280px" }}
        transition={transition}
        src={BackHeroImag}
        alt=" sportsman abstract background"
        className="hero__image--background"
      />
      <motion.div
        initial={{ opacity: 0, left: "-500px" }}
        whileInView={{ opacity: 1, left: "-320px" }}
        transition={transition}
        className="calories"
      >
        <img src={calories} alt="calories" />
        <div className="calories__text">
          <p>Calories burned</p>
          <span>220 kcal</span>
        </div>
      </motion.div>
    </>
  );
}
