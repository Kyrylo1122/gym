import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import "./Footer.css";
import Logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="section footer">
      <div className="blur blur__footer"></div>
      <div className="blur blur__footer--sec"></div>

      <div className="container footer__container">
        <ul className="footer__list">
          <li className="footer__item">
            <a
              className="footer__link"
              href="https://github.com/Kyrylo1122/gym"
            >
              <BsGithub size="2rem" />
            </a>
          </li>
          <li className="footer__item">
            <a
              className="footer__link"
              href="https://www.linkedin.com/in/kyrylo-bereznov-40b39818a/"
            >
              <BsLinkedin size="2rem" />
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="https://instagram.com/">
              <BsInstagram size="2rem" />
            </a>
          </li>
        </ul>
        <img className="footer__logo" src={Logo} alt="logo" width="160" />
      </div>
    </footer>
  );
}
