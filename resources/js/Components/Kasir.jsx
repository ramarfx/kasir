import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { useEffect, useState } from "react";
import Radio from "./Radio";
import { useForm } from "@inertiajs/react";

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

  // function handleChange(e) {
  //   const key = e.target.name;
  //   const value = e.target.value;
  //   setValues((values) => ({
  //     ...values,
  //     [key]: value,
  //   }));
  // }

  const { post, data, setData } = useForm();

  function handleSubmit(e) {
    e.preventDefault();
    post("/payment", data);
  }

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    setData('total', totalPrice);
  }, [totalPrice]);

  return (
    <>
      <div>
        <h1 className="text-primary font-bold text-2xl mb-5">Keranjang</h1>

        {cart.length > 0 ? (
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
        ) : (
          <div className="h-40 text-primary/50 text-sm">pilih barang yang ingin anda beli</div>
        )}

        <div>
          <h1 className="text-primary font-bold text-2xl mt-5 mb-2">Total</h1>
          <p className="font-bold text-lg">
            {totalPrice.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
            })}
          </p>
        </div>

        <form method="post" action={route("dashboard")} onSubmit={handleSubmit}>
          <h1 className="text-primary font-bold text-2xl mt-5 mb-2">
            Pembayaran
          </h1>

          <div className="grid grid-cols-3 gap-2 mb-4">
            <Radio
              name={"payment"}
              value={"Cash"}
              onChange={(e) => setData("payment", e.target.value)}
            />
            <Radio
              name={"payment"}
              value={"ShopeePay"}
              onChange={(e) => setData("payment", e.target.value)}
            />
            <Radio
              name={"payment"}
              value={"Gopay"}
              onChange={(e) => setData("payment", e.target.value)}
            />
            <Radio
              name={"payment"}
              value={"DANA"}
              onChange={(e) => setData("payment", e.target.value)}
            />
            <Radio
              name={"payment"}
              value={"OVO"}
              onChange={(e) => setData("payment", e.target.value)}
            />
            <Radio
              name={"payment"}
              value={"Bank"}
              onChange={(e) => setData("payment", e.target.value)}
            />
          </div>

          <Input
            name="phone"
            type="number"
            placeholder={"Masukkan Nomor Telepon E-Wallet"}
            value={data.phone}
            onChange={(e) => setData("phone", e.target.value)}
          />

          <div className="mt-10">
            <Button className="w-full" type="submit">
              Bayar
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TableCart;
