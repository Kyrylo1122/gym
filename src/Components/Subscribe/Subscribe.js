import "./Subscribe.css";
import SubscribeForm from "./SubscribeForm/SubscribeForm";
export default function Subscribe() {
  return (
    <section className="section">
      <div className="container subscribe__container">
        <div className="subscribe__leftSide">
          {" "}
          <hr />
          <h2 className="stroke-text subscribe__title ">
            READY TO <span>LEVEL UP</span>
          </h2>
          <h2 className="stroke-text subscribe__title subscribe__title--sec ">
            <span>YOUR BODY </span>
            WITH US?
          </h2>
        </div>
        <div className="subscribe__rightSide">
          <SubscribeForm />
        </div>
      </div>
    </section>
  );
}
