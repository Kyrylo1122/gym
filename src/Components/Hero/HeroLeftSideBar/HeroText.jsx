import "./HeroText.css";
import { motion } from "framer-motion";
import { transition } from "../../Transition/Transition";
export default function HeroText() {
  return (
    <div className="heroText--container">
      <div className="hero__pre-text--container">
        <p className="hero__pre-text"> THE BEST FITNESS CLUB IN THE TOWN</p>
        <motion.div
          initial={{ left: "238px" }}
          whileInView={{ left: "7px" }}
          transition={{ ...transition, type: "tween" }}
          className="hero__pre-text--orange-container"
        ></motion.div>
      </div>
      <h1 className="hero__title">
        <span className="stroke-text ">Shape</span> your <br /> ideal body
      </h1>
      <p className="hero__after-title">
        In here we will help you to shape and build your ideal body
      </p>
    </div>
  );
}
