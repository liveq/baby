import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-pattern"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-highlight">아이를 위한</span>
              <br />
              첫 번째 선택
            </h1>
            <p className="hero-subtitle">
              안전하고 편안한 베이비 제품으로<br />
              우리 아이의 소중한 시간을 함께합니다
            </p>

            <div className="hero-features">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span className="feature-text">KC 인증 완료</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span className="feature-text">친환경 소재</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span className="feature-text">무료 배송</span>
              </div>
            </div>

            <div className="hero-actions">
              <button
                className="btn btn-primary btn-large"
                onClick={() => scrollToSection('best')}
              >
                베스트 상품 보기
              </button>
              <button
                className="btn btn-secondary btn-large"
                onClick={() => scrollToSection('new')}
              >
                신상품 둘러보기
              </button>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-image-wrapper">
              <img
                src="https://via.placeholder.com/600x600/FBF6ED/B8860B?text=DIORA+BABY"
                alt="DIORA BABY 제품"
              />
              <div className="hero-badge">
                <span className="badge-icon">🎁</span>
                <div className="badge-text">
                  <strong>첫 구매 고객</strong>
                  <span>10% 할인</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="hero-trust">
        <div className="container">
          <div className="trust-items">
            <div className="trust-item">
              <span className="trust-icon">🚚</span>
              <div className="trust-text">
                <strong>빠른 배송</strong>
                <span>오늘 주문 내일 도착</span>
              </div>
            </div>
            <div className="trust-item">
              <span className="trust-icon">🔄</span>
              <div className="trust-text">
                <strong>간편한 교환/반품</strong>
                <span>30일 이내 무료</span>
              </div>
            </div>
            <div className="trust-item">
              <span className="trust-icon">💯</span>
              <div className="trust-text">
                <strong>품질 보증</strong>
                <span>100% 정품 인증</span>
              </div>
            </div>
            <div className="trust-item">
              <span className="trust-icon">🎯</span>
              <div className="trust-text">
                <strong>고객 만족도</strong>
                <span>평점 4.8/5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
