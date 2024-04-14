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
 * tsc --outFile main.js main.ts
 */

import { Model } from './model.js';
import { View } from './view.js';
import { Controller } from './controller.js';

/**
 * Main function that creates the model, view and controller
 */
function main() : void {
  const model = new Model();
  const view = new View();
  new Controller(model, view);
}

main();