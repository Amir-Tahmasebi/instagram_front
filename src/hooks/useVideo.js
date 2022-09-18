import { useRef, useEffect, useState } from "react";

const deviceCenter = window.innerHeight / 2;

export default function useVideo() {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const [elementRect, setElementRect] = useState(null);
  const videoRef = useRef(null);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setElementIsVisible(entry.isIntersecting);
      setElementRect(entry.intersectionRect);
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, [options, videoRef]);

  useEffect(() => {
    if (videoRef.current && elementIsVisible && elementRect) {
      if (elementRect.top < deviceCenter && elementRect.bottom > deviceCenter) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [elementIsVisible, elementRect]);

  return [videoRef];
}
