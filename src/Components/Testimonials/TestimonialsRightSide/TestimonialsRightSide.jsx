import { testimonialsData } from "../../../data/testimonialsData";
import "./TestimonialsRightSide.css";
import { motion } from "framer-motion";
import { transition } from "../../Transition/Transition";
export default function TestimonialsRightSide({ selected }) {
  return (
    <div className="testimonials-right-side">
      <motion.div
        initial={{ top: "-30%", left: "-30%" }}
        whileInView={{ top: "-10%", left: "-10%" }}
        transition={transition}
        className="testimonials-right-side__box"
      />
      <motion.div
        initial={{ bottom: "-30%" }}
        whileInView={{ bottom: "0%" }}
        transition={transition}
        className="testimonials-right-side__box-sec"
      />

      <motion.img
        initial={{ left: "120px" }}
        whileInView={{ left: "0" }}
        transition={transition}
        src={testimonialsData[selected].image}
        alt={testimonialsData[selected].name}
        className="testimonials-right-side__img"
      />
    </div>
  );
}
