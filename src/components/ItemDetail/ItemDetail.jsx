import "./ItemDetail.css";
import ItemPhoto from "./ItemPhoto";

const ItemDetail = ({ id, name, dimensions, neighbor, corner }) => {
  return (
    <div className="itemDetail">
      <h4 className="houseName">{name}</h4>
      <p className="houseInfo">
        <label> Dimensiones: </label>
        {dimensions} <br />
        <label> Esquina: </label>
        {corner ? "si" : "no"} <br />
        <label> Vecinos: </label>
        {neighbor.length > 0 ? neighbor.length : "SIN LOTES VECINOS"}
        <br />
      </p>
      <h6 className="houseCode">
        cod: {id}
        <ItemPhoto id={id} />
      </h6>
    </div>
  );
};

export default ItemDetail;
