import "./ItemDetail.css";

const ItemDetail = ({ id, name, dimensions, neighbor, corner }) => {
  return (
    <div className="itemDetail">
      <h4 className="houseName">{name}</h4>
      <p className="houseInfo">
        Dimensiones: {dimensions} <br />
        Esquina: {corner ? "si" : "no"} <br />
        {neighbor.length > 0
          ? neighbor.length + " vecinos"
          : "SIN LOTES VECINOS"}
        <br />
      </p>
      <h6 className="houseCode">cod: {id}</h6>
    </div>
  );
};

export default ItemDetail;
