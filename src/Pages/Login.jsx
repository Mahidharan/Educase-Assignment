import { useNavigate } from "react-router-dom";
import "../Styles/login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <div className="login">
      <h1>Signin to your PopX account</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group floating">
          <label>Email Address</label>
          <input type="email" placeholder="Enter email address" required />
        </div>

        <div className="form-group floating">
          <label>Password</label>
          <input type="password" placeholder="Enter password" required />
        </div>

        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
