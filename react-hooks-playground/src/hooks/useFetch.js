import { useState, useEffect } from 'react'

/**
 * Simple custom hook to fetch JSON data:
 * - accepts a URL and returns loading/data/error
 * - demonstrates how hooks compose to create reusable logic
 */
export default function useFetch(url){
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    fetch(url)
      .then(res => {
        if(!res.ok) throw new Error('Network response was not ok')
        return res.json()
      })
      .then(json => {
        if(!cancelled){
          setData(json)
        }
      })
      .catch(err => {
        if(!cancelled) setError(err)
      })
      .finally(() => {
        if(!cancelled) setLoading(false)
      })

    return () => { cancelled = true } // cleanup (avoid setting state after unmount)
  }, [url])

  return { data, loading, error }
}
