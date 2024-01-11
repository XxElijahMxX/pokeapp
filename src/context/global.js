import React, { createContext, useContext, useEffect, useReducer } from "react"

const GlobalContext = createContext();

//actions
const LOADING = 'LOADING';

//reducers
const reducer = (state, action) => {

    switch (action.type) {
        case LOADING:
            return {...state, loading: true}
    }
   return state; 
}

export const GlobalProvider = ({ children }) => {

    // This is where the base URL will go
    const baseUrl = 'https://pokeapi.co/api/v2/'


    // This is the initial state of the data being passed through
    const initialState = {
        allPKM: [],
        PKM: {},
        PKMdata: [],
        search: [],
        next: "",
        loading: false,
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const allPKM = async () => {
        dispatch({ type: 'LOADING'})
        const res = await fetch (`${baseUrl}pokemon?limit=151`);
        const data = await res.json();
        console.log(data);
    };

    useEffect(() => {
        allPKM();
    }, []);

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