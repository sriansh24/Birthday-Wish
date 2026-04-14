import { BIRTHDAY_PERSON } from "../../constants/data";

function ProfileFrame() {

  return (
    <div className="anim-fade-down flex justify-center w-full mb-4">
      <div className="neon-frame w-62.5 h-62.5 sm:w-44 sm:h-44 md:w-56 md:h-56">
        <div className="neon-frame-inner">
          {BIRTHDAY_PERSON.imageUrl ? (
            <img
              src={BIRTHDAY_PERSON.imageUrl}
              alt={BIRTHDAY_PERSON.name}
            />
          ) : (
            <span className="text-5xl sm:text-6xl">🌙</span>
          )}
        </div>
      </div>
    </div>
  );
}
export default ProfileFrame;
