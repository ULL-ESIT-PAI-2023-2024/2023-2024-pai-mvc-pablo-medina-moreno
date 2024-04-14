/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Pablo Medina Moreno, Sergio Perez Lozano
 * @since 11 04 2024
 * @description Client-side MVC pattern implementation
 * @see {@link * https://es.wikipedia.org/wiki/Modelo%E2%80%93vista%E2%80%93controlador}
 */

import { UserController } from "./controller.js";
import { UserModel } from "./model.js";
import { UserView } from "./view.js";

/**
 * Main function that creates the model, view and controller
 */
function main() {
  const userModel = new UserModel("Ricardo", 4.8);
  const userView = new UserView();
  const userController = new UserController(userModel, userView);

  // Updating the user's data through the controller
  userController.updateName("Pedro");
  userController.updateGrade(5);
}

main();