import React, { useState, useEffect } from 'react';
import { useWishlist } from '../../context/WishlistContext';
import './Header.css';

const Header = () => {
  const { getWishlistCount } = useWishlist();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMobileMenu();
    }
  };

  const wishlistCount = getWishlistCount();

  return (
    <>
      {/* Utility Bar */}
      <div className="utility-bar">
        <div className="container">
          <div className="utility-content">
            <div className="utility-left">
              <span>🎁 첫 구매 고객 10% 할인</span>
            </div>
            <div className="utility-right">
              <a href="#customer-service">고객센터</a>
              <span className="divider">|</span>
              <a href="#my-page">마이페이지</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="header-logo">
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                <h1>DIORA BABY</h1>
                <p className="logo-subtitle">for your baby</p>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <ul>
                <li>
                  <a href="#best" onClick={(e) => { e.preventDefault(); scrollToSection('best'); }}>
                    베스트
                  </a>
                </li>
                <li>
                  <a href="#new" onClick={(e) => { e.preventDefault(); scrollToSection('new'); }}>
                    신상품
                  </a>
                </li>
                <li>
                  <a href="#categories" onClick={(e) => { e.preventDefault(); scrollToSection('categories'); }}>
                    카테고리
                  </a>
                </li>
                <li>
                  <a href="#sale" onClick={(e) => { e.preventDefault(); scrollToSection('sale'); }}>
                    특가
                  </a>
                </li>
                <li>
                  <a href="#reviews" onClick={(e) => { e.preventDefault(); scrollToSection('reviews'); }}>
                    리뷰
                  </a>
                </li>
              </ul>
            </nav>

            {/* Header Actions */}
            <div className="header-actions">
              <button className="header-action-btn" aria-label="검색">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>

              <button
                className="header-action-btn wishlist-btn"
                aria-label="위시리스트"
                onClick={() => scrollToSection('wishlist')}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                {wishlistCount > 0 && (
                  <span className="badge">{wishlistCount}</span>
                )}
              </button>

              <button className="header-action-btn cart-btn" aria-label="장바구니">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <span className="badge">0</span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="mobile-menu-toggle"
                onClick={toggleMobileMenu}
                aria-label="메뉴"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}></div>
      <nav className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-header">
          <h2>메뉴</h2>
          <button className="close-btn" onClick={closeMobileMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <ul className="mobile-nav-list">
          <li>
            <a href="#best" onClick={(e) => { e.preventDefault(); scrollToSection('best'); }}>
              <span className="icon">🏆</span>
              베스트
            </a>
          </li>
          <li>
            <a href="#new" onClick={(e) => { e.preventDefault(); scrollToSection('new'); }}>
              <span className="icon">✨</span>
              신상품
            </a>
          </li>
          <li>
            <a href="#categories" onClick={(e) => { e.preventDefault(); scrollToSection('categories'); }}>
              <span className="icon">📦</span>
              카테고리
            </a>
          </li>
          <li>
            <a href="#sale" onClick={(e) => { e.preventDefault(); scrollToSection('sale'); }}>
              <span className="icon">🎉</span>
              특가
            </a>
          </li>
          <li>
            <a href="#reviews" onClick={(e) => { e.preventDefault(); scrollToSection('reviews'); }}>
              <span className="icon">💬</span>
              리뷰
            </a>
          </li>
        </ul>

        <div className="mobile-nav-footer">
          <a href="#customer-service">고객센터</a>
          <a href="#my-page">마이페이지</a>
        </div>
      </nav>
    </>
  );
};

export default Header;
