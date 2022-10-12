import { useState } from "react";
import TestimonialsLeftSide from "./Left-Side/TestimonialsLeftSide";
import "./Testimonials.css";
import TestimonialsButtons from "./TestimonialsButtons/TestimonialsButtons";
import TestimonialsRightSide from "./TestimonialsRightSide/TestimonialsRightSide";

export default function Testimonials() {
  const [selected, setSelected] = useState(0);
  const add = () => setSelected((state) => state + 1);
  const subtract = () => setSelected((state) => state - 1);

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container testimonials-container">
        <TestimonialsLeftSide selected={selected} />
        <TestimonialsButtons
          add={add}
          subtract={subtract}
          selected={selected}
        />
        <TestimonialsRightSide selected={selected} />
      </div>
    </section>
  );
}
