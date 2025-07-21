import { HeroSection } from '@/components/HeroSection';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, TrendingUp } from 'lucide-react';

const highlights = [
  {
    icon: BookOpen,
    title: 'Research Publications',
    description: '10+ peer-reviewed publications in top-tier journals',
    count: '10+',
    link: '/publications'
  },
  {
    icon: Users,
    title: 'PhD Supervision',
    description: 'Currently co-supervising doctoral research',
    count: '1',
    link: '/experience'
  },
  {
    icon: Award,
    title: 'Academic Achievements',
    description: 'UGC NET qualified, GATE 98.67 percentile',
    count: 'Multiple',
    link: '/education'
  },
  {
    icon: TrendingUp,
    title: 'Teaching Excellence',
    description: 'Courses in IoT, C Programming, Discrete Structures',
    count: '5+',
    link: '/experience'
  }
];

const researchAreas = [
  'Wireless Sensor Networks',
  'Energy-Efficient Techniques',
  'Multi-objective Optimization',
  'Internet of Things (IoT)',
  'Meta-heuristic Algorithms',
  'Network Lifetime Optimization'
];

export const Home = () => {
  return (
    <div>
      <HeroSection />
      
      {/* Highlights Section */}
      <section className="py-16 bg-cream/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Academic Highlights</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of research contributions, teaching excellence, and professional achievements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 group">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-navy">{item.count}</div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <Button variant="ghost" size="sm" asChild className="group-hover:text-navy">
                    <Link to={item.link}>Learn More</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Research Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized research areas focusing on cutting-edge technologies and optimization techniques.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {researchAreas.map((area, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium hover:bg-navy hover:text-primary-foreground transition-colors cursor-default"
              >
                {area}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Collaboration?</h2>
          <p className="text-xl mb-8 opacity-90">
            Open to research collaborations, academic partnerships, and doctoral supervision opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Contact Me</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-navy">
              <Link to="/publications">View Research</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};