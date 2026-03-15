import { useRef, useState, useEffect } from 'react'
import { createFormStore } from '../core/createFormStore.js'
import { runValidation } from '../utils/runValidation.js'

export function useForm({ defaultValues = {} } = {}) {
  const storeRef = useRef()

  if (!storeRef.current) {
    storeRef.current = createFormStore(defaultValues)
  }

  const store = storeRef.current
  const [, forceUpdate] = useState({})

  useEffect(() => {
    return store.subscribe(() => {
      forceUpdate({})
    })
  }, [store])

  const register = (name, rules = {}) => {
    return {
      name,
      value: store.getValues()[name] || '',

      onChange: (e) => {
        const value = e.target.value
        store.setValue(name, value)

        const error = runValidation(value, rules)

        if (error) {
          store.setError(name, error)
        } else {
          store.clearError(name)
        }
      }
    }
  }

  const handleSubmit = (callback) => {
    return (e) => {
      e.preventDefault()

      const values = store.getValues()
      const errors = store.getErrors()

      if (Object.keys(errors).length === 0) {
        callback(values)
      }
    }
  }

  const reset = (values = {}) => {
    store.reset(values)
  }

  return {
    register,
    handleSubmit,
    reset,
    formState: {
      values: store.getValues(),
      errors: store.getErrors()
    }
  }
}
