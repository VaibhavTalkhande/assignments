/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of TodoList
    - remove(indexOfTodo): remove todo from list of TodoList
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all TodoList
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all TodoList

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(index) {
    if (index < 0 || index >= this.todos.length) {
      // Instead of throwing an error, handle invalid index gracefully
      console.warn(`Invalid index: ${index}. No item removed.`);
      return; // This prevents splicing an empty array and causing an error
    }
    this.todos.splice(index, 1);
  }

  update(index, updatedTodo) {
    if (index < 0 || index >= this.todos.length) {
      // Handle invalid index gracefully
      console.warn(`Invalid index: ${index}. No item updated.`);
      return; // This prevents accessing an out-of-bounds element
    }
    this.todos[index] = updatedTodo;
  }

  getAll() {
    return [...this.todos];
  }

  get(index) {
    if (index < 0 || index >= this.todos.length) {
      return null;
    }
    return this.todos[index];
  }

  clear() {
    this.todos = [];
  }

}

module.exports = Todo;
