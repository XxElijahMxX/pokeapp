import { useGlobalContext } from "../context/global";

export default function Home() {
  const {allPokeData} = useGlobalContext();

  return <main>
    <div className="all-pokemon">
      {allPokeData ? allPokeData.map((pokemon) => {
        return (
        <div key={pokemon.id} className="pokemon-card">
          <div className="card-image">
            <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} 
            />
          </div>
          <div className="poke-card-info">
            <h3>{pokemon.name}</h3>
            <p>More Details &nbsp; &rarr;</p>
          </div>
        </div>
        );
      }) : <h1>Loading...</h1>}
    </div>
  </main>;
}