export function runValidation(value, rules = {}) {
  if (rules.required && !value) {
    return 'This field is required'
  }

  if (rules.minLength && value.length < rules.minLength) {
    return `Minimum length is ${rules.minLength}`
  }

  if (rules.maxLength && value.length > rules.maxLength) {
    return `Maximum length is ${rules.maxLength}`
  }

  if (rules.email) {
    const emailRegex = /^\S+@\S+\.\S+$/

    if (!emailRegex.test(value)) {
      return 'Invalid email address'
    }
  }

  return null
}
