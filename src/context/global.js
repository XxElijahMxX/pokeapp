import React, { createContext, useContext, useEffect, useReducer, useState } from "react"

const GlobalContext = createContext();

//actions
const LOADING = 'LOADING';
const getPKM = 'getPKM';
const getAllPKM = 'getAllPKM';
const getAllPKMdata = 'getAllPKMdata';
const getSearch = 'getSearch';
const getPKMDB = 'getPKMDB';
const NEXT = 'NEXT';

//reducers
const reducer = (state, action) => {

    switch (action.type) {
        case LOADING:
            return {...state, loading: true}

            case getAllPKM:
                return { ...state, allPKM: action.payload, loading: false };
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
    const [allPokeData, setAllPokeData] = useState([]);

    const allPKM = async () => {
        dispatch({ type: 'LOADING'})
        const res = await fetch (`${baseUrl}pokemon?limit=20`);
        const data = await res.json();
        dispatch({ type: 'getAllPKM', payload: data.results });

        // fetch pokemon data
        const allPokeData = [];

        for (const pokemon of data.results) {
            console.log(pokemon);
            const pokemonResults = await fetch(pokemon.url);
            const pokeData = await pokemonResults.json();
            allPokeData.push(pokeData)
        }

        setAllPokeData(allPokeData);
    };

    useEffect(() => {
        allPKM();
    }, []);

    return (
        <GlobalContext.Provider value={{
            ...state,
            allPokeData,
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};