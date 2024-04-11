/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Pablo Medina Moreno
 * @since 11 04 2024
 * @description Class that represents the Controller in the MVC pattern
 * @see {@link * https://es.wikipedia.org/wiki/Modelo%E2%80%93vista%E2%80%93controlador}
 */

/// <reference path="model.ts" />
/// <reference path="view.ts" />

/**
 * Class that represents the Controller in the MVC pattern
 */
class Controller {
  /**
   * Model and View properties
   */
  private model: Model;
  private view: View;

  /**
   * Constructor of the Controller class
   * @param model is an instance of the Model class
   * @param view is an instance of the View class
   */
  constructor(model: Model, view: View) {
    this.model = model;
    this.view = view;

    // Explicit this binding
    this.model.bindTodoListChanged(this.onTodoListChanged);
    this.view.bindAddTodo(this.handleAddTodo.bind(this));
    this.view.bindDeleteTodo(this.handleDeleteTodo.bind(this));
    this.view.bindToggleTodo(this.handleToggleTodo.bind(this));

    // Show initial todos
    this.onTodoListChanged(this.model.getTodos());
  }

  /**
   * Method that displays the todos
   * @param todos is an array of todos
   */
  private onTodoListChanged = (todos: { id: number; text: string; complete: boolean }[]) : void => {
    this.view.displayTodos(todos);
  }

  /**
   * Method that adds a todo to the model
   * @param todoText is the text of the todo
   */
  private handleAddTodo = (todoText: string) : void => {
    this.model.addTodo(todoText);
  }

  /**
   * Method that deletes a todo from the model
   * @param id is the id of the todo
   */
  private handleDeleteTodo = (id: number) : void => {
    this.model.deleteTodo(id);
  }

  /**
   * Method that toggles a todo from the model
   * @param id is the id of the todo
   */
  private handleToggleTodo = (id: number) : void => {
    this.model.toggleTodo(id);
  }
}
