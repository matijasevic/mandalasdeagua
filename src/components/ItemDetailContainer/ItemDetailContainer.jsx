import "./ItemDetailContainer.css";
import "../ItemDetail/ItemDetail";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ item }) => {
  const { id, name, dimensions, neighbor, corner } = item;
  return (
    <div className="itemDetailContainer">
      <div className="houseShape"></div>
      <div className="houseChinShape"></div>
      <ItemDetail
        id={id}
        name={name}
        dimensions={dimensions}
        neighbor={neighbor}
        corner={corner}
      />
    </div>
  );
};
export default ItemDetailContainer;
