import FeatureCard from '../components/FeatureCard';
import { Target, Users, Star } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "We focus on achieving your business objectives with precision and efficiency."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Our collaborative approach ensures everyone is aligned and working towards success."
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "We deliver high-quality solutions that exceed expectations and drive results."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                {" "}telx
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the future of web applications with our cutting-edge platform designed to transform your digital presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transform hover:scale-105 transition-all shadow-lg">
                Get Started
              </button>
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Platform?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the powerful features that make our platform the perfect choice for your next project.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;