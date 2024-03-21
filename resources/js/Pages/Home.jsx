import Navbar from "@/Components/Navbar";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card";


const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="flex">
        <div className="grid grid-cols-4 p-2 gap-2 w-3/4">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <Button>add</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="w-1/4 border-l border-border/40 p-5">
          <h1 className="text-primary font-bold text-2xl">Keranjang</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
