import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = ({ item }) => {
  const { id, name, dimensions, neighbor, corner } = item;
  return (
    <div className="containerIDC">
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
