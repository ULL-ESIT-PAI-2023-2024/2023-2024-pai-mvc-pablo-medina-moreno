/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Pablo Medina Moreno, Sergio Perez Lozano
 * @since 11 04 2024
 * @description Class that represents the Model in the MVC pattern
 * @see {@link * https://es.wikipedia.org/wiki/Modelo%E2%80%93vista%E2%80%93controlador}
 */

/**
 * Class that represents the Model in the MVC pattern
 */
export class Model {

  /**
   * Array of todos, each todo is an object with an id, text and complete property
   */
  private todos: { id: number; text: string; complete: boolean }[];

  /**
   * Constructor of the Model class, initializes the todos array with two objects
   */
  constructor() {
    this.todos = [
      {id: 1, text: 'Run a marathon', complete: false},
      {id: 2, text: 'Plant a garden', complete: false},
    ]
  }

  /**
   * Function that returns the todos array
   * @returns an array of todos
   */
  public getTodos(): { id: number; text: string; complete: boolean }[] {
    return this.todos;
  }

  /**
   * Function that binds the onTodoListChanged function to a callback
   * @param callback is a function that takes an array of todos as a parameter
   */
  public bindTodoListChanged(callback: (todos: { id: number; text: string; complete: boolean }[]) => void): void {
    this.onTodoListChanged = callback;
  }

  /**
   * Function that calls the callback function with the todos array
   * @param todos is an array of todos
   */
  private onTodoListChanged(todos: { id: number; text: string; complete: boolean }[]): void {
    // This is a placeholder for a function that would be overwritten by the Controller
  }

  /**
   * Function that adds a todo to the todos array
   * @param todoText is the text of the todo
   */
  public addTodo(todoText: string): void {
    const todo = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      text: todoText,
      complete: false,
    };

    this.todos.push(todo);

    this.onTodoListChanged(this.todos);
  }

  /**
   * Function that deletes a todo from the todos array
   * @param id is the id of the todo to be deleted
   */
  public deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);

    this.onTodoListChanged(this.todos);
  }

  /**
   * Function that toggles the complete property of a todo
   * @param id is the id of the todo to be toggled
   */
  public toggleTodo(id: number): void {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { id: todo.id, text: todo.text, complete: !todo.complete } : todo
    );

    this.onTodoListChanged(this.todos);
  }

}