import { useEffect, useState } from 'react'
import axios from 'axios'

export interface State {
  data: any
  isLoading: boolean
}

const useFetch = (url: string) => {
  const [data, setData] = useState<State['data']>(undefined)
  const [isLoading, setIsLoading] = useState<State['isLoading']>(true)

  const fetchUrl = async () => {
    const result = await axios(url)
    setData({ data: result })
    setIsLoading(false)
  }

  useEffect(() => {
    fetchUrl()
  }, [])

  return [data, isLoading]
}

export default useFetch
