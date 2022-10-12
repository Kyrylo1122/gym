import ReasonsRightSide from "./ReasonsRightSide/ReasonsRightSide";
import "./Reasons.css";
import ReasonsLeftSide from "./ReasonsLeftSide/ReasonsLeftSide";
export default function Reasons() {
  return (
    <section className="section" id="reason">
      <div className="container reasons-container">
        <ReasonsLeftSide />
        <ReasonsRightSide />
      </div>
    </section>
  );
}
