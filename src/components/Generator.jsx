import Wraper from "./Wraper";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";
import { useState } from "react";
import Button from "../utils/Button";

function Header({ index, title, description }) {
  return (
    <div className="flex flex-col justify-center items-center gap-5  p-10">
      <div className="flex items-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold text-slate-400">
          {index}
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl ">{title}</p>
      </div>
      <p className="font-semibold text-md md:text-lg">{description}</p>
    </div>
  );
}

export default function Generator({
  poison,
  setPoison,
  muscles,
  setMuscles,
  goal,
  setGoal,
  updateWorkout,
}) {
  const [modal, setModal] = useState(false);

  function handleModal() {
    setModal(!modal);
  }

  function updateMuscles(musclesGroup) {
    if (muscles.includes(musclesGroup)) {
      setMuscles(muscles.filter((val) => val !== musclesGroup));
      return;
    }

    if (muscles.length >= 3) return;

    if (poison !== "individual") {
      setMuscles([musclesGroup]);
      setModal(false);
      return;
    }

    setMuscles([...muscles, musclesGroup]);
    if (muscles.length === 2) setModal(false);
  }

  return (
    <section className="flex flex-col gap-5">
      <Wraper
        header="generate your workout"
        title={["It's", "huge", "o'clock"]}
        id={"generate"}
      >
        <Header
          index={"01"}
          title={"Pick your poison"}
          description={"Select the workout you wish to endure."}
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto px-4">
          {Object.keys(WORKOUTS).map((item, index) => {
            return (
              <button
                onClick={() => {
                  setPoison(item);
                  setMuscles([]);
                }}
                key={index}
                className={
                  "border hover:border-blue-800 bg-slate-900 px-5 py-3 rounded-lg cursor-pointer capitalize text-md sm:text-md  font-semibold " +
                  (item === poison ? "border-blue-700" : "border-blue-400")
                }
              >
                {item.replaceAll("_", " ")}
              </button>
            );
          })}
        </div>
        <Header
          index={"02"}
          title={"Lock on targets"}
          description={"Select the muscles judged for annihilation."}
        />
        <div className="bg-slate-950 p-3 border border-blue-400 rounded-lg  max-w-3xl mx-5 md:mx-auto">
          <div className="relative cursor-pointer" onClick={handleModal}>
            <p className=" flex items-center justify-center text-md sm:text-lg uppercase ">
              {muscles.length === 0
                ? "Select Muscle Groups"
                : muscles.join(" ")}
            </p>
            <i className="fa-solid absolute right-5 top-1/2 -translate-y-1/2 fa-caret-down "></i>
          </div>
          {modal && (
            <div className="flex flex-col gap-2 mt-3 ">
              {(poison === "individual"
                ? WORKOUTS[poison]
                : Object.keys(WORKOUTS[poison])
              ).map((item, index) => {
                return (
                  <button key={index} onClick={() => updateMuscles(item)}>
                    <p
                      className={
                        "uppercase hover:text-blue-400 duration-100 " +
                        (muscles.includes(item) ? "text-blue-400" : "")
                      }
                    >
                      {item}
                    </p>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <Header
          index={"03"}
          title={"Become Juggernaut"}
          description={"Select your ultimate objective."}
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto px-4">
          {Object.keys(SCHEMES).map((item, index) => {
            return (
              <button
                onClick={() => setGoal(item)}
                key={index}
                className={
                  "border hover:border-blue-700 bg-slate-900 px-5 py-3 rounded-lg cursor-pointer capitalize text-md sm:text-md  font-semibold " +
                  (item === goal ? "border-blue-700" : "border-blue-400")
                }
              >
                {item.replaceAll("_", " ")}
              </button>
            );
          })}
        </div>
      </Wraper>
      <Button
        content={"Formulate"}
        fun={() => {
          updateWorkout;
          window.location.href = "#welcome";
        }}
      />
    </section>
  );
}
