
const PopUpCard = ({popUp,setShow}) => {
  return (
    <>
    <div className="pop__up">
    <div className="up__display shadow">
    <div className="back__btn">
     <button
     className="btn__back"
        onClick={() => {
          setShow(false);
        }}
      >
       <i className="fa-solid fa-xmark"></i>
      </button>
     </div>
      <img
        src={popUp.sprites.other.dream_world.front_default}
        className="info__img"
        alt="..."
      />
      {/* <div className="info__body"> */}
      <p className="info__id">#{popUp.id}</p>
      <p className="info__title">{popUp.name}</p>
      <p className="type__body" >
        
        {popUp.types.map((itemT, i) => (
          <p className="info__type" key={i}>{itemT.type.name}</p>
        ))}
      </p>
      <p className="info__others">
        Stats: hp, attack, defense, special-attack, special-defense, speed
      </p>
      <p className="info__others">Height: {popUp.height * 10}cm</p>
      <p className="info__others">Weight: {popUp.weight / 10}kg</p>
      <p className="info__others">
        Abilities:
        {popUp.abilities.map((itemA, i) => (
          <span key={i}> {itemA.ability.name},</span>
        ))}
      </p>
      </div>


      {/* <p>Some Moves: {popUp.moves.map((itemM,i)=> <span key={i}>{itemM.move.name},</span>)}</p> */}
    </div>
    </>
  )
}

export default PopUpCard
