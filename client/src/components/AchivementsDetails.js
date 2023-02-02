//react icons
import { RiDeleteBin6Line } from "react-icons/ri";
import React from "react";
import { useAchivementsContext } from "../hooks/useAchivementsContext";
const AchivementDetails = ({ achivement }) => {
  const date = new Date(achivement.createdAt);
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
    <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl mx-auto py-6 px-14 my-10 text-white w-5/6 m-auto">
      <div className="flex justify-between align-middle">
        <div>
          <h4 className="text-3xl">{achivement.title}</h4>
          <p className="text-xl mt-4">{achivement.disc}</p>
          <p className="text-lg mt-2">{achivement.location}</p>
        </div>
        <img
          alt="dynamic image set by the user"
          src={`http://localhost:5000/${achivement.photo}`}
          className="w-56 h-56 rounded-2xl object-cover overflow-hidden"
        />
      </div>
      <div className="flex justify-between align-middle mt-5">
        <p>{date.toDateString()}</p>
        <RiDeleteBin6Line
          className="cursor-pointer transition ease-in-out hover:scale-125"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default AchivementDetails;
