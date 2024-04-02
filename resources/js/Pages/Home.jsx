import Navbar from "@/Components/Navbar";
import { Button } from "@/Components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImg,
  CardTitle,
} from "@/Components/ui/card";
import { useDispatch } from "react-redux";
import { addtoCart } from "@/redux/slices/cartSlice";
import TableCart from "@/Components/Kasir";

const Home = ({ user, products }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar user={user} />

      <div className="flex">
        <div className="w-3/4">
          <div className="grid grid-cols-4 p-2 gap-2 ">
            {products.map((product) => (
              <Card key={product.id}>
                <CardHeader>
                  {product.image ? (
                    <CardImg
                      src={`http://localhost:8000/storage/${product.image}`}
                    />
                  ) : (
                    <div className="w-full h-36 bg-primary text-white flex items-center justify-center">
                      <p>Tidak ada gambar</p>
                    </div>
                  )}
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
                  <Button
                    className="px-10"
                    onClick={() =>
                      dispatch(addtoCart({ id: product.id, qty: 1 }))
                    }
                  >
                    add
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="w-1/4 border-l border-border p-5 min-h-screen fixed z-10 bg-white right-0">
          <TableCart products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
