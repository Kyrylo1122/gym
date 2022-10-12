import "./ProgramsCard.css";
import { FaArrowRight } from "react-icons/fa";

export default function ProgramsCard({ program }) {
  const { image, heading, details } = program;
  return (
    <li className="programs-card__item">
      <div className="programs-card__meta">
        <div className="programs-card__icon">{image}</div>
        <h3 className="programs-card__title">{heading}</h3>
        <p className="programs-card__text">{details}</p>
      </div>

      <div className="programs-card__join" type="button">
        <span> Join now</span>
        <FaArrowRight />
      </div>
    </li>
  );
}
