import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';


const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Event listener to monitor scroll position
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll smoothly to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showButton && (
        <Button
          variant="dark"
          className="back-to-top"
          onClick={scrollToTop}
        >
          &#8679; {/* Unicode arrow symbol */}
        </Button>
      )}
    </>
  );
};

export default BackToTopButton
