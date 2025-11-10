import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './PasswordGate.css';

const PasswordGate = ({ children }) => {
  const { isAuthenticated, isLoading, login } = useAuth();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password) {
      setError('비밀번호를 입력해주세요');
      triggerShake();
      return;
    }

    const success = login(password);

    if (!success) {
      setError('비밀번호가 올바르지 않습니다');
      triggerShake();
      setPassword('');
    }
  };

  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (error) setError('');
  };

  if (isLoading) {
    return (
      <div className="password-gate-loading">
        <div className="spinner"></div>
        <p>로딩 중...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="password-gate">
        <div className="password-gate-background"></div>
        <div className={`password-gate-container ${isShaking ? 'shake' : ''}`}>
          <div className="password-gate-content">
            <div className="logo-section">
              <h1 className="logo">DIORA BABY</h1>
              <p className="subtitle">아이를 위한 첫 번째 선택</p>
            </div>

            <form onSubmit={handleSubmit} className="password-form">
              <div className="input-group">
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="비밀번호를 입력하세요"
                  className={error ? 'error' : ''}
                  autoFocus
                />
                {error && (
                  <p className="error-message">{error}</p>
                )}
              </div>

              <button type="submit" className="btn btn-primary">
                접속하기
              </button>
            </form>

            <div className="password-gate-footer">
              <p>🔒 보안 접속</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return children;
};

export default PasswordGate;
