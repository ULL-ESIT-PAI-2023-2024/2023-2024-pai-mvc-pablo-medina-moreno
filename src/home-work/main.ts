/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Pablo Medina Moreno
 * @since 18 03 2024
 * @description Programa Cliente que permite al usuario seleccionar la función a visualizar en un gráfico
 *              Compilar: tsc --outfile main.js main.ts
 * @see {@link * https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html}
 */

// ///<reference path='model.ts'/>
// ///<reference path='view.ts'/>
// ///<reference path='controller.ts'/>

import { LissajousModel } from './model.js';
import { LissajousView } from './view.js';
import { LissajousController } from './controller.js';


/**
 * Función principal que crea el modelo, la vista y el controlador
 */
function main() {
  const model = new LissajousModel();
  const view = new LissajousView();
  new LissajousController(model, view);
}

main();
