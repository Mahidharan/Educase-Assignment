import { useNavigate } from "react-router-dom";
import "../Styles/signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <div className="signup">
      <h1>Create your PopX account</h1>

      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group floating">
          <label>
            Full Name<span>*</span>
          </label>
          <input type="text" placeholder="Marry Doe" required />
        </div>

        <div className="form-group floating">
          <label>
            Phone number<span>*</span>
          </label>
          <input type="number" placeholder="Marry Doe" required />
        </div>

        <div className="form-group floating">
          <label>
            Email address<span>*</span>
          </label>
          <input type="email" placeholder="Marry Doe" required />
        </div>

        <div className="form-group floating">
          <label>
            Password<span>*</span>
          </label>
          <input type="password" placeholder="Marry Doe" required />
        </div>

        <div className="form-group floating">
          <label>Company name</label>
          <input type="text" placeholder="Marry Doe" />
        </div>

        <div className="form-group agency">
          <label className="agency-label">
            Are you an Agency?<span>*</span>
          </label>

          <div className="radio-group">
            <label>
              <input type="radio" name="agency" required />
              Yes
            </label>

            <label>
              <input type="radio" name="agency" />
              No
            </label>
          </div>
        </div>

        <button className="signup-btn" type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
