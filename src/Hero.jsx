import React from 'react';

const Hero = () => {
  // Array of random background image URLs
  const backgroundImageUrls = [
    'https://plus.unsplash.com/premium_photo-1677616799686-783676b17682?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
    // 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2336&q=80',
    // 'https://plus.unsplash.com/premium_photo-1677616799686-783676b17682?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
    // Add more image URLs here
  ];

  // Select a random background image URL
  const randomBackgroundImageUrl = backgroundImageUrls[Math.floor(Math.random() * backgroundImageUrls.length)];

  return (
    <div className="bg-gray-900" style={{ backgroundImage: `url(${randomBackgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-white text-5xl font-bold mb-4">Cabello the saloon</h1>
          <p className="text-white text-xl mb-8">The Hair & Makeup Studio.</p>
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-200"
          >
            Get Estimate
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
