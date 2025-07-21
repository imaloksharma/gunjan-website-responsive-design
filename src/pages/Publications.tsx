import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Award, Calendar, ExternalLink, Users } from 'lucide-react';

const publications = [
  {
    title: "A Butterfly Optimization Approach for Improving the Performance of Futuristic Internet-of-Things",
    authors: "Anju Arya, Kanika Pahwa, Gunjan",
    journal: "Evolving Systems, Springer",
    year: "2023",
    type: "SCIE",
    category: "journal"
  },
  {
    title: "Bio-inspired Multilevel ICHB-HEED Clustering Protocol for Heterogeneous WSNs",
    authors: "Prateek Gupta, Himansu Sekhar Pattanayak, Gunjan, Lalit Kumar Awasthi, Vachik S Dave",
    journal: "Recent Trends and Best Practices in Industry 4.0, River Publishers",
    year: "2023",
    type: "SCOPUS",
    category: "journal"
  },
  {
    title: "A Review on Multi-objective Optimization in Wireless Sensor Networks Using Nature Inspired Meta-heuristic Algorithms",
    authors: "Gunjan",
    journal: "Neural Processing Letters, Springer",
    year: "2022",
    type: "SCI",
    category: "journal"
  },
  {
    title: "GA-UCR: Genetic Algorithm based Unequal Clustering and Routing Protocol for Wireless Sensor Networks",
    authors: "Gunjan, Ajay K Sharma, Karan Verma",
    journal: "Wireless Personal Communications",
    year: "2022",
    type: "SCI IF 2.1",
    category: "journal"
  },
  {
    title: "NSGA‐II‐XGB: Meta‐heuristic feature selection with XGBoost framework for diabetes prediction",
    authors: "Aditya Gupta, Ishwari Singh Rajput, Gunjan, Vibha Jain",
    journal: "Concurrency and Computation: Practice and Experience",
    year: "2022",
    type: "SCIE",
    category: "journal"
  },
  {
    title: "Applications of IoT in smart homes and cities",
    authors: "Gunjan, Shristi Agarwal, Drishti Rai, Sumran Talreja",
    journal: "EAI/Springer Innovations in Communication and Computing",
    year: "2022",
    type: "Scopus",
    category: "book"
  },
  {
    title: "An Extensive Survey of AIoT in Healthcare: Applications, Challenges and Future Opportunities",
    authors: "Gunjan, Ishwari Singh Rajput, Aditya Gupta, Soni Chaurasia",
    journal: "Reshaping Intelligent Business and Industry: Convergence of AI and IoT at the cutting edge, Wiley",
    year: "2022",
    type: "Scopus",
    category: "book"
  },
  {
    title: "Layered Energy Balanced Unequal Clustering and Routing (LEBUCR) Protocol for Wireless Sensor Networks",
    authors: "Gunjan, Ajay K Sharma, Karan Verma",
    journal: "Adhoc and Sensor Wireless Networks, OldCityPublishing",
    year: "2020",
    type: "SCIE",
    category: "journal"
  },
  {
    title: "NSGA-II with ENLU inspired Clustering for Wireless Sensor Networks",
    authors: "Gunjan, Ajay K Sharma, Karan Verma",
    journal: "Wireless Networks, Springer",
    year: "2019",
    type: "SCI",
    category: "journal"
  },
  {
    title: "Modified TEEN for handling inconsistent cluster size problem in Wireless Sensor Networks",
    authors: "Gunjan, Prachi Maheshwari, Ajay K Sharma",
    journal: "IEEE 2018 International Conference on Wireless Communications Signal Processing and Networking (WiSPNET2018), Chennai",
    year: "2018",
    type: "SCOPUS",
    category: "conference"
  }
];

const patents = [
  {
    title: "A Hybrid Model for Forecasting Infectious Diseases",
    applicationNumber: "2022/02477",
    status: "Granted"
  },
  {
    title: "AN ENSEMBLE MODEL (SIMPLE AVERAGE) FOR MALARIA",
    applicationNumber: "202341008833 A",
    status: "Applied"
  }
];

const reviews = [
  {
    journal: "Wireless Personal Communications, Springer",
    type: "SCIE",
    impactFactor: "1.061"
  },
  {
    journal: "Neural Processing Letters, Springer",
    type: "SCI",
    impactFactor: "2.9"
  }
];

const getTypeColor = (type: string) => {
  switch (type.toLowerCase()) {
    case 'sci':
      return 'bg-gradient-primary text-primary-foreground';
    case 'scie':
      return 'bg-gradient-accent text-accent-foreground';
    case 'scopus':
      return 'bg-sage text-white';
    default:
      return 'bg-secondary text-secondary-foreground';
  }
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'journal':
      return BookOpen;
    case 'conference':
      return Users;
    case 'book':
      return Award;
    default:
      return BookOpen;
  }
};

export const Publications = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Research Publications</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive research contributions in wireless sensor networks, IoT, and optimization techniques published in top-tier journals and conferences.
          </p>
        </div>

        {/* Publications */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-navy mb-8 flex items-center">
            <BookOpen className="mr-3 h-6 w-6" />
            Peer-Reviewed Publications ({publications.length})
          </h2>
          
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="p-6 hover:shadow-card transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {(() => {
                      const IconComponent = getCategoryIcon(pub.category);
                      return <IconComponent className="h-5 w-5 text-navy" />;
                    })()}
                    <Badge className={getTypeColor(pub.type)}>
                      {pub.type}
                    </Badge>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span className="text-sm">{pub.year}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-navy mb-3 leading-relaxed">
                  {pub.title}
                </h3>
                
                <p className="text-muted-foreground mb-2">
                  <span className="font-medium">Authors:</span> {pub.authors}
                </p>
                
                <p className="text-muted-foreground mb-4">
                  <span className="font-medium">Published in:</span> {pub.journal}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Patents */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-navy mb-8 flex items-center">
            <Award className="mr-3 h-6 w-6" />
            Patents ({patents.length})
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {patents.map((patent, index) => (
              <Card key={index} className="p-6 hover:shadow-card transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <Badge 
                    className={patent.status === 'Granted' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'}
                  >
                    {patent.status}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-bold text-navy mb-3">
                  {patent.title}
                </h3>
                
                <p className="text-muted-foreground">
                  <span className="font-medium">Application Number:</span> {patent.applicationNumber}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Peer Review Activity */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-navy mb-8 flex items-center">
            <Users className="mr-3 h-6 w-6" />
            Peer Review Activity
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6 hover:shadow-card transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <Badge className={getTypeColor(review.type)}>
                    {review.type}
                  </Badge>
                  {review.impactFactor && (
                    <Badge variant="outline" className="border-sage text-sage">
                      IF: {review.impactFactor}
                    </Badge>
                  )}
                </div>
                
                <h3 className="text-lg font-medium text-navy">
                  {review.journal}
                </h3>
              </Card>
            ))}
          </div>
        </section>

        {/* Research Impact */}
        <section className="bg-gradient-primary text-primary-foreground rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Research Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-gold mb-2">{publications.length}+</div>
                <p className="opacity-90">Publications</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold mb-2">{patents.length}</div>
                <p className="opacity-90">Patents</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold mb-2">{reviews.length}+</div>
                <p className="opacity-90">Journal Reviews</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};