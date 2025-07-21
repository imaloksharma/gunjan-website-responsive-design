import { Mail, Phone, MapPin, Building, ExternalLink } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold" />
                <div>
                  <p className="text-sm">gunjan.rehani@gmail.com</p>
                  <p className="text-sm">gunjan.rehani@nitdelhi.ac.in</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold" />
                <p className="text-sm">+91-9911220546</p>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gold" />
                <p className="text-sm">H.No.-42, 4 Marla, Sonipat-131001, Haryana, INDIA</p>
              </div>
            </div>
          </div>

          {/* Institution */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold">Institution</h3>
            <div className="flex items-start space-x-3">
              <Building className="h-5 w-5 text-gold mt-1" />
              <div>
                <p className="font-medium">Assistant Professor</p>
                <p className="text-sm opacity-90">Department of Computer Science & Engineering</p>
                <p className="text-sm opacity-90">National Institute of Technology Delhi</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold">Quick Links</h3>
            <div className="space-y-2">
              <a 
                href="https://nitdelhi.ac.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm hover:text-gold transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span>NIT Delhi</span>
              </a>
              <a 
                href="https://nitdelhi.ac.in/department/computer-science-engineering" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm hover:text-gold transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span>CSE Department</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-light mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">
            © {new Date().getFullYear()} Dr. Gunjan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};