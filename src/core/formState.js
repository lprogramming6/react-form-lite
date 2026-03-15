export function getFormState(store) {
  return {
    values: store.getValues(),
    errors: store.getErrors()
  }
}
