import { IconTrash } from "@tabler/icons-react"

export function CrudDeleteButton({ id, data, setData }) {

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this record?")
    if (!confirmDelete) return
    setData(data.filter(item => item.id !== id))
  }

  return (
    <button onClick={() => handleDelete(id)} className="bg-red-500 rounded-sm text-white p-2 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-red-600">
      <IconTrash stroke={2} />
    </button>
  )
}