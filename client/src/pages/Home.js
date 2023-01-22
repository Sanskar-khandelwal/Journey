import { useEffect } from "react";
import { useAchivementsContext } from "../hooks/useAchivementsContext";

//component
import AchivementDetails from "../components/AchivementsDetails";
import AchivementForm from "../components/AchivementForm";

export default function Home() {
  const { achivements, dispatch } = useAchivementsContext();

  useEffect(() => {
    const fetchAchivements = async () => {
      const response = await fetch("http://localhost:5000/api/achievements");

      const json = await response.json();
      
      if (response.ok) {
        dispatch({ type: "SET_ACHIVEMENTS", payload: json });
      }
    };
    fetchAchivements();
  }, []);

  return (
    <div className="home">
      <div className="achivements">
        {achivements &&
          achivements.map((achivement) => (
            <AchivementDetails key={achivement._id} achivement={achivement} />
          ))}
      </div>
      <AchivementForm />
    </div>
  );
}
