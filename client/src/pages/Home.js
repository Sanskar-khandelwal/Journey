import { useEffect, useState } from "react";

export default function Home() {
  const [achivements, setAchivements] = useState("");

  useEffect(() => {
    const fetchAchivements = async () => {
      const response = await fetch("http://localhost:5000/api/achievements");
      const json = await response.json();
      if (response.ok) {
        setAchivements(json);
      }
    };
    fetchAchivements();
  }, []);
  console.log(achivements);
  return (
    <div className="home">
      <div className="achivements">
        {achivements &&
          achivements.map((achivement) => (
            <p key={achivement._id}>{achivement.title}</p>
          ))}
      </div>
    </div>
  );
}
