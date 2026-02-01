import "../styles/profile.css";
import avatar from "../assets/avatar.png";
import group from "../assets/group.svg";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-header">
        <h2>Account Settings</h2>
      </div>

      <div className="profile-card">
        <div className="profile-info">
          <div className="avatar-wrapper">
            <img src={avatar} alt="Profile" className="avatar" />
            <span className="edit-badge">
              <img src={group} alt="" />
            </span>
          </div>

          <div className="user-details">
            <h3>Marry Doe</h3>
            <p>Marry@gmail.com</p>
          </div>
        </div>

        <p className="profile-desc">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>

      <div className="divider" />
    </div>
  );
};

export default Profile;
