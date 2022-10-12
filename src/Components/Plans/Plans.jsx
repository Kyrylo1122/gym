import "./Plans.css";
import PlansSet from "./PlansSet/PlansSet";
export default function Plans() {
  return (
    <section className="section plans" id="plans">
      <div className="blur blur__plans"></div>
      <div className="blur blur__plans--sec"></div>

      <div className="container plans-container">
        <h2 className="title stroke-text plans__title">
          READY TO START<span className="title__span"> YOUR JOURNEY</span> NOW
          WITH US
        </h2>
        <PlansSet />
      </div>
    </section>
  );
}
