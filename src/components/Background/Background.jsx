import React, { useRef, useEffect } from 'react';

import './background.scss';

const colors = ['#3CC157', '#2AA7FF', '#9b59b6', '#FCBC0F', '#F85F36'];
const numBalls = 60;

function Background() {
  const background = useRef(null);

  useEffect(() => {
    const balls = [];

    for (let i = 0; i < numBalls; i++) {
      let ball = document.createElement('div');
      ball.classList.add('ball');
      ball.style.background = colors[Math.floor(Math.random() * colors.length)];
      ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
      ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
      ball.style.transform = `scale(${Math.random()})`;
      ball.style.width = `${Math.random()}rem`;
      ball.style.height = ball.style.width;

      balls.push(ball);
      background.current.append(ball);
    }

    // Keyframes
    balls.forEach((el, i, ra) => {
      let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12,
      };

      el.animate(
        [
          { transform: 'translate(0, 0) rotate(360deg)' },
          { transform: `translate(${to.x}rem, ${to.y}rem) rotate(0)` },
        ],
        {
          duration: (Math.random() + 1) * 2000, // random duration
          direction: 'alternate',
          fill: 'both',
          iterations: Infinity,
          easing: 'ease-in-out',
        }
      );
    });
  }, []);

  return <div ref={background} className="background"></div>;
}

export default Background;
