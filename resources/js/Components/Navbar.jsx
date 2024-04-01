import { Link } from "@inertiajs/react";
import NavLink from "./NavLink";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { User2 } from "lucide-react";

const Navbar = (props) => {
  const { user } = props;

  console.log(user);

  return (
    <header className="w-full flex border-b border-border sticky top-0 z-50 bg-white">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="mr-4 flex items-center">
          <h1 className="text-xl font-bold mr-12">AeroStreet</h1>

          <nav className="flex gap-6 text-sm">
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
          </nav>
        </div>

        <div className="flex items-center gap-6 text-sm">
          {user ? (
            <div className="flex items-center gap-5">
              <p>{user.name}</p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="p-1.5 rounded-full border border-border">
                    <User2 className="text-primary/70" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="border w-5 rounded-md border-border bg-white">
                  <Link href={route("logout")} method="post" as="button">
                    Log Out
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
