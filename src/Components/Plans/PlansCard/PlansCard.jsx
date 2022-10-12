import "./PlansCard.css";
import { BsCheck2Circle } from "react-icons/bs";
export default function PlansCard({ plan }) {
  const { icon, name, price, features } = plan;
  return (
    <>
      <div className="plans-card__icon">{icon}</div>
      <h3 className="plans-card__title">{name}</h3>
      <p className="plans-card__price">${price}</p>
      <ul className="plans-card__list">
        {features.map((feature) => (
          <li className="plans-card__item" key={feature}>
            <BsCheck2Circle size="2rem" />
            <span> {feature}</span>
          </li>
        ))}
      </ul>

      <button type="button" className="plans-card__btn">
        Join now
      </button>
    </>
  );
}
