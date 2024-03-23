import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { useEffect, useState } from "react";

const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);


  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }, [products, cart]);

  console.dir(totalPrice);

  return (
    <>
      <div>
        <h1 className="text-primary font-bold text-2xl mb-5">Keranjang</h1>

        <ScrollArea className=" h-40 border border-border">
          <div className="flex flex-col gap-3 p-4">
            {products.length > 0 &&
              cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );

                return (
                  <CartItem
                    title={product.name}
                    key={item.id}
                    quantity={item.qty}
                    price={product.price}
                  />
                );
              })}
          </div>
        </ScrollArea>

        <div>
          <h1 className="text-primary font-bold text-2xl mt-5 mb-2">Total</h1>
          <p className="font-bold text-lg">
            {
              totalPrice.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              })}
          </p>
        </div>

        <div>
          <h1 className="text-primary font-bold text-2xl mt-5 mb-2">
            Pembayaran
          </h1>

          <div className="grid grid-cols-3 gap-2 mb-4">
            <Button variant="outline">Cash</Button>
            <Button variant="outline">ShopeePay</Button>
            <Button variant="outline">Gopay</Button>
            <Button variant="outline">DANA</Button>
            <Button variant="outline">OVO</Button>
            <Button variant="outline">Bank</Button>
          </div>

          <Input
            type="number"
            placeholder={"Masukkan Nomor Telepon E-Wallet"}
          />
        </div>

        <div className="mt-10">
          {/* <h1 className="text-primary font-bold text-2xl mt-5">Bayar</h1> */}
          <Button className="w-full">Bayar</Button>
        </div>
      </div>
    </>
  );
};

export default TableCart;
