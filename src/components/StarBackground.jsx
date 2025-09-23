import { useEffect, useState } from 'react';

// Stars: id, size, x, y, opacity, animationDuration
// Meteors: id, size, x, y, animationDelay, animationDuration

// Component renders animated stars + meteors in the background
export default function StarBackground() {
  // State for randomly generated stars and meteors
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    // Generate stars & meteors when component mounts
    generateStars();
    generateMeteors();

    // On window resize -> regenerate stars to match new viewport
    const handleResize = () => {
      generateStars();
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function: generate random stars (density based on screen size)
  const generateStars = () => {
    // Number of stars relative to viewport area
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i, // unique key
        size:
          Math.random() < 0.03 ? Math.random() * 9 + 3 : Math.random() * 3 + 1, // %3
        x: Math.random() * 100, // left position (%)
        y: Math.random() * 100, // top position (%)
        opacity: Math.random() * 0.5 + 0.5, // visible 50-100%
        animationDelay: Math.random() * 10,
        animationDuration: Math.random() * 4 + 2, // twinkle speed
      });
    }

    setStars(newStars); // update state
  };

  // Function: generate a few meteors randomly positioned
  const generateMeteors = () => {
    const numberOfMeteors = 3; // fixed count
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i, // unique key
        size: Math.random() * 2 + 1, // scale factor
        x: Math.random() * 100, // left position (%)
        y: Math.random() * 20, // top possition(upper part of screen)
        animationDelay: Math.random() * 15, // when meteor starts
        animationDuration: Math.random() * 3 + 3, // fall speed
      });
    }

    setMeteors(newMeteors); // update state
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Render stars  */}
      {stars.map(star => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + 'px',
            height: star.size + 'px',
            left: star.x + '%',
            top: star.y + '%',
            opacity: star.opacity,
            animationDelay: star.animationDelay + 's',
            animationDuration: star.animationDuration + 's',
          }}
        ></div>
      ))}
      {/* Render meteors  */}
      {meteors.map(meteor => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + 'px',
            height: meteor.size * 1.2 + 'px',
            left: meteor.x + '%',
            top: meteor.y + '%',
            // Animation delay not working for meteors there is a bug
            animationDelay: meteor.animationDelay,
            animationDuration: meteor.animationDuration + 's',
          }}
        ></div>
      ))}
    </div>
  );
}
