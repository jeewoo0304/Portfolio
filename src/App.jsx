import React, { useState } from "react";
import Intro from "./components/Intro";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Archive from "./components/Archive";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="app">
      <main className="main-content">
        <Intro onAnimationComplete={() => setShowProfile(true)} />
        <div
          className={`profile-section-wrapper ${showProfile ? "visible" : ""}`}
        >
          <Profile />
        </div>
        <Experience />
        <Portfolio />
        <Archive />
        <Contact />
      </main>
    </div>
  );
}

export default App;
