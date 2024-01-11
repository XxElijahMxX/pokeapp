import React, { createContext, useContext, useReducer } from "react"

const GlobalContext = createContext();

//reducers
const reducer = (state, action) => {
   return state; 
}

export const GlobalProvider = ({ children }) => {

    // This is where the base URL will go


    // This is the initial state of the data being passed through
    const initialState = {
        allPKMS: [],
        PKMS: {},
        PKMdata: [],
        search: [],
        next: "",
        loading: false,
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <GlobalContext.Provider value={{
            ...state,
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};