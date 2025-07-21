import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, Users, BookOpen, Award } from 'lucide-react';

const experiences = [
  {
    position: 'Assistant Professor',
    institution: 'National Institute of Technology Delhi',
    department: 'Department of Computer Science & Engineering',
    duration: 'June 2023 - Present',
    type: 'Current Position',
    responsibilities: [
      'Teaching undergraduate and postgraduate courses',
      'Conducting research in wireless sensor networks and IoT',
      'Supervising doctoral research scholars'
    ],
    otherRoles: [
      'Coordinator',
      'Co-Coordinator, Literature Club, NIT DELHI',
      'Member, Department Purchase Committee, NIT DELHI'
    ]
  },
  {
    position: 'Assistant Professor',
    institution: 'SRM University Delhi-NCR, Sonipat',
    department: 'Department of Computer Science & Engineering',
    duration: 'November 2021 - June 2023',
    subjects: ['C Programming', 'Internet of Things', 'Discrete Structures'],
    otherRoles: [
      'Member, Department Examination Committee (Dec 07,2022-Jan 25, 2022)',
      'Member, Department Curriculum Revision Team (Jan 25,2022-June 2023)',
      'Department Programme Coordinator: Blockchain & IoT (Oct 2022-June 2023)',
      'Department ERP Coordinator (September 2022-June 2023)',
      'University Faculty Coordinator: Tarang, The Music Society (February 2022-June 2023)'
    ]
  },
  {
    position: 'Assistant Professor',
    institution: 'Bennett University, Greater Noida',
    department: 'Department of Computer Science & Engineering, SEAS',
    duration: 'August 2020 - November 2021',
    subjects: ['Discrete Mathematical Structures', 'Front-end development'],
    otherRoles: [
      'Specialization Coordinator (Full Stack Development)'
    ]
  },
  {
    position: 'Research Scholar',
    institution: 'National Institute of Technology Delhi',
    department: 'Department of Computer Science & Engineering',
    duration: 'August 2015 - July 2020',
    type: 'PhD Research',
    details: [
      'JRF: August 2015 - July 2017',
      'SRF: August 2017 - July 2020'
    ]
  },
  {
    position: 'Assistant Professor',
    institution: 'South Point Institute of Technology and Management, Sonipat',
    department: 'Department of Computer Science & Engineering',
    duration: 'September 2014 - July 2015',
    subjects: ['Object Oriented Programming Systems']
  }
];

const technicalSkills = [
  { category: 'Programming Languages', skills: ['C', 'C++', 'MATLAB'] },
  { category: 'Operating Systems', skills: ['Windows', 'Linux'] },
  { category: 'Research Areas', skills: ['Wireless Sensor Networks', 'IoT', 'Energy Optimization', 'Meta-heuristic Algorithms'] }
];

const supervision = [
  {
    type: 'PhD Supervision',
    details: 'Co-Supervising one PhD Scholar from NIT Delhi',
    admissionDate: 'March 2022',
    status: 'Ongoing'
  }
];

export const Experience = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Professional Experience</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive academic and research experience across premier institutions, contributing to education and advancing research in computer science.
          </p>
        </div>

        {/* Experience Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-navy mb-8 flex items-center">
            <Building className="mr-3 h-6 w-6" />
            Academic Positions
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 hover:shadow-card transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-3">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-xl font-bold text-navy">{exp.position}</h3>
                      {exp.type && (
                        <Badge variant="secondary" className="bg-gradient-accent text-accent-foreground">
                          {exp.type}
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-lg font-medium text-foreground mb-2">{exp.institution}</p>
                    <p className="text-muted-foreground mb-4">{exp.department}</p>
                    
                    {exp.subjects && (
                      <div className="mb-4">
                        <p className="font-medium text-foreground mb-2">Subjects Taught:</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.subjects.map((subject, idx) => (
                            <Badge key={idx} variant="outline" className="border-sage text-sage">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {exp.responsibilities && (
                      <div className="mb-4">
                        <p className="font-medium text-foreground mb-2">Key Responsibilities:</p>
                        <ul className="text-muted-foreground space-y-1">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx}>• {resp}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {exp.otherRoles && (
                      <div className="mb-4">
                        <p className="font-medium text-foreground mb-2">Other Responsibilities:</p>
                        <ul className="text-muted-foreground space-y-1">
                          {exp.otherRoles.map((role, idx) => (
                            <li key={idx}>• {role}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {exp.details && (
                      <div>
                        <p className="font-medium text-foreground mb-2">Details:</p>
                        <ul className="text-muted-foreground space-y-1">
                          {exp.details.map((detail, idx) => (
                            <li key={idx}>• {detail}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col items-start lg:items-end space-y-2">
                    <div className="flex items-center text-navy">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span className="font-medium text-sm">{exp.duration}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* PhD Supervision */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-navy mb-8 flex items-center">
            <Users className="mr-3 h-6 w-6" />
            PhD Supervision
          </h2>
          
          <div className="grid grid-cols-1 gap-6">
            {supervision.map((sup, index) => (
              <Card key={index} className="p-6 hover:shadow-card transition-all duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-2">{sup.type}</h3>
                    <p className="text-foreground mb-2">{sup.details}</p>
                    <p className="text-muted-foreground">Date of Admission: {sup.admissionDate}</p>
                  </div>
                  <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
                    {sup.status}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section>
          <h2 className="text-2xl font-bold text-navy mb-8 flex items-center">
            <BookOpen className="mr-3 h-6 w-6" />
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technicalSkills.map((skillSet, index) => (
              <Card key={index} className="p-6 hover:shadow-card transition-all duration-300">
                <h3 className="text-lg font-bold text-navy mb-4">{skillSet.category}</h3>
                <div className="space-y-2">
                  {skillSet.skills.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="mr-2 mb-2 border-navy text-navy">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};