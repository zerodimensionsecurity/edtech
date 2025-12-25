"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { ChevronDown, Menu, X, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: Array<{
    label: string;
    hasDropdown?: boolean;
    isNew?: boolean;
    icon?: string;
    href?: string;
  }> = [
    { label: "Business", hasDropdown: true },
    { label: "Hackers", hasDropdown: true },
    { label: "National CTF", isNew: true },
    { label: "Bounties", icon: "⚔️" },
    { label: "Audits", icon: "📋" },
    { label: "Blogs", href: "/blogs" },
    { label: "Courses", href: "/courses" },
    { label: "Contacts" },
   
    
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-xl">H</span>
            </div>
            <span className="font-bold text-xl text-foreground">HackenProof</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors rounded-lg hover:bg-secondary"
                >
                  {item.icon && <span className="text-xs">{item.icon}</span>}
                  {item.label}
                  {item.isNew && (
                    <span className="text-[10px] bg-accent text-accent-foreground px-1.5 py-0.5 rounded-full font-semibold uppercase">
                      New
                    </span>
                  )}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href="#"
                  className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors rounded-lg hover:bg-secondary"
                >
                  {item.icon && <span className="text-xs">{item.icon}</span>}
                  {item.label}
                  {item.isNew && (
                    <span className="text-[10px] bg-accent text-accent-foreground px-1.5 py-0.5 rounded-full font-semibold uppercase">
                      New
                    </span>
                  )}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
              )
            )}
          </nav>


          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link href="/auth">
            <Button className=" cursor-pointer">Login</Button>
            </Link>
            <button className="hidden lg:flex w-10 h-10 rounded-full border border-border items-center justify-center hover:bg-secondary transition-colors">
              
              <User className="w-5 h-5 text-foreground" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-lg border border-border flex items-center justify-center"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) =>
                item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-3 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      {item.icon && <span>{item.icon}</span>}
                      {item.label}
                    </span>
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href="#"
                    className="flex items-center justify-between px-3 py-3 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      {item.icon && <span>{item.icon}</span>}
                      {item.label}
                      {item.isNew && (
                        <span className="text-[10px] bg-accent text-accent-foreground px-1.5 py-0.5 rounded-full font-semibold uppercase">
                          New
                        </span>
                      )}
                    </span>
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
