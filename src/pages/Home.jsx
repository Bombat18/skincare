import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Para from '../components/Para';
import OurProducts from '../components/OurProducts';
import BestSellers from '../components/BestSellers';
import Feel from '../components/Feel';
import Product2nd from '../components/Product2nd';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleImagesLoaded = () => {
      const images = document.querySelectorAll('img');
      let loadedCount = 0;

      images.forEach((img) => {
        if (img.complete) {
          loadedCount++;
        } else {
          img.onload = () => {
            loadedCount++;
            if (loadedCount === images.length) {
              setLoading(false);
            }
          };
          img.onerror = () => {
            loadedCount++;
            if (loadedCount === images.length) {
              setLoading(false);
            }
          };
        }
      });

      if (loadedCount === images.length) {
        setLoading(false);
      }
    };

    // Wait for DOM to render
    setTimeout(handleImagesLoaded, 100); // small delay to ensure images are in DOM
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-800"></div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <Para />
      <OurProducts />
      <BestSellers />
      <Feel />
      <Product2nd />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Home;
