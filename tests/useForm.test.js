import { describe, it, expect } from 'vitest'
import { runValidation } from '../src/utils/runValidation.js'

describe('useForm validation', () => {
  it('should validate required fields', () => {
    const error = runValidation('', { required: true })

    expect(error).toBe('This field is required')
  })
})
