import "./ItemPhoto.css";

const ItemPhoto = ({ id }) => {
  const handleShowPhoto = () => {
    console.log(id);
  };
  return <div onClick={handleShowPhoto} className="itemPhoto"></div>;
};

export default ItemPhoto;
