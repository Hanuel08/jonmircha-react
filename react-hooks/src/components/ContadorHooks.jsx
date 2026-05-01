import { useState } from "react"

export function ContadorHooks(props) {
  const [contador, setContador] = useState(0)

  const sumar = () => setContador(contador + 1)
  const restar = () => setContador(contador - 1)
  
  
  return (
    <div>
      <h2>Hooks - useState</h2>
      <nav>
        <h2>{contador}</h2>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
    </div>
  )
}

