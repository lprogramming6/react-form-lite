'use client'

import { useForm } from 'react-form-lite'

export default function Page() {
  const { register, handleSubmit, formState } = useForm()

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <input
        placeholder="Email"
        {...register('email', { required: true, email: true })}
      />

      {formState.errors.email && (
        <p>{formState.errors.email}</p>
      )}

      <button type="submit">Submit</button>
    </form>
  )
}
