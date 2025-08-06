import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${
        isHovered ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-600'
      }`}>
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      <div className={`mt-4 flex items-center text-indigo-600 font-medium transition-transform ${
        isHovered ? 'translate-x-2' : ''
      }`}>
        Learn more <ChevronRight size={16} className="ml-1" />
      </div>
    </div>
  );
};

export default FeatureCard;