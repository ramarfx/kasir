import CartItem from "./CartItem";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

const Kasir = ({products}) => {
  return (
    <>
      <div>
        <h1 className="text-primary font-bold text-2xl mb-5">Keranjang</h1>

        <ScrollArea className=" h-40 border border-border">
          <div className="flex flex-col gap-3 p-4">
            <CartItem title="Ikan goreng" quantity={1} price={599000} />
            <CartItem title="Ikan goreng" quantity={1} price={599000} />
            <CartItem title="Ikan goreng" quantity={1} price={599000} />
            <CartItem title="Ikan goreng" quantity={1} price={599000} />
            <CartItem title="Ikan goreng" quantity={1} price={599000} />
            <CartItem title="Ikan goreng" quantity={1} price={599000} />
            <CartItem title="Ikan goreng" quantity={1} price={599000} />
          </div>
        </ScrollArea>

        <div>
          <h1 className="text-primary font-bold text-2xl mt-5 mb-2">Total</h1>
          <p className="font-bold text-lg">Rp. 599.000</p>
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

export default Kasir;
