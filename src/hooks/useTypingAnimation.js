// src/hooks/useTypingAnimation.js
import { useState, useEffect, useRef } from "react";

/**
 * Custom hook for typing animation effect
 * @param {Object} options - Configuration options
 * @param {string[]} options.phrases - Array of phrases to type
 * @param {number} [options.typeSpeed=80] - Speed of typing in milliseconds
 * @param {number} [options.deleteSpeed=40] - Speed of deleting in milliseconds
 * @param {number} [options.pauseTime=2000] - Pause time between phrases in milliseconds
 * @param {boolean} [options.isPaused=false] - Whether animation is paused
 * @returns {string} Current text being displayed
 */
export function useTypingAnimation({
  phrases,
  typeSpeed = 80,
  deleteSpeed = 40,
  pauseTime = 2000,
  isPaused = false,
}) {
  const [currentText, setCurrentText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef();

  useEffect(() => {
    if (phrases.length === 0 || isPaused) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      return;
    }

    const currentPhrase = phrases[currentPhraseIndex];

    const animate = () => {
      if (isDeleting) {
        // Deleting characters
        setCurrentText((prev) => prev.slice(0, -1));
      } else {
        // Typing characters
        setCurrentText((prev) => currentPhrase.slice(0, prev.length + 1));
      }
    };

    // Determine the delay for the next animation step
    let delay = isDeleting ? deleteSpeed : typeSpeed;

    // Check if we've finished typing the current phrase
    if (!isDeleting && currentText === currentPhrase) {
      delay = pauseTime; // Pause at the end of phrase
      setIsDeleting(true);
    }
    // Check if we've finished deleting
    else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    timeoutRef.current = setTimeout(animate, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [
    currentText,
    currentPhraseIndex,
    isDeleting,
    phrases,
    typeSpeed,
    deleteSpeed,
    pauseTime,
    isPaused,
  ]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return currentText;
}

export default useTypingAnimation;
