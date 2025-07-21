import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, Award, Trophy } from 'lucide-react';

const educationData = [
  {
    degree: 'Doctor of Philosophy',
    institution: 'National Institute of Technology Delhi',
    department: 'Department of Computer Science & Engineering',
    duration: 'August 2015 – April 2021',
    cgpa: '8.57',
    thesis: 'Energy-Efficient Techniques in Wireless Sensor Networks',
    supervisors: ['Prof. Ajay K Sharma (Director, NIT Delhi)', 'Dr. Karan Verma (Associate Professor, NIT Delhi)']
  },
  {
    degree: 'Master of Technology',
    institution: 'National Institute of Technology Jalandhar',
    department: 'Department of Computer Science & Engineering',
    duration: 'July 2012 – June 2014',
    cgpa: '8.17',
    thesis: 'Modified TEEN (MTEEN) protocol with improved Network Lifetime and optimized Energy Efficiency for Wireless Sensor Networks'
  },
  {
    degree: 'Bachelor of Technology',
    institution: 'Maharshi Dayanand University, Rohtak',
    department: 'Department of Information Technology',
    duration: 'July 2008 - June 2012',
    percentage: '73.8%'
  }
];

const schoolEducation = [
  {
    level: 'Senior Secondary School (+2)',
    board: 'Central Board of Secondary Examination',
    year: '2008',
    percentage: '82.2%'
  },
  {
    level: 'Higher Secondary School',
    board: 'Central Board of Secondary Examination',
    year: '2006',
    percentage: '85.8%'
  }
];

const qualifications = [
  {
    title: 'UGC NET',
    description: 'Qualified for Assistant Professor',
    year: 'Multiple Years'
  },
  {
    title: 'GATE 2018',
    description: '98.67 percentile',
    year: '2018'
  },
  {
    title: 'GATE 2012',
    description: 'Qualified',
    year: '2012'
  }
];

export const Education = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Education & Qualifications</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic journey spanning prestigious institutions with excellence in computer science and engineering research.
          </p>
        </div>

        {/* Higher Education */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-navy mb-8 flex items-center">
            <GraduationCap className="mr-3 h-6 w-6" />
            Higher Education
          </h2>
          
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <Card key={index} className="p-8 hover:shadow-card transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-bold text-navy mb-2">{edu.degree}</h3>
                    <p className="text-lg font-medium text-foreground mb-1">{edu.institution}</p>
                    <p className="text-muted-foreground mb-3">{edu.department}</p>
                    
                    {edu.thesis && (
                      <div className="mb-4">
                        <p className="font-medium text-foreground mb-1">Thesis Title:</p>
                        <p className="text-muted-foreground italic">{edu.thesis}</p>
                      </div>
                    )}
                    
                    {edu.supervisors && (
                      <div>
                        <p className="font-medium text-foreground mb-1">Supervisors:</p>
                        <ul className="text-muted-foreground space-y-1">
                          {edu.supervisors.map((supervisor, idx) => (
                            <li key={idx}>• {supervisor}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-navy">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span className="font-medium">{edu.duration}</span>
                    </div>
                    
                    {edu.cgpa && (
                      <Badge variant="secondary" className="bg-gradient-accent text-accent-foreground">
                        CGPA: {edu.cgpa}
                      </Badge>
                    )}
                    
                    {edu.percentage && (
                      <Badge variant="secondary" className="bg-gradient-accent text-accent-foreground">
                        {edu.percentage}
                      </Badge>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* School Education */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-navy mb-8 flex items-center">
            <Award className="mr-3 h-6 w-6" />
            School Education
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {schoolEducation.map((school, index) => (
              <Card key={index} className="p-6 hover:shadow-card transition-all duration-300">
                <h3 className="text-lg font-bold text-navy mb-2">{school.level}</h3>
                <p className="text-foreground mb-2">{school.board}</p>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Year: {school.year}</span>
                  <Badge variant="secondary" className="bg-gradient-accent text-accent-foreground">
                    {school.percentage}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Competitive Examinations */}
        <section>
          <h2 className="text-2xl font-bold text-navy mb-8 flex items-center">
            <Trophy className="mr-3 h-6 w-6" />
            Competitive Examinations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {qualifications.map((qual, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300 group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4 group-hover:shadow-glow transition-all duration-300">
                  <Trophy className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{qual.title}</h3>
                <p className="text-muted-foreground mb-2">{qual.description}</p>
                <Badge variant="outline" className="border-navy text-navy">
                  {qual.year}
                </Badge>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};