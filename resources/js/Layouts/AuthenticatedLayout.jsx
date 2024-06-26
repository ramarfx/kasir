import Navbar from "@/Components/Navbar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/Components/ui/tooltip";
import { Link, usePage } from "@inertiajs/react";
import {
  Home,
  Package2,
  Package2Icon,
  ShoppingCart,
  User2,
  Users2,
  UsersRound,
} from "lucide-react";
import { useEffect } from "react";
import { Toaster, toast } from "sonner";

export default function Authenticated({ user, children }) {
  const { flash } = usePage().props;

  useEffect(() => {
    {
      flash.success && toast.success(flash.success);
    }
  }, [flash]);
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Navbar user={user} />
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Home />
                  <span className="sr-only">Dashboard</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Dashboard</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <ShoppingCart />
                  <span className="sr-only">Product</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Product</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Users2 />
                  <span className="sr-only">Users</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Users</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>

      <main className="ml-14 flex-1 px-10 pt-5">{children}</main>
      <Toaster />
    </div>
  );
}
