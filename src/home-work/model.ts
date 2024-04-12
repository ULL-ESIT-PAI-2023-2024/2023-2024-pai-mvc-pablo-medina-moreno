/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Pablo Medina Moreno
 * @since 08 03 2024
 * @description Clase que representa el modelo de la aplicación
 * @see {@link * https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html}
 */


/**
 * Clase que representa el modelo de la aplicación
 * @class LissajousModel 
 */
class LissajousModel {
  
  /**
   * @param amplitudeX Amplitud en el eje X
   * @param amplitudeY Amplitud en el eje Y
   * @param frequencyX Frecuencia en el eje X
   * @param frequencyY Frecuencia en el eje Y
   * @param phase Fase de la función
   */
  private amplitudeX: number;
  private amplitudeY: number;
  private frequencyX: number;
  private frequencyY: number;
  private phase: number;
  
  /**
   * Constructor de la clase LissajousModel
   */
  constructor(amplitudeX: number = 100, amplitudeY: number = 100, frequencyX: number = 3, frequencyY: number = 2, phase: number = 0) {
    this.amplitudeX = amplitudeX;
    this.amplitudeY = amplitudeY;
    this.frequencyX = frequencyX;
    this.frequencyY = frequencyY;
    this.phase = phase;
  }
  
  /**
   * Setter de la amplitud en el eje X
   * @param value Amplitud en el eje X
   */
  public setAmplitudeX(value: number): void {
    this.amplitudeX = value;
    this.lissajousChanged(this.amplitudeX, this.amplitudeY, this.frequencyX, this.frequencyY, this.phase);
  }

  /**
   * Setter de la amplitud en el eje Y
   * @param value Amplitud en el eje Y
   */
  public setAmplitudeY(value: number): void {
    this.amplitudeY = value;
    this.lissajousChanged(this.amplitudeX, this.amplitudeY, this.frequencyX, this.frequencyY, this.phase);
  }

  /**
   * Setter de la frecuencia en el eje X
   * @param value Frecuencia en el eje X
   */
  public setFrequencyX(value: number): void {
    this.frequencyX = value;
    this.lissajousChanged(this.amplitudeX, this.amplitudeY, this.frequencyX, this.frequencyY, this.phase);
  }
  
  /**
   * Setter de la frecuencia en el eje Y
   * @param value Frecuencia en el eje Y
   */
  public setFrequencyY(value: number): void {
    this.frequencyY = value;
    this.lissajousChanged(this.amplitudeX, this.amplitudeY, this.frequencyX, this.frequencyY, this.phase);
  }
  
  /**
   * Setter de la fase de la función
   * @param value Fase de la función
   */
  public setPhase(value: number): void {
    this.phase = value;
    this.lissajousChanged(this.amplitudeX, this.amplitudeY, this.frequencyX, this.frequencyY, this.phase);
  }
  
  /**
   * Getter de la amplitud en el eje X
   * @return Amplitud en el eje X
   */
  public getAmplitudeX(): number {
    return this.amplitudeX;
  }

  /**
   * Getter de la amplitud en el eje Y
   * @return Amplitud en el eje Y
   */
  public getAmplitudeY(): number {
    return this.amplitudeY;
  }

  /**
   * Getter de la frecuencia en el eje X
   * @return Frecuencia en el eje X
   */
  public getFrequencyX(): number {
    return this.frequencyX;
  }
  
  /**
   * Getter de la frecuencia en el eje Y
   * @return Frecuencia en el eje Y
   */
  public getFrequencyY(): number {
    return this.frequencyY;
  }
  
  /**
   * Getter de la fase de la función
   * @return Fase de la función
   */
  public getPhase(): number {
    return this.phase;
  }

  /**
   * Método que establece la función a ejecutar cuando la vista cambia
   * @param callback Función a ejecutar
   */
  public bindLissajousChanged(callback: (amplitudeX: number, amplitudeY: number, frequencyX: number, frequencyY: number, phase: number) => void): void {
    this.lissajousChanged = callback;
  }

  /**
   * Método que se ejecuta cuando la vista cambia
   * @param amplitudeX Amplitud en el eje X
   * @param amplitudeY Amplitud en el eje Y
   * @param frequencyX Frecuencia en el eje X
   * @param frequencyY Frecuencia en el eje Y
   * @param phase Fase de la función
   */
  private lissajousChanged(amplitudeX: number, amplitudeY: number, frequencyX: number, frequencyY: number, phase: number): void {
    // Se espera que esta función sea definida por la instancia de Model en tiempo de ejecución.
  }
}
