import Navbar from "@/Components/Navbar";
import { Button } from "@/Components/ui/button";
import { Badge } from "@/Components/ui/badge.jsx";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImg,
  CardTitle,
} from "@/Components/ui/card";
import CartItem from "@/Components/CartItem";
import { Input } from "@/Components/ui/input";
import { ScrollArea } from "@/Components/ui/scroll-area";
import { useEffect } from "react";

const data = [1, 2, 3, 4, 5, 6, 1, 1, 2, 2, 2, 2, 2];

const Home = ({ products }) => {
  return (
    <div>
      <Navbar />

      <div className="flex">
        <div className="w-3/4">
          <div className="grid grid-cols-4 p-2 gap-2 ">
            {products.map((product) => (
              <Card key={product.id}>
                <CardHeader>
                  <CardImg src={product.image} />
                </CardHeader>
                <CardContent>
                  <CardTitle>{product.name}</CardTitle>
                </CardContent>
                <CardFooter>
                  <CardDescription className="text-base">
                    {product.price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    })}
                  </CardDescription>
                  <Button className="px-10">add</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="w-1/4 border-l border-border p-5 min-h-screen fixed z-10 bg-white right-0">
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
              <h1 className="text-primary font-bold text-2xl mt-5 mb-2">
                Total
              </h1>
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
        </div>
      </div>
    </div>
  );
};

export default Home;
