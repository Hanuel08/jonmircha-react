import {useState} from "react"

export function CrudForm ({ data, setData, emptyForm, form, setForm, editData, setEditData }) {
  const [errors, setErrors] = useState([])

  const handleChange = (e) => {
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

  const validate = (form) => {
    const { name, phone, email, age, terms } = form
  
    if (!name || name.length < 3 || name === false) {
      setErrors([...errors, {name: "Name must be at least 3 characters long"}])
    }
    if (!phone || phone.length < 7 || phone === false) {
      setErrors([...errors, {phone: "Phone must be at least 7 digits long"}])
    }
    if (!email || email.length < 3 || email === false) {
      setErrors([...errors, {email: "Email must be at least 3 characters long"}])
    }
    if (!age || age.length < 3 || age === false) {
      setErrors([...errors, {age: "Age must be at least 3 digits long"}])
    }
    if (!terms || terms === false) {
      setErrors([...errors, {terms: "Terms must be accepted"}])
    }
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault() 

    // const errors = validate(form)
    // if (errors.length > 0) {
    //   return
    // }
    //setForm({ ...form, id: crypto.randomUUID() })

    if (editData.editing) {
      setEditData({ editing: false, id: null })
      setForm(emptyForm)

      setData(data.map(item => {
        if (item.id === editData.id) item = { ...item, ...form }
        return item
      }))
      return
    }

    setData([...data, { ...form, id: crypto.randomUUID() }])

    //console.log(form)
    //console.log(data)
  }

  return (
    <>
      <div className="flex flex-col">
        <form className="flex flex-col items-center border-2 border-gray-200 rounded-md gap-y-8 p-6 w-xl" onSubmit={(e) => handleSubmit(e)}>

          <div className="flex flex-col gap-1">
            <label className="mr-4 text-gray-600 text-base font-bold" htmlFor="name">Name</label>
            <input 
              className="border-2 border-gray-300 text-gray-600 rounded-lg p-2 px-4 text-sm w-lg outline-none focus:border-blue-300 hover:border-blue-300" 
              type="text" name="name" id="name" placeholder="Type a name" value={form.name || ""} onChange={(e)=> handleChange(e)} />
          </div>

          <div className="flex flex-col gap-1">
            <label className="mr-4 text-gray-600 text-base font-bold" htmlFor="phone">Phone</label>
            <input 
              className="border-2 border-gray-300 text-gray-600 rounded-lg p-2 px-4 text-sm w-lg outline-none focus:border-blue-300 hover:border-blue-300" 
              type="text" name="phone" id="phone" placeholder="Type a phone number" value={form.phone || ""} onChange={(e)=> handleChange(e)} />
          </div>

          <div className="flex flex-col gap-1">
            <label className="mr-4 text-gray-600 text-base font-bold" htmlFor="email">Email</label>
            <input 
              className="border-2 border-gray-300 text-gray-600 rounded-lg p-2 px-4 text-sm w-lg outline-none focus:border-blue-300 hover:border-blue-300" 
              type="text" name="email" id="email" placeholder="Type a valid email" value={form.email || ""} onChange={(e)=> handleChange(e)} />
          </div>

          <div className="flex flex-col gap-1">
            <label className="mr-4 text-gray-600 text-base font-bold" htmlFor="age">Age</label>
            <input 
              className="border-2 border-gray-300 text-gray-600 rounded-lg p-2 px-4 text-sm w-lg outline-none focus:border-blue-300 hover:border-blue-300" 
              type="text" name="age" id="age" placeholder="Type an age" value={form.age || ""} onChange={(e)=> handleChange(e)} />
          </div>

          <div className="flex flex-col gap-1">
            <label className="mr-4 text-gray-600 text-base font-bold" htmlFor="department">Department</label>
            {/* <input className="border-2 border-gray-300 text-gray-600 rounded-lg p-2 px-4 text-sm w-lg outline-none focus:border-blue-300 hover:border-blue-300" type="text" name="department" id="department" placeholder="Type a department" onChange={(e)=> handleChange(e)} /> */}
            <select 
              className="border-2 border-gray-300 text-gray-600 rounded-lg p-2 px-4 text-sm w-lg outline-none focus:border-blue-300 hover:border-blue-300" 
              name="department" id="department" value={form.department || ""} onChange={(e) => handleChange(e)} >

              <option className="text-gray-400 text-base" value="">Select a department</option>
              <option value="IT">IT</option>
              <option value="RRHH">RRHH</option>
              <option value="Gerencia">Gerencia</option>
              <option value="Ventas">Ventas</option>
              <option value="Marketing">Marketing</option>
              <option value="Finanzas">Finanzas</option>
              <option value="Sistemas">Sistemas</option>
              <option value="Logística">Logística</option>
              <option value="Producción">Producción</option>
            </select>
          </div>

          <div className="flex gap-4 text-sm text-gray-500">
            <label htmlFor="terms">Acepto los terminos y condiciones</label>
            <input className="transform scale-140" type="checkbox" id="terms" name="terms" defaultValue={form.terms || false} onChange={(e) => handleChecked(e)} />
          </div>

          {editData.editing ? (
            <input 
              type="submit" 
              value="UPDATE CONTACT" 
              className="py-2 px-4 w-full rounded-md font-bold text-sm text-white bg-green-500 hover:bg-green-600 cursor-pointer transition-all duration-300" />
          ) : (
              <input 
              type="submit" 
              value="ADD CONTACT" 
              className="py-2 px-4 w-full rounded-md font-bold text-sm text-white bg-blue-400 hover:bg-blue-500 cursor-pointer transition-all duration-300" />
          )}

        </form>
      </div>
    </>
  )
}