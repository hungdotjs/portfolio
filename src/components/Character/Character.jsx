import { useRef, useEffect } from 'react';

import blue from '../../assets/images/blue.png';
import red from '../../assets/images/red.png';
import yellow from '../../assets/images/yellow.png';
import green from '../../assets/images/green.png';

import './character.scss';

const colors = [blue, red, yellow, green];

function Character(props) {
  const characterRef = useRef();

  useEffect(() => {
    const dino = characterRef.current;
    dino.style.left = `${Math.floor(Math.random() * 100)}vw`;
    dino.style.top = `${Math.floor(Math.random() * 100)}vh`;

    let to = {
      x: Math.random() * 12,
      y: Math.random() * 12,
    };

    dino.animate(
      [
        {
          transform: `translate(0, 0) rotate(0) scale(${Math.random() + 1})`,
        },
        {
          transform: `translate(${to.x}rem, ${to.y}rem) rotate(360deg) scale(${
            Math.random() + 1.5
          })`,
        },
      ],
      {
        duration: (Math.random() + 1) * 2000, // random duration
        direction: 'alternate',
        fill: 'both',
        iterations: Infinity,
        easing: 'ease-in-out',
      }
    );
  }, []);

  return (
    <div ref={characterRef} className="character">
      <img
        className="character__spritesheet"
        src={colors[props.index]}
        alt="character"
      />
    </div>
  );
}

export default Character;
