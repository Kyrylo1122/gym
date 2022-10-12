import Logo from "../../assets/logo.png";
import "./Header.css";
import Navigation from "./Navigation/Navigation";
export default function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="logo" className="header__logo" />
      <Navigation />
    </header>
  );
}
