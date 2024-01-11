import { useGlobalContext } from "../context/global";

export default function Home() {
  const {allPokeData} = useGlobalContext();

  return <main>
    <div className="all-pokemon">
      {allPokeData ? allPokeData.map((pokemon) => {
        return (
        <div key={pokemon.id} className="pokemon">
          <div className="card-image">
            <img src={pokemon.sprites.other.home.front_default} alt="" />
          </div>
        </div>
        );
      }) : <h1>Loading...</h1>}
    </div>
  </main>;
}