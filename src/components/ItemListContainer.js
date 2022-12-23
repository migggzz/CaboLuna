import { useGetItem } from "../hooks/useGetItem";
import { ItemList } from "./ItemList";
import { Loading } from "./Loading";
//inserto comentario para poder hacer commit

const ItemListContainer = () => {
  const items = useGetItem();

  if (!items) {
    return <Loading />;
  }

  return (
    <div className="h-full">
      <ItemList products={items} />
    </div>
  );
};

export default ItemListContainer;