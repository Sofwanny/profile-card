import ProfileCard from "./ProfileCard.jsx";
import "./App.css";

export default function App() {
  const profiles = [
    { id: 1, name: "Sofwan Yusuf", role: "Frontend Learner", online: true, skills: ["HTML", "CSS", "JavaScript"], color: "#FF6B6B" },
    { id: 2, name: "Amina Bello", role: "UI Designer", online: false, skills: ["Figma", "Adobe XD"], color: "#4ECDC4" },
    { id: 3, name: "Ibrahim Musa", role: "Backend Beginner", online: true, skills: ["Node.js", "Python"], color: "#45B7D1" },
    { id: 4, name: "Fatima Adamu", role: "Fullstack Developer", online: false, skills: ["React", "Express"], color: "#FFA07A" },
    { id: 5, name: "Chinedu Okafor", role: "DevOps Enthusiast", online: true, skills: ["Docker", "Kubernetes"], color: "#98D8C8" },
  ];

  return (
    <div className="app-container">
      <h1 className="app-title">Profile Cards</h1>
      <div className="grid-container">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            role={profile.role}
            online={profile.online}
            skills={profile.skills}
            color={profile.color}
          />
        ))}
      </div>
    </div>
  );
}
