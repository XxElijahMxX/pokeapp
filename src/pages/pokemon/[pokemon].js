import { useGlobalContext } from '@/context/global';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

function Pokemon() {
        const router = useRouter();

        const {pokemon} = router.query;
    const {getPokemon, loading, pokemon: pokemonItem } = useGlobalContext();

    console.log(pokemon);

    useEffect(() => {
        getPokemon();
    }, []);

  return <div>pokemon</div>
}

export default Pokemon