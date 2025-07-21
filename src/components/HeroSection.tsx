import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Award } from 'lucide-react';
import profileImage from '@/assets/dr-gunjan-photo.jpg';

export const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Dr. <span className="text-navy">Gunjan</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-navy-light font-medium">
                Assistant Professor
              </h2>
              <p className="text-lg text-muted-foreground">
                Department of Computer Science & Engineering<br />
                National Institute of Technology Delhi
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-sage">
                <GraduationCap className="h-5 w-5" />
                <span className="font-medium">PhD in Computer Science</span>
              </div>
              <div className="flex items-center space-x-2 text-sage">
                <BookOpen className="h-5 w-5" />
                <span className="font-medium">Wireless Sensor Networks</span>
              </div>
              <div className="flex items-center space-x-2 text-sage">
                <Award className="h-5 w-5" />
                <span className="font-medium">UGC NET Qualified</span>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Specializing in energy-efficient techniques in wireless sensor networks, 
              multi-objective optimization, and Internet of Things (IoT) applications. 
              Passionate about advancing research in computer science and engineering.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="professional" size="lg" asChild>
                <Link to="/publications">View Research</Link>
              </Button>
              <Button variant="elegant" size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-elegant border-4 border-gold">
                <img 
                  src={profileImage} 
                  alt="Dr. Gunjan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-accent text-accent-foreground px-4 py-2 rounded-full shadow-glow">
                <span className="font-semibold">PhD, NIT Delhi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};