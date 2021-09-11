import blue from '../../assets/images/blue.png';
import red from '../../assets/images/red.png';
import yellow from '../../assets/images/yellow.png';
import green from '../../assets/images/green.png';

import './character.scss';

const colors = [blue, red, yellow, green];

function Character(props) {
  return (
    <div
      className="character"
      style={{
        transform: `scale(${props.scale || 1.5})`,
      }}
    >
      <img
        className="character__spritesheet"
        src={colors[props.index]}
        alt="character"
      />
    </div>
  );
}

export default Character;
