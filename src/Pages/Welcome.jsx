import { useNavigate } from "react-router-dom";
import "../Styles/welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome">
      <div className="welcome-content">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="welcome-actions">
        <button className="primary-btn" onClick={() => navigate("/signup")}>
          Create Account
        </button>

        <button className="secondary-btn" onClick={() => navigate("/login")}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Welcome;
