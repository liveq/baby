import React, { useState } from 'react';
import { useWishlist } from '../../context/WishlistContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);

  const isWishlisted = isInWishlist(product.id);

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    setShowQuickView(true);
  };

  const formatPrice = (price) => {
    return price.toLocaleString('ko-KR');
  };

  const calculateSavings = () => {
    if (!product.originalPrice) return 0;
    return product.originalPrice - product.price;
  };

  return (
    <>
      <div className="product-card">
        {/* Product Image */}
        <div className="product-image-wrapper">
          <a href={`#product/${product.id}`} className="product-image-link">
            <img
              src={product.image}
              alt={product.name}
              className={`product-image ${imageLoaded ? 'loaded' : ''}`}
              onLoad={() => setImageLoaded(true)}
            />
          </a>

          {/* Badges */}
          {product.badges && product.badges.length > 0 && (
            <div className="product-badges">
              {product.badges.map((badge, index) => (
                <span
                  key={index}
                  className={`product-badge badge-${badge.toLowerCase()}`}
                >
                  {badge}
                </span>
              ))}
            </div>
          )}

          {/* Wishlist Button */}
          <button
            className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
            onClick={handleWishlistToggle}
            aria-label={isWishlisted ? '위시리스트에서 제거' : '위시리스트에 추가'}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill={isWishlisted ? 'currentColor' : 'none'}
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>

          {/* Quick View Button (appears on hover) */}
          <button
            className="quick-view-btn"
            onClick={handleQuickView}
          >
            빠른 보기
          </button>

          {/* Discount Badge */}
          {product.discount > 0 && (
            <div className="discount-badge">
              {product.discount}%
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="product-info">
          <a href={`#product/${product.id}`} className="product-link">
            <h3 className="product-name">{product.name}</h3>

            <p className="product-description">{product.description}</p>

            {/* Rating */}
            {product.rating && (
              <div className="product-rating">
                <span className="rating-stars">
                  ⭐ {product.rating.toFixed(1)}
                </span>
                <span className="rating-count">
                  ({product.reviewCount.toLocaleString()})
                </span>
              </div>
            )}

            {/* Price */}
            <div className="product-price">
              {product.originalPrice && (
                <span className="price-original">
                  {formatPrice(product.originalPrice)}원
                </span>
              )}
              <span className="price-current">
                {formatPrice(product.price)}원
              </span>
            </div>

            {/* Savings */}
            {calculateSavings() > 0 && (
              <div className="product-savings">
                {formatPrice(calculateSavings())}원 할인
              </div>
            )}

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="product-tags">
                {product.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="product-tag">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Stock Status */}
            {product.stock < 10 && product.stock > 0 && (
              <div className="stock-warning">
                🔥 재고 {product.stock}개 남음
              </div>
            )}
            {product.stock === 0 && (
              <div className="stock-out">
                품절
              </div>
            )}
          </a>

          {/* Add to Cart Button */}
          <button className="add-to-cart-btn" disabled={product.stock === 0}>
            {product.stock === 0 ? '품절' : '장바구니 담기'}
          </button>
        </div>
      </div>

      {/* Quick View Modal */}
      {showQuickView && (
        <div
          className="quick-view-overlay"
          onClick={() => setShowQuickView(false)}
        >
          <div
            className="quick-view-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="quick-view-close"
              onClick={() => setShowQuickView(false)}
            >
              ✕
            </button>
            <div className="quick-view-content">
              <div className="quick-view-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="quick-view-info">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <div className="quick-view-price">
                  {product.originalPrice && (
                    <span className="price-original">
                      {formatPrice(product.originalPrice)}원
                    </span>
                  )}
                  <span className="price-current">
                    {formatPrice(product.price)}원
                  </span>
                </div>
                <button className="btn btn-primary">
                  상세 페이지로 이동
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
