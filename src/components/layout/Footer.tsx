import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import NewsletterForm from "@/components/forms/NewsletterForm";
import nexithLogo from "@/assets/nexith-ai-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center space-x-3 group">
              <img src={nexithLogo} alt="Nexith AI" className="h-10 w-auto brightness-100" />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Empowering 100,000 African youth with AI literacy and skills for a technology-driven future by 2030.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center text-background/70 hover:bg-primary hover:text-primary-foreground transition-all duration-200">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center text-background/70 hover:bg-primary hover:text-primary-foreground transition-all duration-200">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/company/nexithai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center text-background/70 hover:bg-primary hover:text-primary-foreground transition-all duration-200">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center text-background/70 hover:bg-primary hover:text-primary-foreground transition-all duration-200">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-background/70 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-background/70 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/70 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-background/70 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                  Programs
                </Link>
              </li>
              <li>
                <a href="https://scholarship.nexithai.com" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                  Apply for Scholarship
                </a>
              </li>
              <li>
                <Link to="/blog" className="text-background/70 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-background/70 text-sm">
                <div className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center">
                  <Mail className="h-4 w-4" />
                </div>
                <span>info@nexith.ai</span>
              </li>
              <li className="flex items-center space-x-3 text-background/70 text-sm">
                <div className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center">
                  <Phone className="h-4 w-4" />
                </div>
                <span>+234 9079938162</span>
              </li>
              <li className="flex items-start space-x-3 text-background/70 text-sm">
                <div className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Newsletter</h3>
            <p className="text-background/70 text-sm mb-4 leading-relaxed">
              Subscribe to get updates on AI courses and opportunities.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm">
            © {currentYear} Nexith AI Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/terms" className="text-background/40 hover:text-background/70 text-xs transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="text-background/40 hover:text-background/70 text-xs transition-colors">Privacy Policy</Link>
          </div>
          <p className="text-background/40 text-xs">
            Democratizing AI Education Across Africa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
