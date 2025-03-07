import React, { useState, useEffect } from 'react';
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
  Clock,
  Award,
  Smile,
  ThumbsUp,
  Cloud,
  Shield,
  BarChart,
  Smartphone,
  Search,
  Share2,
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
        return <HomePage setCurrentPage={setCurrentPage} />;
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
                src="https://i.ibb.co/ym5kZg9x/L-2.png"
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
                <li>
                  <a
                    href="https://thewebloom.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    Website
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/thewebloom/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/thewebloom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://jsdl.in/DT-46CG1J5VDR1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    JustDial
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-300">
            <p>&copy; 2025 The Webloom. All rights reserved.</p>
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
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    const formData = new FormData(e.target);
    formData.append('access_key', '6d64eedb-e229-459c-85ca-679f847ace0e'); // Replace with your actual key

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      }).then((res) => res.json());

      if (res.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError(res.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to submit form. Please check your connection.');
    }
  };

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Contact Us
        </h1>
        {submitted ? (
          <div className="text-center text-green-600 p-8">
            <Check className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
            <p>We'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="hidden"
                name="subject"
                value="New Contact Form Submission from The Webloom"
              />
              <input
                type="hidden"
                name="access_key"
                value="YOUR_WEB3FORMS_ACCESS_KEY" // Replace with your actual key
              />
              
              {error && (
                <div className="text-red-500 text-center mb-4">{error}</div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                {/* Rest of the form inputs remain the same */}
                <div className="space-y-1">
                  <label className="flex items-center gap-2 text-gray-700">
                    <User className="w-5 h-5" /> Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
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
                    name="email"
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
                  name="message"
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
        )}
      </div>
    </div>
  );
}

const portfolioItems = [
  {
    image: 'https://i.ibb.co/gZH1zWDR/screely-1739906855253.png',
    title: 'E-commerce website',
    description: 'Built with React and Node.js processing $1M+ monthly sales',
    technologies: ['React', 'Node.js'],
  },
  {
    image:
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400',
    title: 'Fitness Mobile App',
    description: 'Cross-platform fitness tracking application',
    technologies: ['Flutter', 'Firebase'],
  },
  {
    image:
      'https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400',
    title: 'Corporate Website',
    description: 'Enterprise website with CMS integration',
    technologies: ['WordPress', 'PHP'],
  },
];

function HomePage({ setCurrentPage }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "let-s-dicuss-about-you-plan", {origin:"https://cal.com"});
      Cal.ns["let-s-dicuss-about-you-plan"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

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
            <button
              id="cal-booking"
              data-cal-link="thewebloom/let-s-dicuss-about-you-plan"
              data-cal-namespace="let-s-dicuss-about-you-plan"
              data-cal-config='{"layout":"month_view"}'
              className="bg-white text-[#002366] px-6 py-3 md:px-8 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Schedule Consultation <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white"></div>
      </header>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard
              icon={<Clock className="w-8 h-8" />}
              value="2+"
              label="Years of Experience"
            />
            <StatCard
              icon={<Award className="w-8 h-8" />}
              value="20+"
              label="Projects Completed"
            />
            <StatCard
              icon={<Smile className="w-8 h-8" />}
              value="15+"
              label="Happy Clients"
            />
            <StatCard
              icon={<ThumbsUp className="w-8 h-8" />}
              value="98%"
              label="Client Satisfaction"
            />
          </div>
        </div>
      </section>

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
              icon={<Smartphone className="w-8 h-8" />}
              title="Mobile App Development"
              description="Native and cross-platform mobile applications."
            />
            <ServiceCard
              icon={<Search className="w-8 h-8" />}
              title="SEO Optimization"
              description="Boost your visibility and organic traffic."
            />
            <ServiceCard
              icon={<Cloud className="w-8 h-8" />}
              title="Cloud Solutions"
              description="Scalable and secure cloud infrastructure."
            />
            <ServiceCard
              icon={<Shield className="w-8 h-8" />}
              title="Cybersecurity"
              description="Protect your digital assets and data."
            />
            <ServiceCard
              icon={<BarChart className="w-8 h-8" />}
              title="Analytics & Reporting"
              description="Data-driven insights for better decisions."
            />
            <ServiceCard
              icon={<Share2 className="w-8 h-8" />}
              title="Social Media Management"
              description="Engage and grow your online community."
            />
            <ServiceCard
              icon={<Rocket className="w-8 h-8" />}
              title="Digital Marketing"
              description="Strategic campaigns that drive growth."
            />
            <ServiceCard
              icon={<Palette className="w-8 h-8" />}
              title="Brand Strategy"
              description="Build a compelling brand identity."
            />
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Our Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
              name="Shubam Sawant"
              company="CropTechFert Nashik"
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
            <button
              className="bg-white text-[#002366] px-6 py-3 md:px-8 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              onClick={() => setCurrentPage('contact')}
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

// Stat Card Component
function StatCard({ icon, value, label }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
      <div className="text-[#FF0000] mb-4">{icon}</div>
      <h3 className="text-2xl font-bold">{value}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}

// Portfolio Item Component
function PortfolioItem({ image, title, category }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <span className="text-sm text-[#FF0000]">{category}</span>
        <h3 className="text-xl font-semibold mt-2">{title}</h3>
      </div>
    </div>
  );
}

