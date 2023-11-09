"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";

export default function AnimatedText(props: { text: string; delay: number }) {
  const [currentText, setCurrentText] = useState(props.text);

  let theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-."; //You can customize what letters it will cycle through
  let speed = 100; // ms per frame
  let increment = 3; // frames per step. Must be >2

  let si = 0;
  const siRef = useRef(si);
  let stri = 0;
  const striRef = useRef(stri);
  let block = "";
  const blockRef = useRef(block);
  let fixed = "";
  const fixedRef = useRef(fixed);

  const nextFrame = useCallback(() => {
    for (var i = 0; i < props.text.length - striRef.current; i++) {
      //Random number
      var num = Math.floor(theLetters.length * Math.random());
      //Get random letter
      var letter = theLetters.charAt(num);
      blockRef.current = blockRef.current + letter;
    }
    if (siRef.current == increment - 1) {
      striRef.current++;
    }
    if (siRef.current == increment) {
      // Add a letter;
      // every speed*10 ms
      fixedRef.current =
        fixedRef.current + props.text.charAt(striRef.current - 1);
      siRef.current = 0;
    }
    setCurrentText(fixedRef.current + blockRef.current);
    blockRef.current = "";
  }, [increment, props.text, theLetters]);

  const animateText = useCallback(
    (i: number) => {
      setTimeout(function () {
        if (--i) {
          animateText(i);
        }
        nextFrame();
        siRef.current = siRef.current + 1;
      }, speed);
    },
    [nextFrame, speed]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      animateText(props.text.length * increment + 1);
    }, props.delay);
    return () => clearTimeout(timer);
  }, [animateText, props.delay, props.text.length, increment]);

  return <span>{currentText}</span>;
}
