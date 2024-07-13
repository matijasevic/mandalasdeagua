import "./ItemListContainer.css";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch(
      "https://mandalas-backend.netlify.app/.netlify/functions/server/listngs"
    )
      .then((result) => result.json())
      .then((data) => {
        setListings(data);
      })
      .catch((err) => {
        console.log("Error consumiendo API: " + err);
      });
  }, []);

  return (
    <div className="itemListContainer">
      {listings.map((item) => (
        <ItemDetailContainer key={item.id} item={item} />
      ))}
    </div>
  );
};
export default ItemListContainer;
