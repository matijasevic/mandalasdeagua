import "./ItemListContainer.css";
import LISTINGS from "../../MOCK";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const ItemListContainer = () => {
  console.log(LISTINGS);
  return (
    <div className="itemListContainer">
      {LISTINGS.map((item) => (
        <ItemDetailContainer key={item.id} item={item} />
      ))}
    </div>
  );
};
export default ItemListContainer;
