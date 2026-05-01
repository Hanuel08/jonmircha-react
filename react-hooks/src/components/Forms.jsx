import {useState} from "react"

// export function Forms() {
//   const [name, setName] = useState("")
//   const [sabor, setSabor] = useState("")
//   const [lenguaje, setLenguaje] = useState("")
//   const [terms, setTerms] = useState(false)


//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log("el formulario se ha enviado")
//     console.log(name, sabor, lenguaje, terms)
//   }

//   return (
//     <>
//       <h2>Forms</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name</label>
//         <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />

//         <p>Elige tu sabor de JS favorito</p>
//         <label htmlFor="Vanilla">Vanilla</label>
//         <input type="radio" id="sabor" value="vanilla" onChange={(e) => setSabor(e.target.value)} defaultChecked />

//         <label htmlFor="React">React</label>
//         <input type="radio" id="sabor" value="react" onChange={(e) => setSabor(e.target.value)} />

//         <label htmlFor="Angular">Angular</label>
//         <input type="radio" id="sabor" value="angular" onChange={(e) => setSabor(e.target.value)} />

//         <label htmlFor="Vue">Vue</label>
//         <input type="radio" id="sabor" value="vue" onChange={(e) => setSabor(e.target.value)} />

//         <label htmlFor="Svelte">Svelte</label>
//         <input type="radio" id="sabor" value="svelte" onChange={(e) => setSabor(e.target.value)} />

//         <p>Elige tu lenguaje de programación favorito</p>
//         <select name="lenguaje" id="" onChange={(e) => setLenguaje(e.target.value)} defaultValue="">
//           <option value="">---</option>
//           <option value="js">JavaScript</option>
//           <option value="py">Python</option>
//           <option value="java">Java</option>
//           <option value="c">C</option>
//           <option value="cpp">C++</option>
//           <option value="go">Go</option>
//           <option value="rust">Rust</option>
//           <option value="kotlin">Kotlin</option>
//           <option value="swift">Swift</option>
//           <option value="ts">TypeScript</option>
//         </select>
//         <br />

//         <label htmlFor="terms">Acepto los terminos y condiciones</label>
//         <input type="checkbox" id="terms" name="terms" onChange={(e) => setTerms(e.target.checked)} />

//         <br />
//         <input type="submit" value="Enviar" />
//       </form>
//     </>
//   )
// }


export function Forms() {
  const [form, setForm] = useState({})

  const handleChange = (e)=> {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleChecked = (e) =>{
    setForm({
      ...form,
      [e.target.name]: e.target.checked
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("el formulario se ha enviado")
    console.log(form)
  }

  return (
    <>
      <h2>Forms</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={form.name} onChange={(e) => handleChange(e)} />

        <p>Elige tu sabor de JS favorito</p>
        <label htmlFor="Vanilla">Vanilla</label>
        <input type="radio" id="sabor" name="sabor" value="vanilla" onChange={(e) => handleChecked(e)} defaultChecked />

        <label htmlFor="React">React</label>
        <input type="radio" id="sabor" name="sabor" value="react" onChange={(e) => handleChecked(e)} />

        <label htmlFor="Angular">Angular</label>
        <input type="radio" id="sabor" name="sabor" value="angular" onChange={(e) => handleChecked(e)} />

        <label htmlFor="Vue">Vue</label>
        <input type="radio" id="sabor" name="sabor" value="vue" onChange={(e) => handleChecked(e)} />

        <label htmlFor="Svelte">Svelte</label>
        <input type="radio" id="sabor" name="sabor" value="svelte" onChange={(e) => handleChecked(e)} />

        <p>Elige tu lenguaje de programación favorito</p>
        <select name="lenguaje" id="" onChange={(e) => handleChange(e)} defaultValue="">
          <option value="">---</option>
          <option value="js">JavaScript</option>
          <option value="py">Python</option>
          <option value="java">Java</option>
          <option value="c">C</option>
          <option value="cpp">C++</option>
          <option value="go">Go</option>
          <option value="rust">Rust</option>
          <option value="kotlin">Kotlin</option>
          <option value="swift">Swift</option>
          <option value="ts">TypeScript</option>
        </select>
        <br />

        <label htmlFor="terms">Acepto los terminos y condiciones</label>
        <input type="checkbox" id="terms" name="terms" onChange={(e) => handleChecked(e)} />

        <br />
        <input type="submit" value="Enviar" />
      </form>
    </>
  )
}