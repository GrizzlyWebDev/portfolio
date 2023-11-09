"use client";
import React, { useState, useEffect } from "react";

export default function AnimatedText(props: { text: string; delay: number }) {
  const [currentText, setCurrentText] = useState(props.text);

  let theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-."; //You can customize what letters it will cycle through
  let speed = 100; // ms per frame
  let increment = 3; // frames per step. Must be >2

  let si = 0;
  let stri = 0;
  let block = "";
  let fixed = "";

  function nextFrame() {
    for (var i = 0; i < props.text.length - stri; i++) {
      //Random number
      var num = Math.floor(theLetters.length * Math.random());
      //Get random letter
      var letter = theLetters.charAt(num);
      block = block + letter;
    }
    if (si == increment - 1) {
      stri++;
    }
    if (si == increment) {
      // Add a letter;
      // every speed*10 ms
      fixed = fixed + props.text.charAt(stri - 1);
      si = 0;
    }
    setCurrentText(fixed + block);
    block = "";
  }

  const animateText = (i: number) => {
    setTimeout(function () {
      if (--i) {
        animateText(i);
      }
      nextFrame();
      si = si + 1;
    }, speed);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      animateText(props.text.length * increment + 1);
    }, props.delay);
    return () => clearTimeout(timer);
  }, []);

  return <span>{currentText}</span>;
}
