import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext';
import PasswordGate from './components/Auth/PasswordGate';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import FloatingMenu from './components/Layout/FloatingMenu';
import HeroSection from './components/Hero/HeroSection';
import ProductSlider from './components/Products/ProductSlider';
import ProductGrid from './components/Products/ProductGrid';
import {
  products,
  getBestProducts,
  getNewProducts,
  getDiscountedProducts,
} from './data/products';
import './App.css';

function App() {
  const bestProducts = getBestProducts();
  const newProducts = getNewProducts();
  const saleProducts = getDiscountedProducts();

  return (
    <AuthProvider>
      <WishlistProvider>
        <PasswordGate>
          <div className="app">
            <Header />

            <main className="main-content">
              {/* Hero Section */}
              <HeroSection />

              {/* Best Products Slider */}
              <div id="best">
                <ProductSlider
                  products={bestProducts}
                  title="베스트 상품"
                  subtitle="가장 많은 사랑을 받는 제품들"
                />
              </div>

              {/* New Products Slider */}
              <div id="new">
                <ProductSlider
                  products={newProducts}
                  title="신상품"
                  subtitle="새로 출시된 따끈따끈한 제품"
                />
              </div>

              {/* Sale Products Grid */}
              <div id="sale">
                <ProductGrid
                  products={saleProducts}
                  title="🎉 특가 상품"
                />
              </div>

              {/* All Products with Category Filter */}
              <div id="categories">
                <ProductGrid
                  products={products}
                  title="전체 상품"
                  showCategoryFilter={true}
                />
              </div>

              {/* Reviews Section Placeholder */}
              <section id="reviews" className="reviews-section">
                <div className="container">
                  <div className="section-header">
                    <h2 className="section-title">고객 후기</h2>
                    <div className="section-divider"></div>
                  </div>
                  <div className="reviews-placeholder">
                    <div className="placeholder-icon">💬</div>
                    <p>고객 후기가 곧 업데이트됩니다</p>
                  </div>
                </div>
              </section>

              {/* Brand Story Section */}
              <section className="brand-story">
                <div className="container">
                  <div className="brand-story-content">
                    <div className="brand-story-text">
                      <h2>DIORA BABY</h2>
                      <h3>아이를 위한 첫 번째 선택</h3>
                      <p>
                        디오라 베이비는 아이들의 건강하고 안전한 성장을 위해<br />
                        최고 품질의 베이비 제품만을 엄선합니다.
                      </p>
                      <ul className="brand-values">
                        <li>
                          <span className="value-icon">✓</span>
                          <span>KC 인증 완료된 안전한 제품</span>
                        </li>
                        <li>
                          <span className="value-icon">✓</span>
                          <span>친환경 소재 사용</span>
                        </li>
                        <li>
                          <span className="value-icon">✓</span>
                          <span>엄격한 품질 검사</span>
                        </li>
                        <li>
                          <span className="value-icon">✓</span>
                          <span>100% 고객 만족 보증</span>
                        </li>
                      </ul>
                    </div>
                    <div className="brand-story-image">
                      <img
                        src="https://via.placeholder.com/600x400/FBF6ED/B8860B?text=DIORA+BABY+Story"
                        alt="DIORA BABY 브랜드 스토리"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </main>

            <Footer />
            <FloatingMenu />
          </div>
        </PasswordGate>
      </WishlistProvider>
    </AuthProvider>
  );
}

export default App;
