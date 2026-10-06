export default function Button({ content, fun }) {
  return (
    <button
      className="text-md sm:text-lg border-2 px-8 py-4 rounded-md border-blue-400 bg-gray-900 cursor-pointer box-shadow mx-auto my-5"
      onClick={fun}
    >
      {content}
    </button>
  );
}
