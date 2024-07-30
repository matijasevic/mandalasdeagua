import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch(
      "https://mandalas-backend.netlify.app/.netlify/functions/server/listings"
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
    //   <div className="grid text-center">
    //   {listings.map((item, index) => (
    //     <ItemDetailContainer item={item} key={index} />
    //   ))}
    // </div>
    <div className="container text-center">
      {listings.map((item, index) => {
        if (index % 4 === 0) {
          return (
            <div key={index} className="row m-5">
              <div className="col">
                <ItemDetailContainer item={listings[index]} />
              </div>
              {listings[index + 1] && (
                <div className="col">
                  <ItemDetailContainer item={listings[index + 1]} />
                </div>
              )}
              {listings[index + 2] && (
                <div className="col">
                  <ItemDetailContainer item={listings[index + 2]} />
                </div>
              )}
              {listings[index + 3] && (
                <div className="col">
                  <ItemDetailContainer item={listings[index + 3]} />
                </div>
              )}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default ItemListContainer;
