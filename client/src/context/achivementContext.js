import React, {useReducer} from 'react'

const {Provider, Consumer} = React.createContext();

const achivementsReducer = (state, action) => {
   switch(action.type){
    case 'SET_ACHIVEMENTS':
        return {
           achivements: action.payload  
        }
        case 'CREATE_ACHIVEMENT':
            return {
                achivements: [action.payload, ...state.achivements]
            }
            default:
                return state;
   }
}

const achivementContextProvider = (props) => {

    const [state, dispatch] = useReducer(achivementsReducer, {
        achivements: null,
    });

 

    return (
        <Provider value = {{...state, dispatch}}>
            {props.children}
        </Provider>
    )
}

export {achivementContextProvider,achivementsReducer, Consumer as achivementContextConsumer, }