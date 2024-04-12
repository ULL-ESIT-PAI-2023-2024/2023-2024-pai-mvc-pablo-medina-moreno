/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Pablo Medina Moreno
 * @since 06 03 2024
 * @description Clase que representa el controlador de la aplicación
 * @see {@link * https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html}
 */

///<reference path='model.ts'/>
///<reference path='view.ts'/>


/**
 * @brief Clase LissajousController que representa el controlador de la aplicación
 */
class LissajousController {

  /**
   * @brief Atributos de la clase LissajousController
   * @private model Modelo de la aplicación
   * @private view Vista de la aplicación
   */
  private model: LissajousModel;
  private view: LissajousView;

  /**
   * @brief Constructor de la clase LissajousController
   * @param model Modelo de la aplicación
   * @param view Vista de la aplicación
   * @param phiAnimationInterval Intervalo de animación de la fase
   */
  constructor(model: LissajousModel, view: LissajousView) {
    this.model = model;
    this.view = view;
    this.init();
  }

  /**
   * @brief Método privado que inicializa la aplicación
   */
  private init(): void {
    this.model.bindLissajousChanged(this.updateView);
    this.updateView(this.model.getAmplitudeX(), this.model.getAmplitudeY(), this.model.getFrequencyX(), this.model.getFrequencyY(), this.model.getPhase());
    this.handleSettersModel();
  }

  /**
   * @brief Método privado que maneja los eventos de la aplicación y actualiza el modelo
   */
  private handleSettersModel(): void {
    document.addEventListener('input-changed', (event: CustomEvent) => {
      const action = event.detail.action;
      const value = event.detail.value;
      this.updateModel(action, value);
    });

    document.addEventListener('animatePhi', (event: CustomEvent) => {
      if (event.detail.value) {
        this.view.startPhiAnimation();
      } else {
        this.view.stopPhiAnimation();
      }
    });
  }

  /**
   * @brief Método privado que actualiza el modelo
   * @param action Acción a realizar
   * @param value Valor a actualizar
   */
  private updateModel(action: string, value: number): void {
    switch (action) {
      case 'setAmplitudeX':
        this.model.setAmplitudeX(value);
        break;
      case 'setAmplitudeY':
        this.model.setAmplitudeY(value);
        break;
      case 'setFrequencyX':
        this.model.setFrequencyX(value);
        break;
      case 'setFrequencyY':
        this.model.setFrequencyY(value);
        break;
      case 'setPhase':
        this.model.setPhase(value);
        break;
    }
  }

  /**
   * @brief Método privado que actualiza la vista
   * @param amplitudeX Amplitud en el eje X
   * @param amplitudeY Amplitud en el eje Y
   * @param frequencyX Frecuencia en el eje X
   * @param frequencyY Frecuencia en el eje Y
   * @param phase Fase de la función
   */
  private updateView = (amplitudeX: number, amplitudeY: number, frequencyX: number, frequencyY: number, phase: number): void => {
    this.view.draw(amplitudeX, amplitudeY, frequencyX, frequencyY, phase);
  }
}