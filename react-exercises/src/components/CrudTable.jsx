import { CrudEditButton } from "./CrudEditBtn";
import { CrudDeleteButton } from "./CrudDeleteBtn";

export function CrudTable({ data, setData, setForm, editData, setEditData }){
  return (
    <>
      <div className="border-2 border-gray-200 rounded-lg px-2">
        <table className="w-4xl rounded-xl p-4">
          <thead className="">
            <tr className="">
              <th className="text-lg font-bold py-2">NAME</th>
              <th className="text-lg font-bold py-2">PHONE</th>
              <th className="text-lg font-bold py-2">EMAIL</th>
              <th className="text-lg font-bold py-2">AGE</th>
              <th className="text-lg font-bold py-2">DEPARTMENT</th>
              <th className="text-lg font-bold py-2">ACTIONS</th>
            </tr>
          </thead>

          <tbody>

            {data.toReversed().map(el => (
              <tr className="" key={crypto.randomUUID()}>
                <td className="text-center p-2" >{el.name}</td>
                <td className="text-center p-2" >{el.phone}</td>
                <td className="text-center p-2" >{el.email}</td>
                <td className="text-center p-2" >{el.age}</td>
                <td className="text-center p-2" >{el.department}</td>
                <td className="flex gap-4 p-2 items-center justify-center">
                  <CrudEditButton id={el.id} data={data} setData={setData} setForm={setForm} editData={editData} setEditData={setEditData}/>
                  <CrudDeleteButton id={el.id} data={data} setData={setData} />
                </td>
              </tr>
            ))}

          </tbody>

        </table>
      </div>
    </>
  )
}