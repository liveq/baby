import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import './FloatingMenu.css';

const FloatingMenu = () => {
  const { loginResearch } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleResearchClick = () => {
    closeMenu();
    setShowPasswordModal(true);
  };

  const closePasswordModal = () => {
    setShowPasswordModal(false);
    setPassword('');
    setError('');
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    if (!password) {
      setError('비밀번호를 입력해주세요');
      triggerShake();
      return;
    }

    const success = loginResearch(password);

    if (success) {
      closePasswordModal();
      // Redirect to research section or open in new window
      window.open('/research', '_blank');
    } else {
      setError('비밀번호가 올바르지 않습니다');
      triggerShake();
      setPassword('');
    }
  };

  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  // Close menu on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (showPasswordModal) {
          closePasswordModal();
        } else if (isOpen) {
          closeMenu();
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, showPasswordModal]);

  return (
    <>
      {/* Floating Button */}
      <button
        className={`floating-menu-btn ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="관리자 메뉴"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Floating Menu Panel */}
      {isOpen && (
        <>
          <div className="floating-menu-overlay" onClick={closeMenu}></div>
          <div className="floating-menu-panel">
            <div className="floating-menu-header">
              <h3>Admin Menu</h3>
            </div>
            <ul className="floating-menu-list">
              <li>
                <button
                  className="floating-menu-item"
                  onClick={handleResearchClick}
                >
                  <span className="menu-icon">📊</span>
                  <span className="menu-text">연구 자료</span>
                  <span className="menu-arrow">→</span>
                </button>
              </li>
            </ul>
          </div>
        </>
      )}

      {/* Research Password Modal */}
      {showPasswordModal && (
        <div className="research-modal-overlay" onClick={closePasswordModal}>
          <div
            className={`research-modal ${isShaking ? 'shake' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-btn" onClick={closePasswordModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="modal-content">
              <h2>연구 자료 접근</h2>
              <p className="modal-subtitle">비밀번호를 입력해주세요</p>

              <form onSubmit={handlePasswordSubmit}>
                <div className="input-group">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="비밀번호 입력"
                    className={error ? 'error' : ''}
                    autoFocus
                  />
                  {error && <p className="error-message">{error}</p>}
                </div>

                <button type="submit" className="btn btn-primary">
                  확인
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingMenu;
