import React from 'react'
import { useForm } from 'react-form-lite'

export default function App() {
  const { register, handleSubmit, formState } = useForm()

  const onSubmit = (data) => {
    console.log('Submitted:', data)
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>React Form Lite Example</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Name"
          {...register('name', { required: true })}
        />

        {formState.errors.name && (
          <p>{formState.errors.name}</p>
        )}

        <br /><br />

        <input
          placeholder="Email"
          {...register('email', { email: true })}
        />

        {formState.errors.email && (
          <p>{formState.errors.email}</p>
        )}

        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
