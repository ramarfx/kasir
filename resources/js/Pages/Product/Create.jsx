import InputLabel from "@/Components/InputLabel";
import { Button } from "@/Components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { useForm } from "@inertiajs/react";

const CreteProductPage = () => {
  const { data, setData, post, progress } = useForm({
    name: "",
    harga: null,
    image: null,
  });

  const submit = (e) => {
    e.preventDefault();
    post(route("product.store"));
  };

  return (
    <DialogHeader>
      <DialogTitle>Tambah Product</DialogTitle>
      <DialogDescription>
        <form onSubmit={submit}>
          <div className="mt-4">
            <InputLabel htmlFor="name" value="Nama Produk" />

            <Input
              id="text"
              type="text"
              name="name"
              value={data.name}
              className="mt-1 block w-full"
              autoComplete="username"
              autoFocus
              onChange={(e) => setData("name", e.target.value)}
            />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="harga" value="Harga" />

            <Input
              id="harga"
              type="number"
              name="harga"
              value={data.harga}
              className="mt-1 block w-full"
              autoComplete="username"
              onChange={(e) => setData("harga", e.target.value)}
            />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="email" value="Gambar" />
            <input
              type="file"
              name="image"
              value={data.image}
              // onChange={(e) => setData("image", e.target.files[0])}
            />
          </div>

          <div className="mt-4">
            <Button type="submit" className="w-full">
              Tambahkan
            </Button>
          </div>
        </form>
      </DialogDescription>
    </DialogHeader>
  );
};

export default CreteProductPage;
