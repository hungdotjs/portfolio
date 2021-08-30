import { useRef } from 'react';

import characterImg from '../../assets/images/climb.png';

import './character.scss';

function Character() {
  const characterRef = useRef();

  return (
    <div ref={characterRef} className="character">
      <img
        className="character__spritesheet"
        src={characterImg}
        alt="character"
      />
    </div>
  );
}

export default Character;
