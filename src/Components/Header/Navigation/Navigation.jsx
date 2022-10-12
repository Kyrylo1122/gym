import "./Navigation.css";
import { Link } from "react-scroll";
export default function Navigation() {
  return (
    <nav>
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="programs" smooth={true} className="navigation__link">
            Programs
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="reason" smooth={true} className="navigation__link">
            Why us
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="plans" smooth={true} className="navigation__link">
            Plans
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="testimonials" smooth={true} className="navigation__link">
            Testimonials
          </Link>
        </li>
      </ul>
    </nav>
  );
}
