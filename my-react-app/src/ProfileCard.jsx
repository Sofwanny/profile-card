import "./ProfileCard.css";

export default function ProfileCard({ name, role, online, skills }) {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p className="role">{role}</p>

      <p className={`status ${online ? "online" : "offline"}`}>
        {online ? "🟢 Online" : "🔴 Offline"}
      </p>

      <ul className="skills">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
