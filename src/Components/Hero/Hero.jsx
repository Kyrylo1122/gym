import Header from "../Header/Header";
import "./Hero.css";
import HeroBenefitsList from "./HeroLeftSideBar/HeroBenefitsList";
import HeroBtn from "./HeroLeftSideBar/HeroBtn";
import HeroText from "./HeroLeftSideBar/HeroText";
import HeroRightSideBar from "./HeroRightSideBar/HeroRightSideBar";
export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="blur blur__hero"></div>
      <div className="container hero__container">
        <div className="hero__left-side">
          <Header />
          <HeroText />
          <HeroBenefitsList />
          <HeroBtn />
        </div>
        <div className="hero__right-side">
          <HeroRightSideBar />
        </div>
      </div>
    </section>
  );
}
