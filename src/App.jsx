import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import BirthdayWish from "./page/BirthdayWish/BirthdayWish";
// import MidnightBirthdaySurprise from "./page/MidnightBirtdaySurprise/MidnightBirtdaySurprise";
// import AvengersBase from "./page/MarvelThemeBirthdayPage/AvengersBase";
// import MarvelThemeBirthday from "./page/MarvelThemeBirthdayPage/MarvelThemeBirthday";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/birtday-wish/birtday-wish" />} />
      <Route path="/birtday-wish/birtday-wish" element={<BirthdayWish />} />
      {/* <Route path="/birtday-wish/birtday-wish" element={<MidnightBirthdaySurprise />} /> */}
      <Route path="/" element={<Navigate to="/birtday-wish/birtday-wish-avengers-base" />} />
      {/* <Route path="/birtday-wish/birtday-wish-avengers-base" element={<AvengersBase />} /> */}
      {/* <Route path="/birtday-wish/birtday-wish-marvel-theme" element={<MarvelThemeBirthday />} /> */}
    </Routes>
  );
}