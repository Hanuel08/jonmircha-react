import { IconEditFilled } from "@tabler/icons-react"

export function CrudEditButton({ id, data, setForm, setEditData }) {

  const handleEdit = () => {
    setEditData({ id, editing: true })
    const editItem = data.find(item => item.id === id)
    setForm(editItem)
  } 

  return (
    <button onClick={() => handleEdit()} className="bg-green-500 rounded-sm text-white p-2 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-green-600">
      <IconEditFilled stroke={2} />
    </button>
  )
}