# API Documentation

## useForm

Main hook for managing form state.

### Usage

const { register, handleSubmit, reset, formState } = useForm()
register(name, rules)

Registers an input.

Example:

<input {...register("email", { required: true })} />
handleSubmit(callback)

Handles form submission.

reset(values)

Resets form state.

formState

Contains:

formState.values
formState.errors

---

# 13. `docs/architecture.md`

# Architecture

react-form-lite is built with a small internal store.

Core components:

## Store

Handles form values and errors.

## Hook

The useForm hook connects React components to the store.

## Validation

Simple rule-based validation system.

## Goals

- Minimal bundle size
- Simple architecture
- Easy to maintain
