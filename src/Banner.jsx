import React, { useState } from 'react';
import logo from './images/logo.png'; // Import your logo image

const Banner = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactOpen(!isContactOpen);
  };

  return (
    <div className="bg-gray-900 sticky top-0 z-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4 px-8">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-8 rounded-full mr-2" />
            <h1 className="text-white text-3xl">Cabello</h1>
          </div>
          <nav>
            <ul className="flex space-x-4 text-white">
              {/* <li>About</li> */}
              {/* <li>Services</li> */}
              <li onClick={handleContactClick} className="cursor-pointer">
                Contact
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {isContactOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded">
            <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
            <p>Name:  Sunit limbachiya</p>
            <p>Phone: +91 99257 39049</p>
            <p></p>
            <p> <a href="https://g.co/kgs/r5WP8P" target="_blank">Shop Location</a></p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
              onClick={handleContactClick}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
