import { useState, useEffect } from "react";
import "./BackToTopButton.css";

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <button onClick={scrollToTop} className='back-to-top'>
        <svg
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          width='17'
          height='17'
          viewBox='0 0 17 17'
        >
          <g></g>
          <path
            d='M16.354 11.896l-0.707 0.707-7.147-7.146-7.146 7.146-0.707-0.707 7.853-7.853 7.854 7.853z'
            fill='#fff'
          ></path>
        </svg>
      </button>
    )
  );
}

export default BackToTopButton;
