import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="footer-section">
            <h3>DIORA BABY</h3>
            <p className="footer-description">
              아이를 위한 첫 번째 선택<br />
              안전하고 편안한 베이비 제품
            </p>
            <div className="social-links">
              <a href="#instagram" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="white"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2"></line>
                </svg>
              </a>
              <a href="#facebook" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#youtube" aria-label="YouTube">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"></polygon>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>고객센터</h4>
            <ul>
              <li><a href="#faq">자주 묻는 질문</a></li>
              <li><a href="#contact">문의하기</a></li>
              <li><a href="#shipping">배송 조회</a></li>
              <li><a href="#returns">교환 및 반품</a></li>
              <li><a href="#bulk-orders">대량 구매</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>쇼핑 정보</h4>
            <ul>
              <li><a href="#about">브랜드 소개</a></li>
              <li><a href="#stores">매장 안내</a></li>
              <li><a href="#partners">입점 제안</a></li>
              <li><a href="#affiliate">제휴 문의</a></li>
              <li><a href="#careers">채용 정보</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>고객센터 운영시간</h4>
            <div className="contact-info">
              <p className="phone">📞 1544-1909</p>
              <p className="hours">평일 09:00 - 18:00</p>
              <p className="hours-sub">(주말 및 공휴일 휴무)</p>
              <p className="email">
                <a href="mailto:support@baby.diora.co.kr">
                  support@baby.diora.co.kr
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Middle */}
        <div className="footer-middle">
          <div className="company-info">
            <p><strong>(주)디오라베이비</strong></p>
            <p>대표: 홍길동 | 사업자등록번호: 123-45-67890</p>
            <p>통신판매업신고: 2024-서울강남-1909</p>
            <p>주소: 서울특별시 강남구 테헤란로 123, 4층</p>
            <p>개인정보보호책임자: 김철수</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-links">
            <a href="#terms">이용약관</a>
            <span className="divider">|</span>
            <a href="#privacy" className="highlight">개인정보처리방침</a>
            <span className="divider">|</span>
            <a href="#youth">청소년보호정책</a>
          </div>
          <p className="copyright">
            &copy; {currentYear} DIORA BABY. All rights reserved.
          </p>
        </div>

        {/* Certifications */}
        <div className="footer-certifications">
          <div className="cert-item">
            <span className="cert-badge">🛡️</span>
            <span>KC 인증</span>
          </div>
          <div className="cert-item">
            <span className="cert-badge">✓</span>
            <span>안전검사 완료</span>
          </div>
          <div className="cert-item">
            <span className="cert-badge">🌿</span>
            <span>친환경 소재</span>
          </div>
          <div className="cert-item">
            <span className="cert-badge">🏆</span>
            <span>품질보증</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
