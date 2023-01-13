import React from "react";

const achivementDetails = ({ achivement }) => {
  return (
    <div className="achivement-details">
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
    </div>
  );
};

export default achivementDetails;
