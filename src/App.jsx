import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
// import BirthdayWish from "./page/BirthdayWish/BirthdayWish";
import MidnightBirthdaySurprise from "./page/MidnightBirtdaySurprise/MidnightBirtdaySurprise";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/birtday-wish/birtday-wish" />} />
      {/* <Route path="/birtday-wish/birtday-wish" element={<BirthdayWish />} /> */}
      <Route path="/birtday-wish/birtday-wish" element={<MidnightBirthdaySurprise />} />
    </Routes>
  );
}