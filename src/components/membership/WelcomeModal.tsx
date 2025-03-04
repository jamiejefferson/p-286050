
import React, { useEffect } from "react";
import { X } from "lucide-react";

interface WelcomeModalProps {
  onAccept: () => void;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({ onAccept }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    // Add small delay to trigger entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div 
        className={`bg-white rounded-xl max-w-md w-full mx-4 p-6 shadow-2xl transform transition-all duration-500 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-red-600">Special Offer!</h2>
          <button 
            onClick={onAccept} 
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="mb-6">
          <p className="text-xl font-semibold mb-2">Buy now, you wee ned</p>
          <p className="text-gray-600">Don't miss out on our exclusive membership offer today!</p>
        </div>
        
        <button
          onClick={onAccept}
          className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
        >
          OK
        </button>
      </div>
    </div>
  );
};
