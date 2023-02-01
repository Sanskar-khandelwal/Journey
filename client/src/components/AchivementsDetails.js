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
    <div>
      <div className="h-52 w-4/5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl mx-auto py-6 px-4">
        <div>
          <h4>{achivement.title}</h4>
          <p>
            <strong>disc :</strong>
            {achivement.disc}
          </p>
          <p>
            <strong>location: </strong>
            {achivement.location}
          </p>
        </div>

        <img src={`http://localhost:5000/${achivement.photo}`} />
        {console.log(`http://localhost:5000/${achivement.photo}`)}
        <p>{achivement.createdAt}</p>
        <span onClick={handleClick}>delete</span>
      </div>
    </div>
  );
};

export default AchivementDetails;
