# react-form-lite

A lightweight and beginner-friendly form state management and validation library for React.

`react-form-lite` provides a simple and intuitive API for handling forms in React applications without the complexity of large form libraries.

Inspired by libraries like react-hook-form but designed to be **smaller, simpler, and easier to understand**.

---

## ✨ Features

* ⚡ Extremely simple API
* 📦 Lightweight bundle size
* ⚛️ Works with React 18+
* 🧩 No external runtime dependencies
* ✅ Built-in validation helpers
* 🚀 Optimized re-renders
* 🧠 Beginner-friendly design

---

## 📦 Installation

Install using npm:

```bash
npm install react-form-lite
```

Or with yarn:

```bash
yarn add react-form-lite
```

---

## 🚀 Quick Example

```jsx
import React from "react";
import { useForm } from "react-form-lite";

function App() {
  const { register, handleSubmit, formState } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Name"
        {...register("name", { required: true })}
      />

      {formState.errors.name && (
        <p>{formState.errors.name}</p>
      )}

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
```

---

## 🧠 Basic Concept

`react-form-lite` manages form state internally using a lightweight store and exposes a minimal API through the `useForm` hook.

Core ideas:

* Register inputs
* Track form values
* Validate inputs
* Handle form submission

---

## 📚 API Reference

### useForm()

Creates a form controller.

```javascript
const {
  register,
  handleSubmit,
  reset,
  formState
} = useForm(options)
```

#### Options

| Option          | Description         |
| --------------- | ------------------- |
| `defaultValues` | Initial form values |

Example:

```javascript
const form = useForm({
  defaultValues: {
    email: "",
    password: ""
  }
});
```

---

### register(name, validationRules)

Registers an input field with optional validation.

```javascript
<input {...register("email", { required: true })} />
```

Validation options:

| Rule        | Description              |
| ----------- | ------------------------ |
| `required`  | Field must have a value  |
| `minLength` | Minimum character length |
| `maxLength` | Maximum character length |
| `email`     | Valid email format       |

Example:

```javascript
<input
  {...register("email", {
    required: true,
    email: true
  })}
/>
```

---

### handleSubmit(callback)

Handles form submission and passes valid data to the callback.

```javascript
<form onSubmit={handleSubmit(onSubmit)}>
```

Example:

```javascript
const onSubmit = (data) => {
  console.log(data);
};
```

---

### reset(values)

Resets the form state.

```javascript
reset()
```

Or with new values:

```javascript
reset({
  email: "",
  password: ""
})
```

---

### formState

Contains current form state.

```javascript
formState.values
formState.errors
```

Example:

```javascript
if (formState.errors.email) {
  console.log("Invalid email");
}
```

---

## 🧪 Validation Examples

### Required Field

```jsx
<input {...register("name", { required: true })} />
```

### Email Validation

```jsx
<input {...register("email", { email: true })} />
```

### Minimum Length

```jsx
<input {...register("password", { minLength: 8 })} />
```

---

## 📁 Project Structure

```
react-form-lite
│
├── src
│   ├── core
│   ├── hooks
│   └── utils
│
├── examples
├── tests
├── docs
└── package.json
```

---

## 🧪 Running Tests

Install dependencies:

```bash
npm install
```

Run tests:

```bash
npm run test
```

---

## 🛠 Development

Clone the repository:

```bash
git clone https://github.com/your-username/react-form-lite.git
```

Install dependencies:

```bash
npm install
```

Start development:

```bash
npm run build
```

---

## 🤝 Contributing

Contributions are welcome!

Please follow these steps:

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/my-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push the branch

```bash
git push origin feature/my-feature
```

5. Open a Pull Request

Please ensure:

* Code follows ESLint rules
* Tests pass
* Documentation is updated

---

## 🗺 Roadmap

Future improvements planned:

* TypeScript support
* Field arrays
* Schema validation (Zod / Yup)
* Async validation
* DevTools integration
* Form context provider

---

## 🌍 Community

If you like the project:

⭐ Star the repository
🐛 Report issues
💡 Suggest features

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Inspiration

Inspired by modern form libraries and the React ecosystem.
