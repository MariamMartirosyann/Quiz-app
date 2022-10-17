import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage";
import Quiz from "./Pages/Quiz/Quiz";
import LoginPage from "./Pages/LoginPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
