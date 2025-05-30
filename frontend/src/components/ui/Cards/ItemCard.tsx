import { ItemFactura } from "@/models/Factura";
import CustomCard from "./CustomCard";
import { currencyFormat } from "@/utils";

interface ItemCardProps {
  item: ItemFactura;
}

const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <CustomCard title={item.descripcion}>
      <div className="w-full relative mb-5 rounded-xl overflow-hidden items-center flex justify-center">
        <h3 className="text-3xl">{currencyFormat(item.precio)}</h3>
      </div>
    </CustomCard>
  );
};

export default ItemCard;
