import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [clothing, setClothing] = useState([]);
  const [accessories, setAccessories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerImages = [
    'https://imgur.com/96OnkX7.png',
    'https://imgur.com/KtGxwnN.png',
    'https://imgur.com/sfjg9R8.png',
    'https://imgur.com/p0wdadG.png',
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://5d76bf96515d1a0014085cf9.mockapi.io/product');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        setProducts(data);
        setClothing(data.filter(p => !p.isAccessory));
        setAccessories(data.filter(p => p.isAccessory));
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % bannerImages.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [bannerImages.length]);

  if (loading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="home-page">
      <section className="hero-section">
        <img src={bannerImages[currentSlide]} alt="Hero Banner" className="hero-banner" />
        <div className="slider-dots">
          {bannerImages.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      <section className="clothing-section">
        <h2 className="section-heading">Clothing for Men and Women</h2>
        <div className="products-grid">
          {clothing.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="accessories-section">
        <h2 className="section-heading">Accessories for Men and Women</h2>
        <div className="products-grid">
          {accessories.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
