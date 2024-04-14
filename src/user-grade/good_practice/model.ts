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
 * Class that represents the User in the MVC pattern
 */
export class User {
  private name: string;
  private grade: number;

  /**
   * Constructor of the User class
   * @param name is the name of the user
   * @param grade is the grade of the user
   */
  constructor(name: string, grade: number) {
    this.name = name;
    this.grade = grade;
  }

  /**
   * Getter that returns the name of the user
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Getter that returns the grade of the user
   */
  public getGrade(): number {
    return this.grade;
  }

  /**
   * Setter that sets the name of the user
   * @param name is the new name of the user
   */
  public setName(name: string): void {
    this.name = name;
  }

  /**
   * Setter that sets the grade of the user
   * @param grade is the new grade of the user
   */
  public setGrade(grade: number): void {
    this.grade = grade;
  }
}