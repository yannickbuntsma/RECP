import { useState, useEffect } from 'react'

function useFetch(url: string) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchUrl() {
    const response = await fetch(url)
    const json = await response.json()

    setData(json)
    setLoading(false)
  }

  useEffect(() => {
    fetchUrl()
  }, [])

  return [data, loading]
}

export default useFetch
