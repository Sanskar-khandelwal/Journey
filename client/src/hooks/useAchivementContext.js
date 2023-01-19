import {achivementContext} from '../context/achivementContext';
import {useContext} from 'react';

export const useAchivementContext= () => {
    const context = useContext(achivementContext);
     if(!context){
        throw Error("useAchivementContext must be used inside an achivementContextProvider")
     }
    return context;
}