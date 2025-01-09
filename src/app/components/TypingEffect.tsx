import { TypeAnimation } from 'react-type-animation';

const TypingEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'student',
        3000,
        'programmer',
        3000,
        'teaching assistant',
        3000,
        'volleyball player',
        3000,
        'climber',
        3000
      ]}
      wrapper="span"
      speed={50}
      className="text-[40px] text-blue-600 font-bold font-sans"
      repeat={Infinity}
    />
  );
};

export default TypingEffect;