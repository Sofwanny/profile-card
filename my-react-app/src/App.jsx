import ProfileCard from "./ProfileCard.jsx";
import "./App.css";

export default function App() {
  const profiles = [
    { id: 1, name: "Sofwan Yusuf", role: "Frontend Learner", online: true, skills: ["HTML", "CSS", "JavaScript"] },
    { id: 2, name: "Amina Bello", role: "UI Designer", online: false, skills: ["Figma", "Adobe XD"] },
    { id: 3, name: "Ibrahim Musa", role: "Backend Beginner", online: true, skills: ["Node.js", "Python"] },
    { id: 4, name: "Fatima Adamu", role: "Fullstack Developer", online: false, skills: ["React", "Express"] },
    { id: 5, name: "Chinedu Okafor", role: "DevOps Enthusiast", online: true, skills: ["Docker", "Kubernetes"] },
  ];

  return (
    <div className="app-container">
      <h1 className="app-title">Profiles</h1>
      <div className="grid-container">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} {...profile} />
        ))}
      </div>
    </div>
  );
}
