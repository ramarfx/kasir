import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { useForm, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { toast } from "sonner";

const EditProductPage = ({ product }) => {
  const { data, setData, post, errors, progress } = useForm({
    _method: "patch",
    name: product.name,
    price: product.price,
    image: product.image,
  });

  const submit = (e) => {
    e.preventDefault();

    post(route("product.update", product.id));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          variant="outline"
          className="border-none text-start block focus:ring-0 w-full"
        >
          edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tambah Product</DialogTitle>
          <form onSubmit={submit} method="post" encType="multipart/form-data">
            <div className="mt-4">
              <InputLabel htmlFor="name" value="Nama Produk" />

              <Input
                id="text"
                type="text"
                name="name"
                value={data.name || ""}
                className="mt-1 block w-full"
                autoComplete="username"
                autoFocus
                onChange={(e) => setData("name", e.target.value)}
              />
              <InputError message={errors.name} className="mt-2" />
            </div>

            <div className="mt-4">
              <InputLabel htmlFor="price" value="Price" />

              <Input
                id="price"
                type="number"
                name="harga"
                value={data.price || ""}
                className="mt-1 block w-full"
                autoComplete="username"
                onChange={(e) => setData("price", e.target.value)}
              />
              <InputError message={errors.price} className="mt-2" />
            </div>

            <div className="mt-4">
              <InputLabel htmlFor="image" value="Gambar" />
              <Input
                type="file"
                name="image"
                onChange={(e) => setData("image", e.target.files[0])}
              />
              <InputError message={errors.image} className="mt-2" />
            </div>

            <div className="mt-4">
              <DialogClose>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={progress}
                  // onClick={() => toast(flash.success)}
                >
                  Tambahkan
                </Button>
              </DialogClose>
            </div>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EditProductPage;
