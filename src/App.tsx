import React, { useState } from 'react';
import {
  Code2,
  Rocket,
  Palette,
  MessageSquare,
  ArrowRight,
  Globe,
  Zap,
  Users,
  Mail,
  Phone,
  MapPin,
  Check,
  BookOpen,
  User,
  Star,
  Briefcase,
} from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderContent = () => {
    switch (currentPage) {
      case 'services':
        return <ServicesPage />;
      case 'blog':
        return <BlogPage />;
      case 'testimonials':
        return <TestimonialsPage />;
      case 'team':
        return <TeamPage setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactPage />;
      case 'careers':
        return <CareersPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <img
                src="https://i.ibb.co/fYCc6SLz/L-1.png"
                alt="The Webloom Logo"
                className="h-8 w-auto"
              />
              <span className="hidden sm:block text-xl font-bold text-[#002366] ml-2">
                The Webloom
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6">
              <button
                onClick={() => setCurrentPage('home')}
                className={`${
                  currentPage === 'home' ? 'text-[#FF0000]' : 'text-gray-600'
                } hover:text-[#FF0000]`}
              >
                Home
              </button>
              <button
                onClick={() => setCurrentPage('services')}
                className={`${
                  currentPage === 'services'
                    ? 'text-[#FF0000]'
                    : 'text-gray-600'
                } hover:text-[#FF0000]`}
              >
                Services
              </button>
              <button
                onClick={() => setCurrentPage('blog')}
                className={`${
                  currentPage === 'blog' ? 'text-[#FF0000]' : 'text-gray-600'
                } hover:text-[#FF0000]`}
              >
                Blog
              </button>
              <button
                onClick={() => setCurrentPage('testimonials')}
                className={`${
                  currentPage === 'testimonials'
                    ? 'text-[#FF0000]'
                    : 'text-gray-600'
                } hover:text-[#FF0000]`}
              >
                Testimonials
              </button>
              <button
                onClick={() => setCurrentPage('team')}
                className={`${
                  currentPage === 'team' ? 'text-[#FF0000]' : 'text-gray-600'
                } hover:text-[#FF0000]`}
              >
                Team
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className={`${
                  currentPage === 'contact' ? 'text-[#FF0000]' : 'text-gray-600'
                } hover:text-[#FF0000]`}
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-[#FF0000]"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => {
                  setCurrentPage('home');
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => {
                  setCurrentPage('services');
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => {
                  setCurrentPage('blog');
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Blog
              </button>
              <button
                onClick={() => {
                  setCurrentPage('testimonials');
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Testimonials
              </button>
              <button
                onClick={() => {
                  setCurrentPage('team');
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Team
              </button>
              <button
                onClick={() => {
                  setCurrentPage('contact');
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {renderContent()}

      {/* Footer */}
      <footer className="bg-[#002366] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">The Webloom</h3>
              <p className="text-gray-300">
                Transform your digital presence with innovative solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Web Design</li>
                <li>Web Development</li>
                <li>SEO Optimization</li>
                <li>Digital Marketing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li>About Us</li>
                <li>Our Work</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-300">
            <p>&copy; 2024 The Webloom. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Contact Us
        </h1>
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="flex items-center gap-2 text-gray-700">
                  <User className="w-5 h-5" /> Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="space-y-1">
                <label className="flex items-center gap-2 text-gray-700">
                  <Mail className="w-5 h-5" /> Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="flex items-center gap-2 text-gray-700">
                <MessageSquare className="w-5 h-5" /> Message
              </label>
              <textarea
                rows="4"
                className="w-full p-3 rounded-lg border border-gray-300"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#002366] text-white py-3 rounded-lg font-semibold hover:bg-[#001a4d] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-[#002366] to-[#FF0000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Transform Your Digital Presence with The Webloom
            </h1>
            <p className="text-base md:text-xl max-w-2xl mx-auto mb-8">
              Elevate your brand with cutting-edge web solutions and innovative
              digital strategies that bloom into success.
            </p>
            <button className="bg-white text-[#002366] px-6 py-3 md:px-8 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white"></div>
      </header>

      {/* Services Preview */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard
              icon={<Globe className="w-8 h-8" />}
              title="Web Development"
              description="Custom websites that captivate and convert visitors."
            />
            <ServiceCard
              icon={<Rocket className="w-8 h-8" />}
              title="Digital Marketing"
              description="Strategic campaigns that drive growth and engagement."
            />
            <ServiceCard
              icon={<Palette className="w-8 h-8" />}
              title="Brand Strategy"
              description="Compelling brand narratives that resonate with your audience."
            />
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <TestimonialCard
              name="Rajesh Kumar"
              company="TechVision India"
              content="The Webloom transformed our online presence completely. Their innovative approach and attention to detail exceeded our expectations."
              image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            />
            <TestimonialCard
              name="Priya Sharma"
              company="Global Solutions Ltd"
              content="Working with The Webloom was a game-changer for our business. Their team's expertise in digital marketing helped us reach new heights."
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#002366] to-[#FF0000] rounded-2xl text-white p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Bloom?
            </h2>
            <p className="text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
              Let's create something extraordinary together. Your digital
              success story starts here.
            </p>
            <button className="bg-white text-[#002366] px-6 py-3 md:px-8 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              Contact Us <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function ServicesPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Our Services
        </h1>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
          <ServiceDetailCard
            icon={<Globe className="w-12 h-12" />}
            title="Web Development"
            description="Custom websites built with cutting-edge technology"
            features={[
              'Responsive Design',
              'E-commerce Solutions',
              'Custom Web Applications',
              'CMS Integration',
            ]}
          />
          <ServiceDetailCard
            icon={<Rocket className="w-12 h-12" />}
            title="Digital Marketing"
            description="Comprehensive digital marketing strategies"
            features={[
              'SEO Optimization',
              'Social Media Marketing',
              'Content Strategy',
              'PPC Campaigns',
            ]}
          />
          <ServiceDetailCard
            icon={<Palette className="w-12 h-12" />}
            title="Brand Strategy"
            description="Build a strong and memorable brand identity"
            features={[
              'Brand Identity Design',
              'Visual Guidelines',
              'Brand Messaging',
              'Market Positioning',
            ]}
          />
          <ServiceDetailCard
            icon={<Briefcase className="w-12 h-12" />}
            title="Business Consulting"
            description="Strategic guidance for digital transformation"
            features={[
              'Digital Strategy',
              'Market Analysis',
              'Growth Planning',
              'Technology Consulting',
            ]}
          />
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-2xl p-6 md:p-12 mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <ProcessStep
              number="01"
              title="Discovery"
              description="Understanding your business goals and requirements"
            />
            <ProcessStep
              number="02"
              title="Strategy"
              description="Developing a tailored plan for your success"
            />
            <ProcessStep
              number="03"
              title="Implementation"
              description="Executing the plan with precision"
            />
            <ProcessStep
              number="04"
              title="Growth"
              description="Monitoring and optimizing for continued success"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Latest Insights
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <BlogCard
            image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            title="The Future of Web Development in 2024"
            excerpt="Explore the latest trends and technologies shaping the web development landscape"
            date="March 15, 2024"
            author="Abhishek Pawar"
            category="Technology"
          />
          <BlogCard
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            title="Maximizing ROI with Digital Marketing"
            excerpt="Learn how to optimize your digital marketing strategy for better returns"
            date="March 12, 2024"
            author="Darshan Mali"
            category="Marketing"
          />
          <BlogCard
            image="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            title="Building a Strong Brand Identity"
            excerpt="Essential steps to create a memorable and impactful brand presence"
            date="March 10, 2024"
            author="Samarth Kuwar"
            category="Branding"
          />
        </div>
      </div>
    </div>
  );
}

function TestimonialsPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">
          Client Success Stories
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <TestimonialCard
            name="Rajesh Kumar"
            company="TechVision India"
            content="The Webloom transformed our online presence completely. Their innovative approach and attention to detail exceeded our expectations."
            image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
          />
          <TestimonialCard
            name="Priya Sharma"
            company="Global Solutions Ltd"
            content="Working with The Webloom was a game-changer for our business. Their team's expertise in digital marketing helped us reach new heights."
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
          />
          <TestimonialCard
            name="Amit Patel"
            company="Innovation Tech"
            content="The level of creativity and technical expertise at The Webloom is outstanding. They delivered beyond our expectations."
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
          />
          <TestimonialCard
            name="Neha Gupta"
            company="Digital First"
            content="Exceptional service and results. The Webloom team truly understands digital transformation and delivers value."
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
          />
        </div>
      </div>
    </div>
  );
}

function TeamPage({ setCurrentPage }) {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">
          Our Leadership Team
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TeamMemberCard
            image="https://i.ibb.co/CKxdQ24X/sidd.png"
            name="Siddharth Perkar"
            role="CEO & Cofounder"
            description="Visionary leader with expertise in business strategy and digital innovation."
          />
          <TeamMemberCard
            image="https://i.ibb.co/QFcCzXX8/abhi.jpg"
            name="Abhishek Pawar"
            role="CTO & Cofounder"
            description="Technical genius behind our innovative solutions and development strategies."
          />
          <TeamMemberCard
            image="https://i.ibb.co/GvsmD6P2/darsh.png"
            name="Darshan Mali"
            role="CMO & Cofounder"
            description="Marketing strategist driving our brand's growth and client success."
          />
          <TeamMemberCard
            image="https://i.ibb.co/G4vhjxDH/sam.jpg"
            name="Samarth Kuwar"
            role="CIO & Cofounder"
            description="Information systems expert ensuring seamless digital operations."
          />
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8">Join Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals who are passionate
            about digital innovation and creating exceptional user experiences.
          </p>
          <button
            onClick={() => setCurrentPage('careers')}
            className="bg-[#002366] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#001a4d] transition-colors"
          >
            View Open Positions
          </button>
        </div>
      </div>
    </div>
  );
}

function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null,
    coverLetter: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const jobs = [
    {
      title: 'Frontend Developer',
      location: 'Remote',
      type: 'Full Time',
      description:
        'Build beautiful and responsive web interfaces using modern technologies.',
    },
    {
      title: 'Digital Marketing Specialist',
      location: 'Mumbai',
      type: 'Contract',
      description: 'Drive digital campaigns and optimize customer acquisition.',
    },
    {
      title: 'UI/UX Designer',
      location: 'Bengaluru',
      type: 'Full Time',
      description: 'Create intuitive and visually stunning user experiences.',
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">
          Career Opportunities
        </h1>

        {/* Job Listings */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <div className="flex gap-4 mb-4 text-gray-600">
                <span className="flex items-center gap-1">
                  <MapPin className="w-5 h-5" /> {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase className="w-5 h-5" /> {job.type}
                </span>
              </div>
              <p className="text-gray-600">{job.description}</p>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Apply Now</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="flex items-center gap-2 text-gray-700">
                  <User className="w-5 h-5" /> Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="space-y-1">
                <label className="flex items-center gap-2 text-gray-700">
                  <Mail className="w-5 h-5" /> Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="space-y-1">
                <label className="flex items-center gap-2 text-gray-700">
                  <Phone className="w-5 h-5" /> Phone
                </label>
                <input
                  type="tel"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
              <div className="space-y-1">
                <label className="flex items-center gap-2 text-gray-700">
                  <Briefcase className="w-5 h-5" /> Position
                </label>
                <select
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 bg-white"
                  value={formData.position}
                  onChange={(e) =>
                    setFormData({ ...formData, position: e.target.value })
                  }
                >
                  <option value="">Select Position</option>
                  {jobs.map((job, index) => (
                    <option key={index} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="flex items-center gap-2 text-gray-700">
                <BookOpen className="w-5 h-5" /> Resume (PDF only)
              </label>
              <input
                type="file"
                accept=".pdf"
                required
                className="w-full p-3 rounded-lg border border-gray-300"
                onChange={(e) =>
                  setFormData({ ...formData, resume: e.target.files[0] })
                }
              />
            </div>

            <div className="space-y-1">
              <label className="flex items-center gap-2 text-gray-700">
                <MessageSquare className="w-5 h-5" /> Cover Letter
              </label>
              <textarea
                rows="4"
                className="w-full p-3 rounded-lg border border-gray-300"
                value={formData.coverLetter}
                onChange={(e) =>
                  setFormData({ ...formData, coverLetter: e.target.value })
                }
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#002366] text-white py-3 rounded-lg font-semibold hover:bg-[#001a4d] transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Component for Service Cards
function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-[#FF0000] mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// Component for Service Detail Cards
function ServiceDetailCard({ icon, title, description, features }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-[#FF0000] mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-[#FF0000]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Component for Process Steps
function ProcessStep({ number, title, description }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-[#FF0000] mb-4">{number}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// Component for Blog Cards
function BlogCard({ image, title, excerpt, date, author, category }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="text-sm text-[#FF0000] mb-2">{category}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{date}</span>
          <span>{author}</span>
        </div>
      </div>
    </div>
  );
}

// Component for Testimonial Cards
function TestimonialCard({ name, company, content, image }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-gray-600 text-sm">{company}</p>
        </div>
      </div>
      <p className="text-gray-700">{content}</p>
      <div className="flex text-[#FF0000] mt-4">
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
      </div>
    </div>
  );
}

// Component for Team Member Cards
function TeamMemberCard({ image, name, role, description }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-[#FF0000] mb-3">{role}</p>
        <p className="text-gray-600">{description}</p>
        <div className="flex gap-4 mt-4">
          <a href="#" className="text-gray-600 hover:text-[#FF0000]">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-[#FF0000]">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-[#FF0000]">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
