import { useState, useEffect } from "react"

export function useFetch(url = "") {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    const getData = async ()=> {
      try {
        if (url === "") throw { err: true, status: 404, statusText: "Debes pasar una URL para realizar la peticion"}
        let res = await fetch(url)

        if (!res.ok) throw { err: true, status: res.status, statusText: res.statusText || "Ocurrio un error"}

        let data = await res.json()

        setLoading(false)
        setError({ err: false })
        setData(data)
      } catch (err) {
        setLoading(false)
        setError(err)
      }
    }
    
    getData()
  }, [url])

  return { data, error, loading }
}