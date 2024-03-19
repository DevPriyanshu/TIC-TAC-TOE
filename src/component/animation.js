import Confetti from "react-confetti";

function Animation() {
  const fullScreenConfettiStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };
  return <Confetti style={fullScreenConfettiStyle} />;
}

export default Animation;
