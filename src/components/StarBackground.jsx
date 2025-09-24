import { useEffect, useState } from 'react';
import { randomMinMax } from '../lib/utils';

// Stars: id, size, x, y, opacity, animationDelay, animationDuration
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
        size: Math.random() < 0.03 ? randomMinMax(3, 11) : randomMinMax(1, 3), // %3
        x: randomMinMax(1, 99), // left position (%)
        y: randomMinMax(1, 99), // top position (%)
        opacity: Math.random() * 0.5 + 0.5, // visible 50-100%
        animationDelay: randomMinMax(1, 10),
        animationDuration: randomMinMax(2, 5), // twinkle speed
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
        size: randomMinMax(1, 2), // scale factor
        x: randomMinMax(30, 99), // left position (%)
        y: randomMinMax(1, 19), // top possition(upper part of screen)
        animationDelay: randomMinMax(0, 14), // when meteor starts
        animationDuration: randomMinMax(3, 6), // fall speed
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
