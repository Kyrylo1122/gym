import { testimonialsData } from "../../../data/testimonialsData";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import "./TestimonialsButton.css";
export default function TestimonialsButtons({ add, subtract, selected }) {
  return (
    <div className="testimonialsButtons">
      <button
        disabled={selected === 0 ? true : false}
        onClick={() => subtract()}
        className="testimonials__btn "
      >
        <FiArrowLeft size="3em" color={selected === 0 ? "grey" : "white"} />
      </button>

      <button
        disabled={selected === testimonialsData.length - 1 ? true : false}
        onClick={() => add()}
        className="testimonials__btn "
      >
        <FiArrowRight
          size="3em"
          color={selected === testimonialsData.length - 1 ? "grey" : "white"}
        />
      </button>
    </div>
  );
}
