import { Badge } from "./ui/badge";

const CartItem = ({ title, quantity, price }) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-primary font-bold text-base flex gap-2 items-center">
        {title} <Badge variant={"secondary"}>{quantity}</Badge>
      </h1>
      <p className="text-primary/80 text-sm">Rp.{price}</p>
    </div>
  );
};

export default CartItem;
