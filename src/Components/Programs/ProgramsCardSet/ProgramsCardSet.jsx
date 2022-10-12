import { programsData } from "../../../data/programsData";
import ProgramsCard from "../ProgramsCard/ProgramsCard";
export default function ProgramsCardSet() {
  return (
    <ul className="programs-card__list">
      {programsData.map((program) => (
        <ProgramsCard program={program} key={program.heading} />
      ))}
    </ul>
  );
}
