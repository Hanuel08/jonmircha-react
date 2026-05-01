import { useState, useEffect } from "react"
import { useFetch } from "../hooks/useFetch.js"

export const CustomHooks = () => {
  let { data, error, loading } = useFetch("https://jsonplaceholder.typicode.com/users")

  return (
    <>
      <h2>Custom Hooks</h2>
      <h3>Loading: {JSON.stringify(loading)}</h3>
      <h3>
        Error: 
        <mark>{JSON.stringify(error)}</mark>
      </h3>
      <h3>
        Data: 
        <pre style={{ whiteSpace: "pre-wrap", fontSize: "0.2rem" }}>
          <code>
            {JSON.stringify(data)}
          </code>
        </pre>
      </h3>
    </>
  )
}