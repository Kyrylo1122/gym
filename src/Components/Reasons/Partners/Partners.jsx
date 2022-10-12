import nike from "../../../assets/nike.png";
import adidas from "../../../assets/adidas.png";
import nb from "../../../assets/nb.png";
import "./Partners.css";
export default function Partners() {
  return (
    <div className="partners">
      <h3 className="partners__title"> Our partners:</h3>
      <ul className="partners__list">
        <li className="partners__item">
          <img src={nb} alt="new balance" />
        </li>
        <li className="partners__item">
          <img src={adidas} alt="adidas" />
        </li>
        <li className="partners__item">
          <img src={nike} alt="nike" />
        </li>
      </ul>
    </div>
  );
}
