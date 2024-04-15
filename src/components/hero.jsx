import video from "../assets/herovideo.mp4";

const videoStyle = {
  width: "100%",
  height: "60vh",
  objectFit: "cover",
  objectPosition: "center",
  position: "relative",
};

const Hero = () => {
  return <video src={video} autoPlay loop muted style={videoStyle} />;
};

export default Hero;
