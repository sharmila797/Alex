import TypeIt from "typeit-react";

const TypingAnimation = () => {
  return (
    <span className="type-it">
      <TypeIt
        options={{
          speed: 200,
          loop: true,
          strings: ["Sociologist", "Facilitator","Writer","Speaker","Coach","Content Creator","Technopreneur"],
          breakLines: false,
          
        }}
      />
    </span>
  );
};
export default TypingAnimation;
