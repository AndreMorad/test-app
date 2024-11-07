import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LINKS } from "../constants";

const Scroll = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false); // To avoid multiple rapid scrolls

  //   const pages = [
  //     { id: 1, color: "bg-red-500" },
  //     { id: 2, color: "bg-green-500" },
  //     { id: 3, color: "bg-blue-500" },
  //   ];

  const handleScroll = (e) => {
    e.preventDefault(); // Prevent default scroll behavior

    if (isScrolling) return; // Prevent multiple rapid scrolls
    setIsScrolling(true); // Disable scrolling during the animation

    if (e.deltaY > 0) {
      setPageIndex((prevIndex) =>
        prevIndex < LINKS.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else {
      setPageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    }

    // Allow scrolling after a short delay to complete the animation
    setTimeout(() => setIsScrolling(false), 1000); // Adjust this to match the animation duration
  };

  // Prevent default scrolling and handle custom scroll
  useEffect(() => {
    const scrollHandler = (e) => handleScroll(e);

    window.addEventListener("wheel", scrollHandler, { passive: false });
    return () => window.removeEventListener("wheel", scrollHandler);
  }, [pageIndex]);

  // Touch events for mobile scrolling (prevent default touch scroll)
  const handleTouchMove = (e) => {
    e.preventDefault();
    const touchStartY = e.touches[0].clientY;

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;

      if (touchStartY > touchEndY) {
        setPageIndex((prevIndex) =>
          prevIndex < LINKS.length - 1 ? prevIndex + 1 : prevIndex
        );
      } else {
        setPageIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
      }
    };

    window.addEventListener("touchend", handleTouchEnd, { once: true });
  };

  useEffect(() => {
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => window.removeEventListener("touchmove", handleTouchMove);
  }, [pageIndex]);

  return (
    <div className="w-screen h-screen overflow-hidden">
      {LINKS.map((page, index) => (
        <motion.div
          key={page.id}
          className={`h-screen w-screen ${page.color} absolute top-0 left-0`}
          initial={{ y: "100%" }}
          animate={{
            y:
              index === pageIndex ? "0%" : index > pageIndex ? "100%" : "-100%",
          }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mt-20 text-6xl text-center text-white">
            Page {page.id}
          </h1>
        </motion.div>
      ))}
    </div>
  );
};

export default Scroll;
