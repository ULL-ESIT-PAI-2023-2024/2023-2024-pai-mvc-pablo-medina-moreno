/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Pablo Medina Moreno
 * @since 11 04 2024
 * @description Class that represents the View in the MVC pattern
 * @see {@link * https://es.wikipedia.org/wiki/Modelo%E2%80%93vista%E2%80%93controlador}
 */

/**
 * Class that represents the View in the MVC pattern
 */
class View {
  /**
   * HTML elements
   */
  private app: HTMLElement;
  private form: HTMLFormElement;
  private input: HTMLInputElement;
  private submitButton: HTMLButtonElement;
  private title: HTMLHeadingElement;
  private todoList: HTMLUListElement;
  private temporaryTodoText: string;

  /**
   * Constructor of the View class, initializes the HTML elements and the temporaryTodoText property
   */
  constructor() {
    this.app = this.getElement('#root') as HTMLElement;
    this.form = this.createElement('form') as HTMLFormElement;
    this.input = this.createElement('input') as HTMLInputElement;
    this.input.type = 'text';
    this.input.placeholder = 'Add todo';
    this.input.name = 'todo';
    this.submitButton = this.createElement('button') as HTMLButtonElement;
    this.submitButton.textContent = 'Submit';
    this.form.append(this.input, this.submitButton);
    this.title = this.createElement('h1') as HTMLHeadingElement;
    this.title.textContent = 'Todos';
    this.todoList = this.createElement('ul', 'todo-list') as HTMLUListElement;
    this.app.append(this.title, this.form, this.todoList);

    this.temporaryTodoText = '';
    this.initLocalListeners();
  }

  /**
   * Method that displays the todos
   * @param todos is an array of todos
   */
  public displayTodos(todos: { id: number; text: string; complete: boolean }[]): void {
    // Delete all nodes that are children of the todoList
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }
    // Show default message if there are no todos
    if (todos.length === 0) {
      const p = this.createElement('p') as HTMLParagraphElement;
      p.textContent = '¡Nada que hacer! ¿Agregar una tarea?';
      this.todoList.append(p);
    } else {
      // Create nodes
      todos.forEach(todo => {
        const li = this.createElement('li') as HTMLLIElement;
        li.id = todo.id.toString();

        const checkbox = this.createElement('input') as HTMLInputElement;
        checkbox.type = 'checkbox';
        checkbox.checked = todo.complete;

        const span = this.createElement('span') as HTMLSpanElement;
        span.contentEditable = 'true';
        span.classList.add('editable');

        if (todo.complete) {
          const strike = this.createElement('s') as HTMLElement;
          strike.textContent = todo.text;
          span.append(strike);
        } else {
          span.textContent = todo.text;
        }

        const deleteButton = this.createElement('button', 'delete') as HTMLButtonElement;
        deleteButton.textContent = 'Delete';
        li.append(checkbox, span, deleteButton);

        // Append nodes
        this.todoList.append(li);
      });
    }
  }

  /**
   * Method that binds the addTodo event to a handler
   * @param handler is a function that takes a string as a parameter
   */
  public bindAddTodo(handler: (todoText: string) => void): void {
    this.form.addEventListener('submit', event => {
      event.preventDefault();

      if (this.todoText) {
        handler(this.todoText);
        this.resetInput();
      }
    });
  }

  /**
   * Method that binds the deleteTodo event to a handler
   * @param handler is a function that takes an id as a parameter
   */
  public bindDeleteTodo(handler: (id: number) => void): void {
    this.todoList.addEventListener('click', event => {
      if ((event.target as HTMLElement).className === 'delete') {
        const id = parseInt((event.target as HTMLElement).parentElement!.id);
        handler(id);
      }
    });
  }

  /**
   * Method that binds the toggleTodo event to a handler
   * @param handler is a function that takes an id as a parameter
   */
  public bindToggleTodo(handler: (id: number) => void): void {
    this.todoList.addEventListener('change', event => {
      if ((event.target as HTMLInputElement).type === 'checkbox') {
        const id = parseInt((event.target as HTMLElement).parentElement!.id);
        handler(id);
      }
    });
  }

  /**
   * Method that initializes local listeners
   */
  private initLocalListeners(): void {
    this.todoList.addEventListener('input', event => {
      if ((event.target as HTMLElement).className === 'editable') {
        this.temporaryTodoText = (event.target as HTMLElement).innerText;
      }
    });
  }

  /**
   * Method that creates an HTML element
   * @param tag is the tag of the element
   * @param className is the class of the element
   * @returns the created element
   */
  private createElement(tag: string, className?: string): HTMLElement {
    const element = document.createElement(tag);

    if (className) element.classList.add(className);

    return element;
  }

  /**
   * Method that returns an HTML element
   * @param selector is the selector of the element
   * @returns the element
   */
  private getElement(selector: string): HTMLElement | null {
    const element = document.querySelector(selector) as HTMLElement;
    return element;
  }

  /**
   * Getter of the todoText property
   * @returns the value of the input element
   */
  private get todoText(): string {
    return this.input.value;
  }

  /**
   * Method that resets the input element
   * @param value is the value to set
   */
  private resetInput(): void {
    this.input.value = '';
  }

}