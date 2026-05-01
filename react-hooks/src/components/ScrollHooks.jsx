import { useState, useEffect } from "react";

export function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);
  
  //Cada vez que hay un cambio en el render se ejecuta este useEffect (no es buena practica)
  useEffect(()=> {
    console.log("Moviendo el scroll")

    const detectarScroll = () => setScrollY(window.pageYOffset)

    addEventListener("scroll", detectarScroll)

    return () => {
      removeEventListener("scroll", detectarScroll)
      console.log("Fase de desmontaje del scrollHooks")
    }
  })
  

  //Esta es la forma correcta de hacerlo. Asi solo se ejecuta cuando cambia el scrollY
  useEffect(()=> {
    console.log("Moviendo el scroll 2")

    const detectarScroll = () => setScrollY(window.pageYOffset)

    addEventListener("scroll", detectarScroll)
  }, [scrollY])


  //Con un array vacio [] solo se ejecuta una vez (fase de montaje)
  useEffect(() => {
    console.log("Fase de montaje")
  }, [])


  useEffect(()=> {

    return ()=> {
      console.log("Fase de desmontaje")
    }
  })



  return (
    <>
      <h2>Hooks - useEffect (y ciclo de vida)</h2>
      <p>Scroll Y del Navegador: {scrollY}px</p>
    </>
  )
}