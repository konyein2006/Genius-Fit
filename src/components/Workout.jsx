import ExerciseCard from "./ExerciseCard";
import Wraper from "./Wraper";

export default function Workout({ workout }) {
  return (
    <Wraper
      id={"welcome"}
      header={"welcome to"}
      title={["The", "danger", "zone"]}
    >
      {workout.map((exercise, index) => {
        return <ExerciseCard key={index} exercise={exercise} index={index} />;
      })}
    </Wraper>
  );
}
