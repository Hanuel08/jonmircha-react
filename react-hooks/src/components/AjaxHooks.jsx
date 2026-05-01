import { useState, useEffect } from "react";

function Pokemon({key, name, avatar}) {
  return (
    <figure key={key}>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  )
}

export function AjaxHooks() {
  const [pokemons, setPokemons] = useState([])

  useEffect(()=> {
    const getPokemons = async (url)=> {
      try {
        let res = await fetch(url),
          json = await res.json();

        json.results.forEach(async (el)=> {
          let res = await fetch(el.url),
            json = await res.json();

          let { id, name, sprites: { front_default} } = json;
          let randomID = Math.floor(Math.random() * (10000000 * id));
          
          let pokemon = {id: randomID, name, avatar: front_default};

          setPokemons((pokemons) => [...pokemons, pokemon])
        }) 
      } catch (error) {
        console.error("Un error ha ocurrido al realizar la peticion de pokemons: ", error.message)
      }
    }

    getPokemons("https://pokeapi.co/api/v2/pokemon")
    
  }, [])



  // useEffect(()=> {
  //   const URL = "https://pokeapi.co/api/v2/pokemon"

  //   fetch(URL)
  //     .then(res => res.json())
  //     .then(data => {

  //       data.results.forEach(el => {
  //         fetch(el.url)
  //           .then(res => res.json())
  //           .then(data => {
  //             let { id, name, sprites: { front_default} } = data
  //             let randomID = Math.floor(Math.random() * (10000000 * id))
              
  //             let pokemon = {id: randomID, name, avatar: front_default}

  //             setPokemons((pokemons) => [...pokemons, pokemon])
  //           })
  //       })

  //     })
    
  // }, [])
  
  return (
    <>
      <h2>Ajax Hooks</h2>
      {
        pokemons.length === 0 ?
        (<h3>Cargando...</h3>)
        :
        (
          pokemons.map(el => (
            <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
          ))
        )
      }
    </>
  )
}