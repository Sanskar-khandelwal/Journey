import React from "react";
import { useAchivementsContext } from "../hooks/useAchivementsContext";
const AchivementDetails = ({ achivement }) => {
  const { dispatch } = useAchivementsContext();

  const handleClick = async () => {
    console.log(achivement._id);
    const response = await fetch(
      `http://localhost:5000/api/achievements/${achivement._id}`,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();
    console.log(json);
    if (response.ok) {
      dispatch({ type: "DELETE_ACHIVEMENT", payload: json });
    }
  };
  return (
    <div className="h-52 w-3/5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl mx-auto py-6 px-4">
      <h4>{achivement.title}</h4>
      <p>
        <strong>disc</strong>
        {achivement.disc}
      </p>
      <p>
        <strong>disc</strong>
        {achivement.location}
      </p>
      <p>{achivement.createdAt}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  );
};

export default AchivementDetails;
