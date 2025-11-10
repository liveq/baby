import React, { useRef, useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './ProductSlider.css';

const ProductSlider = ({ products, title, subtitle }) => {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [products]);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth * 0.8;
      const targetScroll = direction === 'left'
        ? sliderRef.current.scrollLeft - scrollAmount
        : sliderRef.current.scrollLeft + scrollAmount;

      sliderRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="product-slider-section">
      <div className="container">
        {/* Section Header */}
        <div className="slider-header">
          <div className="slider-header-text">
            <h2 className="slider-title">{title}</h2>
            {subtitle && <p className="slider-subtitle">{subtitle}</p>}
          </div>

          {/* Navigation Buttons (Desktop) */}
          <div className="slider-nav desktop-nav">
            <button
              className="slider-nav-btn prev"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="이전"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              className="slider-nav-btn next"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="다음"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Product Slider */}
        <div className="slider-container">
          <div
            className="product-slider"
            ref={sliderRef}
            onScroll={checkScroll}
          >
            {products.map((product) => (
              <div key={product.id} className="slider-item">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Navigation Buttons (Mobile - Overlay) */}
          {canScrollLeft && (
            <button
              className="slider-nav-btn-mobile prev"
              onClick={() => scroll('left')}
              aria-label="이전"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
          )}
          {canScrollRight && (
            <button
              className="slider-nav-btn-mobile next"
              onClick={() => scroll('right')}
              aria-label="다음"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          )}
        </div>

        {/* Scroll Indicator (Mobile) */}
        {canScrollRight && (
          <div className="scroll-indicator">
            <span>→ 스크롤하여 더 보기</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSlider;
