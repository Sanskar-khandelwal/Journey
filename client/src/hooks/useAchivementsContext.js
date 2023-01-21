import {achivementsContext} from '../context/achivementContext';
import {useContext} from 'react';

export const useAchivementsContext= () => {
    const context = useContext(achivementsContext);
     if(!context){
        throw Error("useAchivementContext must be used inside an achivementContextProvider")
     }
    return context;
}