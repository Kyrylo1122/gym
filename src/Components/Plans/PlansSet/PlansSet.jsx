import { plansData } from "../../../data/plansData";
import PlansCard from "../PlansCard/PlansCard";
import { useState } from "react";
import "./PlansSet.css";
export default function PlansSet() {
  const [active, setActive] = useState(1);
  return (
    <ul className="plans-set">
      {plansData.map((plan, index) => (
        <li
          key={plan.name}
          className={`plans-set__item ${index === active && "active"}`}
          onClick={() => {
            setActive(index);
          }}
        >
          <PlansCard plan={plan} />
        </li>
      ))}
    </ul>
  );
}
