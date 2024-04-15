const circleStyle = {
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  backgroundColor: "red",
  color: "white",
  display: "flex",
  justifyContent: "center",
  position: "relative",
  top: "20px",
  left: "20px",
  alignItems: "center",
  fontWeight: "bold",
  fontFamily: "Arial, sans-serif", // Cambia 'Arial' por la fuente que desees
  fontSize: "90%", // Tamaño de fuente ajustable
};

const CircleNumb = ({ number }) => {
  console.log(number);
  return (
    <>
      <div style={circleStyle}>{number}</div>
    </>
  );
};

export default CircleNumb;
