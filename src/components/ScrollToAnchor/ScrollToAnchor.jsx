import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToAnchor() {
  const location = useLocation();
  const lastHash = useRef('');

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      const targetElement = document.getElementById(lastHash.current);
      const offset = 120; // Set your desired offset value

      if (targetElement) {
        const bodyRect = document.body.getBoundingClientRect().top;
        const targetRect = targetElement.getBoundingClientRect().top;
        const offsetPosition = targetRect - bodyRect - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        lastHash.current = '';
      }
    }
  }, [location]);

  return null;
}

export default ScrollToAnchor;
