import Button from "../utils/Button";

export default function Home() {
  return (
    <div className="h-screen flex flex-col gap-5 items-center justify-center text-center">
      <div className="flex flex-col gap-3 text-center">
        <p className="text-sm sm:text-md md:text-lg uppercase">
          it's time to get
        </p>
        <h1 className="uppercase text-4xl sm:text-5xl md:text-6xl font-semibold">
          swole<span className="text-blue-400">normous</span>
        </h1>
      </div>
      <p className="p-3 sm:p-4 md:p-5 lg:p-10 max-w-4xl">
        I hereby acknowledgement that I may become{" "}
        <span className="text-blue-400">unbelievably swolenormous</span> and
        accept all risks of becoming the local{" "}
        <span className="text-blue-400">mass montrosity</span>, afflicted with
        severe body dismorphia, unable to fit through doors.
      </p>
      <Button
        content={"Accept & Begin"}
        fun={() => (window.location.href = "#generate")}
      />
    </div>
  );
}
