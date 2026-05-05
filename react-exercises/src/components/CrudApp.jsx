import { useState } from "react"
import { CrudForm } from "./CrudForm"
import { CrudTable } from "./CrudTable"
import { Header } from "./Header"

export function CrudApp () {
  const [data, setData] = useState([
      {
        id: 8675957891,
        name: "Martin",
        phone: "123456789",
        email: "martin234@gmail.com",
        age: "30",
        department: "IT"
      },
      {
        id: 25786987,
        name: "Luffy",
        phone: "987654321",
        email: "luffy@gmail.com",
        age: "20",
        department: "Engineering"
      },
      {
        id: 356787,
        name: "Zoro",
        phone: "123456789",
        email: "zoro@gmail.com",
        age: "25",
        department: "Engineering"
      },
      {
        id: 4567867,
        name: "Sanji",
        phone: "123456789",
        email: "sanji@gmail.com",
        age: "28",
        department: "Cooking"
      },
      {
        id: 575898,
        name: "Nami",
        phone: "123456789",
        email: "nami@gmail.com",
        age: "22",
        department: "Navigator"
      },
      {
        id: 89576,
        name: "Usopp",
        phone: "123456789",
        email: "usopp@gmail.com",
        age: "19",
        department: "Sniper"
      },
      {
        id: 7586759,
        name: "Nico",
        phone: "123456789",
        email: "nico@gmail.com",
        age: "28",
        department: "Archeologist"
      },
      {
        id: 86798078,
        name: "Chopper",
        phone: "123456789",
        email: "chopper@gmail.com",
        age: "17",
        department: "Doctor"
      },
      {
        id: 965679,
        name: "Robin",
        phone: "123456789",
        email: "robin@gmail.com",
        age: "30",
        department: "Archeologist"
      },
      {
        id: 176460,
        name: "Franky",
        phone: "123456789",
        email: "franky@gmail.com",
        age: "36",
        department: "Shipwright"
      },
      {
        id: 1675471,
        name: "Brook",
        phone: "123456789",
        email: "brook@gmail.com",
        age: "90",
        department: "Musician"
      },
      {
        id: 1678762,
        name: "Jinbe",
        phone: "123456789",
        email: "jinbe@gmail.com",
        age: "48",
        department: "Helmsman"
      },
      {
        id: 1567653,
        name: "Carrot",
        phone: "123456789",
        email: "carrot@gmail.com",
        age: "17",
        department: "Navigator"
      },
      {
        id: 134345344,
        name: "Yamato",
        phone: "123456789",
        email: "yamato@gmail.com",
        age: "20",
        department: "Warrior"
      },
      {
        id: 134355,
        name: "Bonney",
        phone: "123456789",
        email: "bonney@gmail.com",
        age: "23",
        department: "Navigator"
      },
      {
        id: 16345345,
        name: "Law",
        phone: "123456789",
        email: "law@gmail.com",
        age: "26",
        department: "Doctor"
      },
      {
        id: 13453457,
        name: "Pekoms",
        phone: "123456789",
        email: "pekoms@gmail.com",
        age: "23",
        department: "Warrior"
      },
      {
        id: 3418,
        name: "Kuma",
        phone: "123456789",
        email: "kuma@gmail.com",
        age: "26",
        department: "Warrior"
      },
      {
        id: 1349,
        name: "Morgans",
        phone: "123456789",
        email: "morgans@gmail.com",
        age: "55",
        department: "Journalist"
      },
      {
        id: 205,
        name: "Morgans",
        phone: "123456789",
        email: "morgans@gmail.com",
        age: "55",
        department: "Journalist"
      },
      {
        id: 214,
        name: "Big Mom",
        phone: "123456789",
        email: "bigmom@gmail.com",
        age: "68",
        department: "Empress"
      },
      {
        id: 224,
        name: "Kaido",
        phone: "123456789",
        email: "kaido@gmail.com",
        age: "48",
        department: "Emperor"
      }
    ])

  const emptyForm = {
    id: null,
    name: "",
    phone: "",
    email: "",
    age: null,
    department: "",
    terms: false
  }

  const [form, setForm] = useState(emptyForm)


  const [editData, setEditData] = useState({
    editing: false,
    id: null
  })
  

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-12">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Top Section: Image and Form */}
        <div className="flex flex-col lg:flex-row gap-12 w-full justify-center items-center mb-16 bg-white p-8 sm:p-12 rounded-[2rem] shadow-xl shadow-slate-200/50">
          
        

          {/* Form Container */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <CrudForm data={data} setData={setData} emptyForm={emptyForm} form={form} setForm={setForm} editData={editData} setEditData={setEditData} />
          </div>

          {/* Image Container */}
          <div className="w-130 lg:w-1/2 flex justify-center items-center">
             <img 
               src="/img/form-img-1.jpg" 
               alt="Modern Abstract Dashboard" 
               className="w-128 h-158 object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-out" 
             />
          </div>

        </div>

        {/* Bottom Section: Wide Table */}
        <div className="w-full">
          <div className="bg-white p-6 sm:p-10 rounded-[2rem] shadow-xl shadow-slate-200/50 w-full overflow-x-auto">
             <div className="flex items-center justify-between mb-8 px-2">
               <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">Contacts Directory</h2>
               <span className="bg-violet-100 text-violet-800 text-sm font-semibold px-4 py-1.5 rounded-full">
                 {data.length} Total
               </span>
             </div>
             <CrudTable data={data} setData={setData} setForm={setForm} editData={editData} setEditData={setEditData} />
          </div>
        </div>

      </div>
    </div>
  )
}