let nextTodoId = 0
export const addProduct = (id, text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}
