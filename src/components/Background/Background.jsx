import React, { useRef } from 'react';
import Character from '../Character/Character';

import './background.scss';

function Background() {
  const background = useRef(null);
  const dinos = [];

  for (let i = 0; i < 50; i++) {
    dinos.push(<Character key={i} index={Math.floor(Math.random() * 4)} />);
  }

  return (
    <div ref={background} className="background">
      {dinos}
    </div>
  );
}

export default Background;
