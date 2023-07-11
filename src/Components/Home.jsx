import { useEffect, useState } from "react";
import Loading from "./Loading";
import PokemonData from "./PokemonData";
import PopUpCard from "./PopUpCard";

const Home = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1281`)
  // ("https://pokeapi.co/api/v2/pokemon");
  // const [nextUrl, setNextUrl] = useState();
  // const [prevUrl, setPrevUrl] = useState();

  const getData = async () => {
    try {
     
      let res = await fetch(url);
      let data = await res.json();
      const promises=data.results.map(async(item)=>{
        let res = await fetch(item.url);
        let data = await res.json();
        console.log(data.length)
        return data;
      })
      const results=await Promise.all(promises)
      setPokemonData(results)
      // setNextUrl(data.next);
      // setPrevUrl(data.previous);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getData();
      setLoading(false);
    }, 1000);
  }, [url]);


  const [currentPage,setCurrentPage]=useState(1)
  const recordsPerPage=200;
  const lastIndex=currentPage * recordsPerPage;
  const firstIndex=lastIndex-recordsPerPage;
  const records=pokemonData.slice(firstIndex,lastIndex);
  const nPage=Math.ceil(pokemonData.length / recordsPerPage)
  const numbers=[...Array(nPage + 1).keys()].slice(1)

 
    const changeCPage=(id)=>{
    setCurrentPage(id)
    }
   


  const [popUp, setPopUp] = useState({});
  const [show, setShow] = useState(false);

  const handleId = async (id) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    let res = await fetch(url);
    let dataTwo = await res.json();
    setPopUp(dataTwo);
    console.log(dataTwo);
    setShow(true);
  };

  const [query,setQuery]=useState();
  const [searchShow,setSearchShow]=useState(false)
 
  const pokemonFilter=pokemonData.filter((pok)=>pok.name.toLowerCase().includes(query)).map((pok)=>{
    return <div className="search__item" key={pok.id}><p className="search__text" onClick={()=>{handleId(pok.id)}}>{pok.name}</p></div>    
  })

 const handleSearch=(e)=>{
  setQuery(e.target.value)
  setSearchShow(true)
 }






  return (
    <>
      <h1> React Pokemon Application</h1>

      {show && <PopUpCard popUp={popUp} setShow={setShow} />}

      {searchShow && (
        <>
        <div className="search__body"> 
        <p>{pokemonFilter.slice(0,10)}</p>
        </div>
        </>
       )}

     
      <div className="app__body" onClick={()=>{setSearchShow(false)}}>
      <div className="search">
      <input type="text" className="search__bar" placeholder="Search" onChange={handleSearch} />
      </div>

      <nav  id='page-no'>
      <ul className="paginationM">
      {
      numbers.map((n,i)=>(
        <li className={`page-item ${currentPage === n?'active':''}`} key={i}>    
        <a href='#' className='page-link' onClick={()=>changeCPage(n)}>{n}</a>
        </li>
       ))
       }

      </ul>
      </nav>


      

         {loading && <Loading />}
         <PokemonData pokemonData={records} handleId={handleId}
           />
      </div>
    </>
  );
};

export default Home;
