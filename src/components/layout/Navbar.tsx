import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { programs } from "@/lib/programs-data";
import nexithLogo from "@/assets/nexith-ai-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + "/");
  const isProgramsActive = location.pathname === "/programs" || location.pathname.startsWith("/programs/");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className={`fixed top-[var(--announcement-height,0px)] left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-effect" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="https://www.nexithai.com/" className="flex items-center space-x-3 group">
            <img src={nexithLogo} alt="Nexith AI" className="h-10 w-auto dark:brightness-100 brightness-0" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`https://www.nexithai.com${link.path}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-muted`}
              >
                {link.name}
              </a>
            ))}
            
            <div 
              className="relative"
              onMouseEnter={() => setIsProgramsOpen(true)}
              onMouseLeave={() => setIsProgramsOpen(false)}
            >
              <a
                href="https://www.nexithai.com/programs"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                  isProgramsActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                Programs
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProgramsOpen ? "rotate-180" : ""}`} />
              </a>
              
              {/* Dropdown Menu */}
              {isProgramsOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="bg-card border border-border/50 rounded-xl shadow-xl p-2 min-w-[280px] animate-fade-in">
                    <div className="py-1">
                      <a
                        href="https://www.nexithai.com/programs"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                          All
                        </div>
                        <div>
                          <p className="font-medium text-foreground group-hover:text-primary transition-colors">All Programs</p>
                          <p className="text-xs text-muted-foreground">View all our programs</p>
                        </div>
                      </a>
                      
                      <div className="h-px bg-border/50 my-2" />
                      
                      {programs.map((program) => (
                        <a
                          key={program.id}
                          href={`https://www.nexithai.com/programs/${program.id}`}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                            {program.shortTitle.slice(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">{program.title}</p>
                            <p className="text-xs text-muted-foreground">{program.duration} • {program.level}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>


            <Button asChild className="gradient-primary hover:opacity-90 ml-2 shadow-lg hover:shadow-xl transition-shadow">
              <a href="https://scholarship.nexithai.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Apply for Scholarship
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            
            {/* Mobile Menu Button */}
            <button
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isOpen && (
          <div 
            className="md:hidden fixed inset-0 top-[calc(var(--announcement-height,0px)+72px)] z-40 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden fixed left-0 right-0 top-[calc(var(--announcement-height,0px)+72px)] z-50 bg-background border-t border-border shadow-xl animate-slide-down max-h-[calc(100vh-var(--announcement-height,0px)-72px)] overflow-y-auto">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={`https://www.nexithai.com${link.path}`}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors text-muted-foreground hover:text-foreground hover:bg-muted`}
                  >
                    {link.name}
                  </a>
                ))}
                
                {/* Mobile Programs Section */}
                <div className="px-4 py-3 bg-muted/30 rounded-lg">
                  <a
                    href="https://www.nexithai.com/programs"
                    onClick={() => setIsOpen(false)}
                    className={`block font-medium mb-3 ${isProgramsActive ? "text-primary" : "text-foreground"}`}
                  >
                    Programs
                  </a>
                  <div className="pl-4 space-y-1 border-l-2 border-primary/30">
                    {programs.map((program) => (
                      <a
                        key={program.id}
                        href={`https://www.nexithai.com/programs/${program.id}`}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {program.title}
                      </a>
                    ))}
                  </div>
                </div>
                
                <Button asChild className="gradient-primary hover:opacity-90 w-full mt-4">
                  <a href="https://scholarship.nexithai.com" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2">
                    Apply for Scholarship
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
