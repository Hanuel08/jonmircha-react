import { useRef, createRef } from "react"

export function References() {

  // let refMenu = createRef()  <= esto es para class components, en hooks se usa useRef()

  let refMenu = useRef()
  let refMenuBtn = useRef()

  //console.log(refMenu, refMenuBtn)

  const handleToggleMenu = (e)=> {
    //const $menu = document.getElementById("menu")

    if (refMenuBtn.current.textContent === "Menu") {
      refMenu.current.style.display = "block"
      refMenuBtn.current.textContent = "Cerrar"
    } else {
      refMenu.current.style.display = "none"
      refMenuBtn.current.textContent = "Menu"
    }
  }


  return (
    <>
      <h2>References</h2>
      <button ref={refMenuBtn} onClick={handleToggleMenu}>Menu</button>
      <nav ref={refMenu} style={{ display: "none" }}>
        <a href="#">Seccion 1</a>
        <br />
        <a href="#">Seccion 2</a>
        <br />
        <a href="#">Seccion 3</a>
        <br />
        <a href="#">Seccion 4</a>
        <br /><a href="#">Seccion 5</a>
        <br />
      </nav>
    </>
  )
}