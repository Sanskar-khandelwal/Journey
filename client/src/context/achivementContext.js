import React, { useReducer } from "react";

export const achivementsContext = React.createContext();

export const achivementsReducer = (state, action) => {
  switch (action.type) {
    case "SET_ACHIVEMENTS":
      return {
        achivements: action.payload,
      };
    case "CREATE_ACHIVEMENT":
      return {
        achivements: [action.payload, ...state.achivements],
      };

    case "DELETE_ACHIVEMENT":
      return {
        achivements: state.achivements.filter(
          (a) => a._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export const AchivementsContextProvider = (props) => {
  const [state, dispatch] = useReducer(achivementsReducer, {
    achivements: null,
  });

  return (
    <achivementsContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </achivementsContext.Provider>
  );
};
