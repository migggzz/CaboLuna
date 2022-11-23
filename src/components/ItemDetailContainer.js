import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";
import { Items } from "../mocks/item.mock";
import { Loading } from "./Loading";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve) =>
      // Simulacion de llamada a una API
      setTimeout(() => resolve(Items.find((item) => item.id === id)), 1000)
    ).then((data) => setItem(data));
  }, [id]);

  if (!item) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center items-center ">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
