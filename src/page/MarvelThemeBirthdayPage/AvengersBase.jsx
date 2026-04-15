import { useNavigate } from "react-router-dom";

function AvengersBase() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        🎉 Happy Birthday
      </h1>
      <h2 className="text-2xl md:text-4xl text-red-500 mb-8">
        Sandeep Saurav Das
      </h2>

      <button
        onClick={() => navigate("/birtday-wish/birtday-wish-avengers-base")}
        className="bg-red-600 px-6 py-3 rounded-xl hover:bg-red-700 transition"
      >
        Assemble the Avengers
      </button>
    </div>
  );
}
export default AvengersBase;