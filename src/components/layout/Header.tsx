import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../public/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Impact", path: "/impact" },
  { name: "Get Involved", path: "/get-involved" },
  { name: "News", path: "/news" },
  { name: "Contact", path: "/contact" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div>
              <img src={Logo} alt="Rural Agro Foundation" className=" h-12" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                Rural Agro Foundation
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  location.pathname === link.path
                    ? "text-primary bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted",
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex gap-2">
            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="default" size="lg" asChild>
                <Link to="/get-involved">Donate Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:bg-muted rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 text-base font-medium rounded-md transition-colors",
                    location.pathname === link.path
                      ? "text-primary bg-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted",
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Button variant="default" size="lg" className="w-full" asChild>
                  <Link to="/get-involved" onClick={() => setIsMenuOpen(false)}>
                    Donate Now
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
