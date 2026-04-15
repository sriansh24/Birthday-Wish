import { useState } from "react";
function BirthdayWish() {
  const [celebrate, setCelebrate] = useState(false);

  return (
    <>
      <div className="bg-primary text-white">
        {/* HERO SECTION */}
        <section className="h-screen flex flex-col items-center justify-center text-center relative">
          <p className="text-xs tracking-widest text-red-500 mb-4">
            EARTH'S MIGHTIEST HEROES PRESENT
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide">
            HAPPY BIRTHDAY
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-orange-500 mt-4">
            SANDEEP SAURAV DAS
          </h2>

          <div className="mt-10 w-16 h-16 border-2 border-cyan-400 rounded-full flex items-center justify-center animate-pulse">
            <div className="w-6 h-6 bg-cyan-400 rounded-full" />
          </div>

          <p className="text-gray-400 text-sm mt-6 max-w-md">
            The Avengers have assembled to celebrate one of the greatest heroes
            — your mentor, your guide, your legend.
          </p>

          <p className="mt-6 text-xs tracking-widest text-gray-500">
            SCROLL TO CONTINUE
          </p>
        </section>

        {/* SUPERPOWERS */}
        <section className="py-20 text-center border-t border-red-900">
          <h2 className="text-3xl font-bold tracking-widest">
            HIS SUPERPOWERS
          </h2>
          <p className="text-xs text-red-500 mt-2 tracking-widest">
            EVERY HERO HAS THEIR GIFTS
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-10 px-6">
            {[
              { title: "MENTOR", desc: "LIKE CAPTAIN AMERICA" },
              { title: "VISIONARY", desc: "LIKE IRON MAN" },
              { title: "WISDOM", desc: "LIKE DOCTOR STRANGE" },
              { title: "LEADER", desc: "LIKE THOR ODINSON" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:scale-105 transition"
              >
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-xs text-gray-400 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* QUOTE */}
        <section className="py-20 text-center border-t border-red-900">
          <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 max-w-3xl mx-auto">
            "PART OF THE JOURNEY IS THE END — BUT YOUR STORY IS FAR FROM OVER,
            SANDEEP."
          </h2>
          <p className="text-xs text-gray-500 mt-6">
            — THE AVENGERS | YOUR TEAM
          </p>
        </section>

        {/* MAKE A WISH */}
        <section className="py-20 text-center border-t border-red-900">
          <h2 className="text-3xl font-bold tracking-widest">MAKE A WISH</h2>
          <p className="text-xs text-red-500 mt-2 tracking-widest">
            TAP THE SHIELD TO CELEBRATE
          </p>

          <div
            onClick={() => setCelebrate(true)}
            className="cursor-pointer mt-10 text-6xl"
          >
            🎂
          </div>

          {celebrate && (
            <p className="mt-4 text-green-400">🎉 Celebration Activated!</p>
          )}

          {/* MESSAGE CARD */}
          <div className="max-w-xl mx-auto mt-10 bg-gray-900 p-8 rounded-xl border border-yellow-600">
            <h3 className="text-xl font-bold text-yellow-400">TO OUR HERO</h3>
            <p className="text-sm text-gray-300 mt-4">
              Sandeep Saurav Das, on your special day, the entire team assembles
              to say — thank you for being the Iron Man of ideas, the Captain
              America of integrity, and the Thor of confidence.
            </p>

            <p className="text-sm text-gray-400 mt-4">
              May this year be your Endgame victory — filled with new
              adventures, epic wins, and moments worth assembling for.
            </p>

            <p className="mt-4 text-yellow-400 font-bold">
              Happy Birthday, Legend.
            </p>

            <button className="mt-6 bg-red-600 px-6 py-3 rounded-lg hover:bg-red-700">
              ⚡ ASSEMBLE & CELEBRATE
            </button>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-xs text-gray-600 py-6">
          Made with ❤️ | Avengers Initiative
        </footer>
      </div>
    </>
  );
}
export default BirthdayWish;