import { useState, useCallback } from 'react'

const useApiCall = (service) => {
  const [isLoading, setLoading] = useState(false)
  const [isSuccess, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  const call = useCallback(async (params) => {
    try {
      setLoading(true)
      setSuccess(false)
      setError(null)
      const { data } = await service(params)
      setLoading(false)
      setSuccess(true)
      return data

    } catch (error) {
      setLoading(false)
      setError(error)
      return null
    }
  }, [])

  return { isLoading, isSuccess, error, call }
}

export default useApiCall