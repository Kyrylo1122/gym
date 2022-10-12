import { testimonialsData } from "../../../data/testimonialsData";
import "./TestimonialsLeftSide.css";

import { motion } from "framer-motion";
import { transition } from "../../Transition/Transition";

export default function TestimonialsLeftSide({ selected }) {
  return (
    <div className="testimonials-left-side">
      <h2 className="testimonials-left-side__title">testimonials</h2>
      <p className="stroke-text testimonials-left-side__after-title">
        what they
      </p>
      <p className="testimonials-left-side__after-title ">say about us</p>
      <motion.p
        initial={{ opacity: 0, x: "-100%" }}
        whileInView={{ opacity: 1, x: "0%" }}
        transition={transition}
        className="testimonials-left-side__after-review"
      >
        {testimonialsData[selected].review}
      </motion.p>
      <h3 className="testimonials-left-side__subtitle">
        <span>{testimonialsData[selected].name} </span>-{" "}
        {testimonialsData[selected].status}
      </h3>
    </div>
  );
}
