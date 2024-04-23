import { useState } from "react";
import "./CircleNumb.css";
const CircleNumb = () => {
  const [number, setNumber] = useState(5);
  return <div className="circleNumb">{number}</div>;
};

export default CircleNumb;
