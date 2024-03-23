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
import Kasir from "@/Components/Kasir";

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
          <Kasir products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