function PortfolioSection() {
  const portfolioItems = [
    {
      image: 'https://i.ibb.co/gZH1zWDR/screely-1739906855253.png',
      title: 'Agricultur Webiste',
      category: 'Web Development',
    },
    {
      image:
        'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Mobile App Design',
      category: 'UI/UX',
    },
    {
      image:
        'https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Brand Identity',
      category: 'Branding',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          Our Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-[#FF0000]">{item.category}</span>
                <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
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
            image="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*iCQd0CuT-Ol_mq5a2YWn_A.jpeg"
            title="How My Coffee Chat Turned Into a VC Pitch Masterclass (6 Tips Every Founder Needs)"
            excerpt="It was the end of the semester, on a chilly February evening, marking the cul..."
            date="February 24, 2025"
            author="Abhishek Pawar"
            category="Entrepreneurship"
            link="https://blog.thewebloom.tech/how-my-coffee-chat-turned-into-a-vc-pitch-masterclass-6-tips-every-founder-needs-13a3bb998df6" // Add the link to the blog post
          />
          <BlogCard
            image="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*VOZmggmqEA9QSJ9dCt-CpA.jpeg"
            title="Starting a Business? Here’s Why META Ads Are a Game-Changer!"
            excerpt="Meta Ads Unlocked: Turning Clicks into Customers, Rupees into Revenue!"
            date="February 23, 2025"
            author="Darshan Mali"
            category="Marketing"
            link="https://blog.thewebloom.tech/starting-a-business-heres-why-meta-ads-are-a-game-changer-0254f154fc31" // Add the link to the blog post
          />
          <BlogCard
            image="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*YiAPDtgOId3rOezcvKWA4w.jpeg"
            title="The Power of Startups: Why You Don’t Need an IIT Tag to Hire IITians"
            excerpt="Let’s start with a confession: I didn’t go to an IIT. Neither did a..."
            date="March 5, 2025"
            author="Siddharth Perkar"
            category="Entrepreneurship"
            link="https://blog.thewebloom.tech/the-power-of-startups-why-you-dont-need-an-iit-tag-to-hire-iitians-043b61bda6aa" // Add the link to the blog post
          />
          <BlogCard
            image="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*bTwqM5nWAiFLnqYb_K7qgQ.jpeg"
            title="Beacon Marketing: The Future of Personalized Advertising"
            excerpt="When I was walking from one of the best burgers I could get at McDonald’s,..."
            date="March 6, 2025"
            author="Himanshu Singh"
            category="Marketing"
            link="https://blog.thewebloom.tech/beacon-marketing-the-future-of-personalized-advertising-05f5c61801ef" // Add the link to the blog post
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
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
          {/* New Team Member Card */}
          <TeamMemberCard
            image="https://i.ibb.co/7dcGZj86/Untitled-design.jpg" // Replace with the actual image URL for Purushottam
            name="Purushottam Gaikwad"
            role="Cofounder & Lead Fullstack Developer"
            description="Expert in both frontend and backend technologies, driving full-stack development."
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
                  <User  className="w-5 h-5" /> Full Name
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
// Component for Blog Cards
function BlogCard({ image, title, excerpt, date, author, category, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl" // Add hover effects here
    >
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <div className="text-sm text-[#FF0000] mb-2">{category}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{date}</span>
          <span>{author}</span>
        </div>
      </div>
    </a>
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
// Component for Team Member Cards
function TeamMemberCard({ image, name, role, description }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-72 object-cover" />
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
