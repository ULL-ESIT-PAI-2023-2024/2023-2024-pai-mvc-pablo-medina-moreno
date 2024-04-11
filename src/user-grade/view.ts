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

import { User } from './model';

/**
 * Class that represents the UserView in the MVC pattern
 */
export class UserView {

  /**
   * Constructor of the UserView class
   */
  constructor() {}
  
  /**
   * Method that shows the user's data
   * @param user is an instance of the User class
   */
  public showUser(user: User): void {
    console.log(`Name: ${user.getName()}, Grade: ${user.getGrade()}`);
  }
}