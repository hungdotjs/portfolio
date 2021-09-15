import './character.scss';

const red =
  'https://res.cloudinary.com/hungtn/image/upload/v1631730379/portfolio/red_stkrsk.png';
const blue =
  'https://res.cloudinary.com/hungtn/image/upload/v1631730378/portfolio/blue_dpmuzx.png';
const yellow =
  'https://res.cloudinary.com/hungtn/image/upload/v1631730378/portfolio/yellow_kvsjxt.png';
const green =
  'https://res.cloudinary.com/hungtn/image/upload/v1631730378/portfolio/green_yrctuz.png';

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
