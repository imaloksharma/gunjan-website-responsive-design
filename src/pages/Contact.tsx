import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Building, Calendar, Globe, MessageCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    primary: 'gunjan.rehani@gmail.com',
    secondary: 'gunjan.rehani@nitdelhi.ac.in',
    action: 'mailto:gunjan.rehani@gmail.com'
  },
  {
    icon: Phone,
    label: 'Mobile',
    primary: '+91-9911220546',
    action: 'tel:+919911220546'
  },
  {
    icon: MapPin,
    label: 'Address',
    primary: 'H.No.-42, 4 Marla',
    secondary: 'Sonipat-131001, Haryana, INDIA'
  },
  {
    icon: Building,
    label: 'Institution',
    primary: 'National Institute of Technology Delhi',
    secondary: 'Department of Computer Science & Engineering'
  }
];

const personalInfo = [
  { label: 'Date of Birth', value: 'October 28, 1990' },
  { label: 'Nationality', value: 'Indian' },
  { label: 'Marital Status', value: 'Married' }
];

const officeHours = [
  { day: 'Monday - Friday', time: '9:00 AM - 5:00 PM' },
  { day: 'Consultation Hours', time: 'By Appointment' }
];

const collaborationAreas = [
  'Wireless Sensor Networks Research',
  'Energy-Efficient Computing',
  'IoT Applications and Security',
  'Multi-objective Optimization',
  'Machine Learning in Networks',
  'Doctoral Research Supervision'
];

export const Contact = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Contact Information</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch for research collaborations, academic partnerships, or professional inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Primary Contact */}
            <section>
              <h2 className="text-2xl font-bold text-navy mb-6 flex items-center">
                <MessageCircle className="mr-3 h-6 w-6" />
                Contact Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 group">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg group-hover:shadow-glow transition-all duration-300">
                          <contact.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-navy mb-2">{contact.label}</h3>
                        <p className="text-foreground font-medium">{contact.primary}</p>
                        {contact.secondary && (
                          <p className="text-muted-foreground text-sm mt-1">{contact.secondary}</p>
                        )}
                        {contact.action && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="mt-2 p-0 h-auto text-navy hover:text-navy-dark"
                            asChild
                          >
                            <a href={contact.action}>Contact</a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Office Hours */}
            <section>
              <h2 className="text-2xl font-bold text-navy mb-6 flex items-center">
                <Calendar className="mr-3 h-6 w-6" />
                Office Hours
              </h2>
              
              <Card className="p-6">
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-border last:border-b-0 pb-3 last:pb-0">
                      <span className="font-medium text-foreground">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-cream rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> For research consultations and academic discussions, 
                    please schedule an appointment via email in advance.
                  </p>
                </div>
              </Card>
            </section>

            {/* Personal Information */}
            <section>
              <h2 className="text-2xl font-bold text-navy mb-6">Personal Information</h2>
              
              <Card className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {personalInfo.map((info, index) => (
                    <div key={index} className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      <p className="font-medium text-foreground">{info.value}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-bold text-navy mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button 
                  variant="professional" 
                  className="w-full justify-start" 
                  asChild
                >
                  <a href="mailto:gunjan.rehani@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </a>
                </Button>
                
                <Button 
                  variant="elegant" 
                  className="w-full justify-start" 
                  asChild
                >
                  <a href="tel:+919911220546">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start" 
                  asChild
                >
                  <a href="https://nitdelhi.ac.in" target="_blank" rel="noopener noreferrer">
                    <Globe className="mr-2 h-4 w-4" />
                    Visit NIT Delhi
                  </a>
                </Button>
              </div>
            </Card>

            {/* Collaboration Areas */}
            <Card className="p-6">
              <h3 className="text-lg font-bold text-navy mb-4">Research Collaboration</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Open to collaborations in the following areas:
              </p>
              <div className="space-y-2">
                {collaborationAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-sage rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Location */}
            <Card className="p-6">
              <h3 className="text-lg font-bold text-navy mb-4 flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Location
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>National Institute of Technology Delhi</p>
                <p>Plot No. FA7, Zone P1</p>
                <p>GT Karnal Road, Near Sector 19</p>
                <p>Delhi - 110036, India</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <section className="mt-16 bg-gradient-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Let's Collaborate</h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Whether you're interested in research collaboration, academic partnerships, or have questions about my work, 
            I'd love to hear from you.
          </p>
          <Button variant="accent" size="lg" asChild>
            <a href="mailto:gunjan.rehani@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Start a Conversation
            </a>
          </Button>
        </section>
      </div>
    </div>
  );
};