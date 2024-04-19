import video from "../../assets/herovideo.mp4";
import "./Hero.css";
const Hero = () => {
  return <video className="videoHero" src={video} autoPlay loop muted />;
};

export default Hero;
