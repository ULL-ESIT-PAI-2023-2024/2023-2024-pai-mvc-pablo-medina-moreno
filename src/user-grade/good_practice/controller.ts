/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Pablo Medina Moreno, Sergio Perez Lozano
 * @since 11 04 2024
 * @description Class that represents the Controller in the MVC pattern
 * @see {@link * https://es.wikipedia.org/wiki/Modelo%E2%80%93vista%E2%80%93controlador}
 */

import { User } from './model.js';
import { UserView } from './view.js';

/**
 * Controller class that updates the user's data and updates the view
 */
export class UserController {
  
  private user: User;
  private view: UserView;

  /**
   * Constructor of the UserController class
   * @param user is an instance of the User class
   * @param view is an instance of the UserView class
   */
  constructor(user: User, view: UserView) {
    this.user = user;
    this.view = view;
  }

  /**
   * Method that updates the user's name and updates the view
   * @param name is the new name of the user
   */
  public updateName(name: string): void {
    this.user.setName(name);
    this.updateView();
  }

  /**
   * Method that updates the user's grade and updates the view
   * @param grade is the new grade of the user
   */
  public updateGrade(grade: number): void {
    this.user.setGrade(grade);
    this.updateView();
  }

  /**
   * Method that updates the view
   */
  private updateView(): void {
    this.view.showUser(this.user);
  }
}