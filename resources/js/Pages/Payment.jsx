import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";
import { useSelector } from "react-redux";
import { usePDF } from "react-to-pdf";

const payment = ({ data, products, user }) => {
  const cart = useSelector((state) => state.cart.data);
  const { toPDF, targetRef } = usePDF({
    filename: "invoice.pdf",
  });

  return (
    <div className="grid grid-cols-4">
      <div className="mx-auto p-16 col-span-3" ref={targetRef}>
        <div className="flex items-center justify-between mb-8 px-3">
          <div>
            <span className="text-2xl font-bold">Invoice</span>
            <br />
            <span>Date</span>:{" "}
            {new Date().getDay() +
              " " +
              new Intl.DateTimeFormat("id-ID", { month: "long" }).format(
                new Date()
              ) +
              " " +
              new Date().getFullYear()}
            <br />
          </div>
          <div className="text-right">
            <h1 className="text-4xl font-bold">AeroStreet</h1>
          </div>
        </div>

        <div className="mb-8 px-3">
          {cart &&
            cart.map((item) => {
              const product = products.find(
                (product) => product.id === item.id
              );

              return (
                <div className="flex justify-between my-2">
                  <div className="flex gap-2">
                    <p>{product.name}</p>
                    <Badge variant={"secondary"}>{item.qty}</Badge>
                  </div>

                  <p>
                    {(product.price * item.qty).toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    })}
                  </p>
                </div>
              );
            })}
        </div>

        <div className="border border-t-2 border-gray-200 mb-8 px-3"></div>

        <div className="mb-8 px-3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            aliquam vestibulum elit, id rutrum sem lobortis eget. In a massa et
            leo vehicula dapibus. In convallis ut nisi ut vestibulum. Integer
            non feugiat tellus. Nullam id ex suscipit, volutpat sapien
            tristique, porttitor sapien.
          </p>
        </div>

        <div className="flex justify-between items-center mb-4 bg-primary text-white px-3 py-2">
          <div>Nama</div>
          <div className="text-right font-medium">{user.name}</div>
        </div>
        <div className="flex justify-between items-center mb-4 bg-primary text-white px-3 py-2">
          <div>Metode Pembayaran</div>
          <div className="text-right font-medium">{data && data.payment}</div>
        </div>
        <div className="flex justify-between items-center mb-4 bg-primary text-white px-3 py-2">
          <div>No.Rekening / e-wallet</div>
          <div className="text-right font-medium">{data && data.phone}</div>
        </div>

        <div className="flex justify-between items-center mb-2 px-3">
          <div className="text-2xl leading-none">
            <span className="font-bold">Total</span>:
          </div>
          <div className="text-2xl text-right font-medium">
            {data &&
              data.total.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              })}
          </div>
        </div>

        <div className="mb-8 mt-20 text-4xl text-center px-3">
          <span>Thank You!</span>
        </div>
      </div>

      <div className="border-l border-border min-h-screen h-full px-5 relative">
        <div className="mt-20">
          <Link href="/">
            <Button variant="outline" className="top-5 right-5 absolute" onClick={(e) => {
              e.stopPropagation();
              localStorage.removeItem("cart")
            }}>
              X
            </Button>
          </Link>

          <h1 className="font-medium text-xl mb-5">
            Silahkan Unduh invoice anda
          </h1>

          <Button
            onClick={() => {
              toPDF();
            }}
            className="w-full"
          >
            Download
          </Button>
        </div>
      </div>
    </div>
  );
};

export default payment;
