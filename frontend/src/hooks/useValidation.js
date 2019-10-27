import { useState, useCallback } from 'react'

const useValidation = (rules) => {
  const [errors, setErrors] = useState([])

  const validate = useCallback((value) => {
    const errorList = Object.entries(rules).reduce((errorAggr, [errorKey, verify]) => {
      return verify(value) ? errorAggr : errorAggr.concat(errorKey)
    }, [])

    setErrors(errorList)
    return errorList.length === 0
  }, [rules])

  return [errors, validate]
}

export default useValidation