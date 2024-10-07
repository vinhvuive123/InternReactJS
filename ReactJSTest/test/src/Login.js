import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';  // Nếu bạn có CSS riêng, bạn có thể tách file CSS

const Login = () => {
  const navigate = useNavigate(); // Thay useHistory bằng useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Thêm logic đăng nhập ở đây nếu cần
    navigate('/'); // Chuyển hướng về trang chủ
  };

  return (
    <div className="login-container">
      <div className="logo">
        <span className="dot1"></span>
        <span className="dot2"></span>
        <span className="dot3"></span>
      </div>
      <div className="container">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
          <button type="submit">Sign In</button><br />
          <a href="/">Back to HomePage</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
