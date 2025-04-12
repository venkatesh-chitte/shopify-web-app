import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="loading">Loading product details...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!product) return <div className="error">Product not found</div>;

  return (
    <div className="product-details">
      <div className="product-image-container">
        <img 
          src={product.photos && product.photos.length > 0 ? product.photos[selectedImage] : product.preview} 
          alt={product.name} 
          className="product-main-image" 
        />
      </div>
      
      <div className="product-info-container">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-brand">{product.brand}</p>
        <p className="product-price">Price: Rs. {product.price}</p>
        
        <div className="product-description">
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>
        
        <div className="product-preview">
          <h3>Product Preview</h3>
          <div className="product-thumbnails">
            {product.photos && product.photos.map((photo, index) => (
              <img 
                key={index} 
                src={photo} 
                alt={`${product.name} preview ${index + 1}`} 
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>
        
        <button 
          className="add-to-cart-btn" 
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;