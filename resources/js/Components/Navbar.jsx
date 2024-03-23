import { Link } from "@inertiajs/react";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <header className="w-full flex border-b border-border sticky top-0 z-50 bg-white">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">

        <div className="mr-4 flex items-center">
          <h1 className="text-xl font-bold mr-12">MyKasir</h1>

          <nav className="flex gap-6 text-sm">
            <Link href="/">Home</Link>
            <Link href="/">Product</Link>
            <Link href="/">Cart</Link>
          </nav>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
