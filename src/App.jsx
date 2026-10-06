import { useState } from "react";
import Generator from "./components/Generator";
import Home from "./components/Home";
import Workout from "./components/Workout";
import { generateWorkout } from "./utils/function";

function App() {
  const [workout, setWorkout] = useState(null);
  const [poison, setPoison] = useState("individual");
  const [goal, setGoal] = useState("strength_power");
  const [muscles, setMuscles] = useState([]);

  function updateWorkout() {
    if (muscles.length < 1) return;

    let formula = generateWorkout({ muscles, poison, goal });
    setWorkout(formula);
  }

  return (
    <main className=" text-white">
      <Home />
      <Generator
        poison={poison}
        setPoison={setPoison}
        goal={goal}
        setGoal={setGoal}
        muscles={muscles}
        setMuscles={setMuscles}
        updateWorkout={updateWorkout}
      />
      {workout && <Workout workout={workout} />}
    </main>
  );
}

export default App;
