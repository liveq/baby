import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { categories } from '../../data/products';
import './ProductGrid.css';

const ProductGrid = ({ products, title, showCategoryFilter = false }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 8);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setVisibleCount(8);
  };

  return (
    <section className="product-grid-section">
      <div className="container">
        {/* Section Header */}
        {title && (
          <div className="section-header">
            <h2 className="section-title">{title}</h2>
            <div className="section-divider"></div>
          </div>
        )}

        {/* Category Filter */}
        {showCategoryFilter && (
          <div className="category-filter">
            <div className="category-filter-scroll">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-name">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product Count */}
        <div className="product-count">
          총 <strong>{filteredProducts.length}</strong>개의 상품
        </div>

        {/* Product Grid */}
        {visibleProducts.length > 0 ? (
          <>
            <div className="product-grid">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="load-more-container">
                <button className="btn btn-ghost load-more-btn" onClick={handleLoadMore}>
                  더 보기 ({filteredProducts.length - visibleCount}개 남음)
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="no-products">
            <div className="no-products-icon">📦</div>
            <p>해당 카테고리에 상품이 없습니다</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
