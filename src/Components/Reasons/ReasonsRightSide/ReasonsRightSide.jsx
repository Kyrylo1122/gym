import Partners from "../Partners/Partners";
import { BsCheck2Circle } from "react-icons/bs";

import "../Reasons.css";

export default function ReasonsRightSide() {
  return (
    <div className="ReasonsRightSide ">
      <p className="reasons__pre-title">SOME REASONS</p>
      <h2 className="reasons__title">
        <span className="stroke-text">WHY</span> CHOOSE US?
      </h2>
      <ul className="reasons__list">
        <li className="reasons__item">
          <BsCheck2Circle size="1.5rem" />
          <span> OVER 140+ EXPERT COACHES</span>
        </li>
        <li className="reasons__item">
          <BsCheck2Circle size="1.5rem" />
          <span> TRAIN SMARTER AND FASTER THAN BEFORE</span>
        </li>
        <li className="reasons__item">
          <BsCheck2Circle size="1.5rem" />
          <span>1 FREE PROGRAM FOR NEW MEMBER</span>
        </li>
        <li className="reasons__item">
          <BsCheck2Circle size="1.5rem" />
          <span>RELIABLE PARTNERS</span>
        </li>
      </ul>
      <Partners />
    </div>
  );
}
