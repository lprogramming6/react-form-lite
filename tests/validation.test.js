import { describe, it, expect } from 'vitest'
import { runValidation } from '../src/utils/runValidation.js'

describe('validators', () => {
  it('validates email', () => {
    const error = runValidation('test', { email: true })

    expect(error).toBe('Invalid email address')
  })

  it('passes valid email', () => {
    const error = runValidation('test@test.com', { email: true })

    expect(error).toBe(null)
  })
})
