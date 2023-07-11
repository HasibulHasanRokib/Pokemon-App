const PokemonCard = ({pokemon,handleId}) => {
  return (
    <>
      <div
       
        className="card"
        onClick={() => {
          handleId(pokemon.id);
        }}
        >
        <div className="card-no">{pokemon.id}</div>

        <img
          src={pokemon.sprites.other.dream_world.front_default}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{pokemon.name}</h5>
          {/* {p.abilities.map((pok,i)=>{
            return <p key={i}>{pok.ability.name}</p>
            })} */}
          <div className="divP">
            {pokemon.types.map((itemP, i) => (
              <span key={i} className="card-type">{itemP.type.name}</span>
            
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;

  {/* <p key={i} className="card-type">
                {itemP.type.name}
              </p> */}