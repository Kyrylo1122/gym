import "./HeroBtn.css";
export default function HeroBtn() {
  return (
    <div className="hero__btn--container">
      <button type="button" className="btn btn-first hero__btn">
        Get Started
      </button>
      <button type="button" className="btn btn-second ">
        Learn More
      </button>
    </div>
  );
}
