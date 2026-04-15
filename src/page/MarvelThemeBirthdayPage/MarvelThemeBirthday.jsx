import { useState } from "react";

const heroes = [
  { name: "Iron Man", quote: "Genius, Billionaire, Mentor 💡" },
  { name: "Captain America", quote: "Leader with integrity 🛡️" },
  { name: "Thor", quote: "Power & wisdom ⚡" },
  { name: "Hulk", quote: "Strong support always 💪" },
  { name: "Doctor Strange", quote: "Visionary mind 🔮" },
];

function MarvelThemeBirthday() {
  const [assembled, setAssembled] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      {!assembled ? (
        <button
          onClick={() => setAssembled(true)}
          className="bg-yellow-500 px-8 py-4 text-black rounded-2xl text-xl hover:scale-105 transition"
        >
          🛡️ Click to Assemble Avengers
        </button>
      ) : (
        <div>
          <h1 className="text-5xl font-bold text-red-600 mb-6">
            Avengers Assembled!
          </h1>

          <div className="grid md:grid-cols-3 gap-6">
            {heroes.map((hero, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition"
              >
                <h2 className="text-2xl text-yellow-400">
                  {hero.name}
                </h2>
                <p className="mt-2 text-gray-300">{hero.quote}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="text-3xl text-green-400">
              To our real-life hero:
            </h2>
            <h1 className="text-4xl font-bold mt-2">
              Sandeep Saurav Das 🎂
            </h1>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Thank you for guiding, mentoring, and inspiring us every day. You
              are our Iron Man + Captain combined 🚀
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
export default MarvelThemeBirthday;