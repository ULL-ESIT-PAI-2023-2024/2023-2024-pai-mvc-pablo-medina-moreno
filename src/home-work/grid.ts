/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Pablo Medina Moreno
 * @since 06 03 2024
 * @description Clase que representa el fondo de cuadrícula
 * @see {@link * https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html}
 */

/**
 * Clase que representa el fondo de cuadrícula
 */
class GridBackground {

  /**
   * Constructor de la clase GridBackground
   * @param size Tamaño de la cuadrícula
   * @param strokeStyleLight Estilo de trazo claro
   * @param strokeStyleDark Estilo de trazo oscuro
   */
  constructor(private size: number = 10, private strokeStyleLight: string = 'lightgrey', private strokeStyleDark: string = 'grey') {
    this.size = size;
    this.strokeStyleLight = strokeStyleLight;
    this.strokeStyleDark = strokeStyleDark;
  }

  /**
   * Método que dibuja la cuadrícula
   * @param context Contexto del canvas
   */
  public draw(context: CanvasRenderingContext2D) {
    const canvasWidth = context.canvas.width;
    const canvasHeight = context.canvas.height;
    context.beginPath();
    // Dibuja las lineas verticales
    for (let x = 0; x <= canvasWidth; x += this.size) {
      context.moveTo(x, 0);
      context.lineTo(x, canvasHeight);
    }
    // Dibuja las lineas horizontales
    for (let y = 0; y <= canvasHeight; y += this.size) {
      context.moveTo(0, y);
      context.lineTo(canvasWidth, y);
    }
    context.strokeStyle = this.strokeStyleLight;
    context.stroke();
    
    context.beginPath();
    // context.lineWidth = 2;
    // Dibuja las lineas verticales más gruesas
    for (let x = 0; x <= canvasWidth; x += this.size * 10) {
      context.moveTo(x, 0);
      context.lineTo(x, canvasHeight);
    }
    // Dibuja las lineas horizontales más gruesas
    for (let y = 0; y <= canvasHeight; y += this.size * 10) {
      context.moveTo(0, y);
      context.lineTo(canvasWidth, y);
    }

    context.strokeStyle = this.strokeStyleDark;
    context.stroke();
  }
}