import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLink } from "react-router-dom";
import logo from "../../assets/hashimlogo.png";

const Navbar = () => {
  return (
    <div className="">
      <header className="sticky top-0 flex h-16 items-center gap-4  bg-background px-16 md:px-16">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <div className="flex items-center gap-2 text-black font-bold">
            <NavLink to="/">
              <img src={logo} alt="Logo" className="h-12" />
            </NavLink>
          </div>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-[#fdf3df]">
            <nav className="grid gap-6 text-lg font-medium">
              <div className="flex items-center gap-2 text-black font-bold">
                <img src={logo} alt="Logo" className="h-8 w-28" />
              </div>
              <SheetClose asChild>
                <NavLink
                  to="/"
                  className="hover:text-foreground text-yellow-950"
                >
                  Home
                </NavLink>
              </SheetClose>
              <SheetClose asChild>
                <NavLink
                  to="/shop"
                  className="text-muted-foreground hover:text-foreground text-yellow-950"
                >
                  Shop
                </NavLink>
              </SheetClose>
              <SheetClose asChild>
                <NavLink
                  to="/contact"
                  className="text-muted-foreground hover:text-foreground text-yellow-950"
                >
                  Contact
                </NavLink>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
        <nav
          id="topnav"
          className="flex font-medium items-center gap-6 md:ml-auto md:gap-2 lg:gap-4 ml-auto flex-1 sm:flex-initial"
        >
          <NavLink
            to="/"
            className="text-foreground transition-colors text-yellow-950 hover:text-foreground"
          >
            Home
          </NavLink>
          <NavLink
            to="/work"
            className="text-foreground transition-colors text-yellow-950 hover:text-foreground"
          >
            Work
          </NavLink>
          <NavLink
            to="/shop"
            className="text-muted-foreground transition-colors text-yellow-950 hover:text-foreground"
          >
            Shop
          </NavLink>
          <NavLink
            to="/contact"
            className="text-muted-foreground transition-colors text-yellow-950 hover:text-foreground"
          >
            Contact
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
