import PokemonCard from "./PokemonCard";

const PokemonData = ({pokemonData,handleId}) => {
  return (
  <div className="all">
  {pokemonData && pokemonData.map((pokemon)=>{
    return <PokemonCard key={pokemon.id} pokemon={pokemon} handleId={handleId}/>
  })}
  </div>
  )
}

export default PokemonData
