import "./ProfileCard.css";

export default function ProfileCard({ name, role, online, skills }) {
  return (
    <div className="profile-card">
      <div className="card-header">
        <h2>{name}</h2>
      </div>
      <div className="card-content">
        <p className="role">{role}</p>

        <p className={`status ${online ? "online" : "offline"}`}>
          {online ? "● Online" : "● Offline"}
        </p>

        <div className="skills">
          {skills.map((skill) => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
