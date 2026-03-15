export function createFormStore(initialValues = {}) {
  let values = { ...initialValues }
  let errors = {}
  const listeners = new Set()

  const notify = () => {
    listeners.forEach((listener) => listener())
  }

  return {
    getValues() {
      return values
    },

    setValue(name, value) {
      values[name] = value
      notify()
    },

    getErrors() {
      return errors
    },

    setError(name, error) {
      errors[name] = error
      notify()
    },

    clearError(name) {
      delete errors[name]
      notify()
    },

    reset(newValues = {}) {
      values = { ...newValues }
      errors = {}
      notify()
    },

    subscribe(listener) {
      listeners.add(listener)
      return () => listeners.delete(listener)
    }
  }
}
