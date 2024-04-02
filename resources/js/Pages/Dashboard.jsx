import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";

export default function Dashboard({ auth, products }) {
  const { data, setData, post, errors, progress } = useForm({
    name: "",
    price: "",
    image: "",
  });
  const submit = (e) => {
    e.preventDefault();

    post("/product", data);
    setData({ name: "", price: "", image: "" });
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      <header className="flex justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" className="h-8 gap-1">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add Product
              </span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Tambah Product</DialogTitle>
              <form onSubmit={submit} method="post">
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
                    >
                      Tambahkan
                    </Button>
                  </DialogClose>
                </div>
              </form>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </header>

      <main className="mt-5">
        <Card>
          <CardHeader className={"px-6 py-3"}>
            <CardTitle>Products</CardTitle>
            <CardDescription>
              Manage your products and view their sales performance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden w-[100px] sm:table-cell">
                    <span className="sr-only">Image</span>
                  </TableHead>
                  <TableHead>Nama Produk</TableHead>
                  <TableHead className="hidden md:table-cell">Price</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Ditambah
                  </TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="hidden sm:table-cell">
                      <img src="/a.webp" alt="" />
                    </TableCell>
                    <TableCell className="font-medium">
                      {product.name}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      })}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {product.created_at.split("T")[0]}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            aria-haspopup="true"
                            size="icon"
                            variant="ghost"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-500 focus:text-red-500">
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </AuthenticatedLayout>
  );
}
