import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Counter = ({ from, to, duration }) => {
  const [count, setCount] = useState(from); // Initial count
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger once when in view
    threshold: 0.5, // Trigger when at least half is visible
  });

  useEffect(() => {
    if (inView) {
      // Animate the count-up when in view
      let currentCount = from;
      const step = (to - from) / (duration / 10); // Increment per 10ms
      const interval = setInterval(() => {
        currentCount += step; // Increment by step
        if (currentCount >= to) {
          setCount(to); // Set to final value and clear interval
          clearInterval(interval);
        } else {
          setCount(Math.floor(currentCount)); // Update state
        }
      }, 10); // Update every 10ms for smooth animation

      return () => clearInterval(interval); // Clean up interval on unmount or re-render
    }
  }, [inView]); // Effect only runs when inView changes

  return <span ref={ref}>{count}</span>; // Attach ref to trigger useInView
};

export default Counter;
