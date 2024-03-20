import Card from "@/Components/Card";
import Navbar from "@/Components/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />

            <div className="flex">
                <div className="grid grid-cols-4 p-2 gap-2 w-3/4">
                    <Card image={"/a.webp"} />
                    <Card image={"/a.webp"} />
                    <Card image={"/a.webp"} />
                    <Card image={"/a.webp"} />
                    <Card image={"/a.webp"} />
                    <Card image={"/a.webp"} />
                    <Card image={"/a.webp"} />
                    <Card image={"/a.webp"} />
                </div>

                <div className="w-1/4 border-l p-5">
                    <h1 className="text-primary font-bold text-2xl">Keranjang</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;
