export default function Wraper({ children, title, header, id }) {
  return (
    <div id={id}>
      <div className="bg-slate-950 py-10 flex flex-col gap-3 text-center mb-5">
        <p className="uppercase text-base font-semibold">{header}</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          {title[0]}
          <span className="text-blue-400 uppercase"> {title[1]} </span>
          {title[2]}
        </h1>
      </div>
      <div>{children}</div>
    </div>
  );
}
