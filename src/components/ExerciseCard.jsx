import { useState } from "react";

export default function ExerciseCard({ exercise, index }) {
  const [setCompleted, setSetCompleted] = useState(0);

  function handleSetCompleted() {
    setSetCompleted((setCompleted + 1) % 6);
  }

  return (
    <div className="bg-slate-950 my-8 rounded-md p-3 gap-5 flex flex-col max-w-3xl mx-5 sm:mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center">
        <p className="hidden sm:block text-gray-400 text-3xl sm:text-4xl md:text-5xl font-bold">
          0{index + 1}
        </p>
        <p className="text-lg sm:text-xl font-semibold capitalize  sm:mx-auto">
          {exercise.name.replaceAll("_", " ")}
        </p>
        <p className="text-gray-400 capitalize">{exercise.type}</p>
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-gray-400">Muscle Groups</p>
          <p>{exercise.muscles}</p>
        </div>
        <p>{exercise.description.replaceAll("_", " ")}</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 ">
          {["reps", "rest", "tempo"].map((item, index) => {
            return (
              <button
                key={index}
                className="border border-slate-800 text-start p-2 rounded-sm "
              >
                <p className="text-gray-400 capitalize">{item}</p>
                <p className="font-semibold">
                  {item === "reps"
                    ? exercise.reps
                    : item === "rest"
                      ? exercise.rest
                      : exercise.tempo}
                </p>
              </button>
            );
          })}
          <button
            onClick={handleSetCompleted}
            className="border border-slate-800 hover:border-blue-500 cursor-pointer"
          >
            <p>Sets Completed</p>
            <p>{setCompleted} / 5</p>
          </button>
        </div>
      </div>
    </div>
  );
}
