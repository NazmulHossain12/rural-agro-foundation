import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, Globe, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-background">Rural Agro Foundation</h3>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Empowering rural communities through sustainable agriculture, farmer training, and socio-economic development in Bangladesh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-background">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Programs", path: "/programs" },
                { name: "Impact Stories", path: "/impact" },
                { name: "Get Involved", path: "/get-involved" },
                { name: "News & Updates", path: "/news" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-background">Our Programs</h4>
            <ul className="space-y-2">
              {[
                "Sustainable Agriculture",
                "Farmer Training",
                "Food Security",
                "Climate-Resilient Farming",
                "Women Empowerment",
              ].map((program) => (
                <li key={program}>
                  <Link
                    to="/programs"
                    className="text-background/70 hover:text-background text-sm transition-colors"
                  >
                    {program}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-background">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-primary" />
                <a
                  href="mailto:info@ruralagrofoundation.org"
                  className="text-background/70 hover:text-background text-sm transition-colors"
                >
                  info@ruralagrofoundation.org
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-primary" />
                <div className="text-background/70 text-sm">
                  <a href="tel:+8801715588168" className="hover:text-background block transition-colors">
                    ০১৭১৫৫৮৮১৬৮
                  </a>
                  <a href="tel:+8801719753431" className="hover:text-background block transition-colors">
                    ০১৭১৯৭৫৩৪৩১
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-4 h-4 mt-0.5 text-primary" />
                <a
                  href="https://www.ruralagrofoundation.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-background text-sm transition-colors"
                >
                  www.ruralagrofoundation.org
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Linkedin className="w-4 h-4 mt-0.5 text-primary" />
                <a
                  href="https://www.linkedin.com/company/rural-agro-foundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-background text-sm transition-colors"
                >
                  Rural Agro Foundation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Rural Agro Foundation. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-background/60">
                Committed to Transparency & Accountability
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
