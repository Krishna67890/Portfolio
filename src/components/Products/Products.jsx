import React from 'react';
import './Products.css';
import { usePortfolioVoice } from '../../Hooks/usePortfolioVoice';
import littleLearnersImg from '../../assets/Little-Learners-Hub 1.png';
import linkedinImg from '../../assets/Linked in 1.png';

const Products = () => {
  const { speak, stop } = usePortfolioVoice();

  const products = [
    {
      id: 'little-learners',
      title: "Little Learners Hub",
      price: "$4",
      description: "Interactive educational platform for kids. Perfect for early learning and engagement.",
      link: "https://krishnadai.gumroad.com/l/littlelearnershub",
      image: littleLearnersImg,
      narration: "Purchase Little Learners Hub for only 4 dollars. An interactive educational platform for kids featuring alphabets, numbers, and early childhood games."
    },
    {
      id: 'linkedin-clone',
      title: "LinkedIn Clone (React)",
      price: "$10",
      description: "High-fidelity professional networking site clone with post feeds and user profiles.",
      link: "https://krishnadai.gumroad.com/l/linkedin-clone-react",
      image: linkedinImg,
      narration: "Get the full LinkedIn Clone built with React for 10 dollars. It features professional networking mechanics, user profiles, and interactive feeds."
    }
  ];

  return (
    <section id="products" className="products-section">
      <div className="container">
        <h2 className="section-title">💎 Krishna Patil Rajputs Products</h2>
        <p className="section-subtitle">Premium Source Codes & Digital Assets</p>

        <div className="products-grid">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card glass-morphism"
              onMouseEnter={() => speak(product.narration)}
              onMouseLeave={stop}
            >
              <div className="product-image">
                <img src={product.image} alt={product.title} />
                <div className="product-price">{product.price}</div>
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn buy-btn"
                >
                  Buy on Gumroad
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
