import InputLabel from "@/Components/InputLabel";
import { Button } from "@/Components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";

const CreteProductPage = () => {
  return (
    <DialogHeader>
      <DialogTitle>Tambah Product</DialogTitle>
      <DialogDescription>
        <form action="">
          <div className="mt-4">
            <InputLabel htmlFor="name" value="Nama Produk" />

            <Input
              id="text"
              type="text"
              name="name"
              // value={data.email}
              className="mt-1 block w-full"
              autoComplete="username"
              autoFocus
              // onChange={(e) => setData("email", e.target.value)}
              // ref={inputRef}
            />

            {/* <InputError message={errors.email} className="mt-2" /> */}
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="harga" value="Harga" />

            <Input
              id="harga"
              type="text"
              name="harga"
              // value={data.email}
              className="mt-1 block w-full"
              autoComplete="username"
              autoFocus
              // onChange={(e) => setData("email", e.target.value)}
              // ref={inputRef}
            />

            {/* <InputError message={errors.email} className="mt-2" /> */}
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="email" value="Gambar" />
            <input type="file" name="image" id="" />
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
