import "./Programs.css";
import ProgramsCardSet from "./ProgramsCardSet/ProgramsCardSet";
export default function Programs() {
  return (
    <section className="section programs" id="programs">
      <div className="container">
        <h2 className="title stroke-text programs__title">
          explore our <span className="title__span">programs</span>
          <span>to shape you</span>
        </h2>
        <ProgramsCardSet />
      </div>
    </section>
  );
}
