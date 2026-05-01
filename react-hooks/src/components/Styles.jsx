import "./Styles.css"
import "./Styles.scss"
import moduleStyles from "./Styles.module.css"

export function Styles() {
  let myStyles = {
    borderRadius: ".5rem", 
    margin: "2rem auto",
    maxWidth: "50%"
  }

  return (
    <>
      <section className="styles">
        <h2>Styles</h2>
        <h3 className="bg-react">Agregando estilos con CSS, Sass y CSS Modules</h3>
        <h3 className="bg-react" style={{borderRadius: ".25rem", margin: "1rem"}}>Estilos en linea (inline styles)</h3>
        <h3 className="bg-react" style={myStyles}>Estilos en linea 2 (inline styles)</h3>
        <h3 className="bg-react">
          Agregando Normalize
          <br />
          <code>@import-normalize;</code>
        </h3>
        <h3 className={moduleStyles.success}>Esto es un mensaje de styled modules</h3>
        <h3 className={moduleStyles.error}>Esto es un mensaje de styled modules</h3>
        <h3 className="bg-sass">Esto es un mensaje de styled sass</h3>
      </section>
    </>
  )
}