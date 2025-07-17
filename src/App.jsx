import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./App.css";
import Homepage from "./page/Homepage.jsx";

export default function App() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from("#loader h3", {
      x: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    })
      .to("#loader h3", {
        opacity: 0,
        x: -10,
        duration: 1,
        stagger: 0.1,
      })
      .to("#loader", {
        opacity: 0,
        duration: 0.5,
      })
      .to("#loader", {
        display: "none",
      });
  }, []);

  return (
    <>
      <div id="loader">
        <h3>Tomorrow's</h3>
        <h3>Developer,</h3>
        <h3>Today</h3>
      </div>
      <Homepage />
    </>
  );
}
