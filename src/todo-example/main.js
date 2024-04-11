/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Pablo Medina Moreno
 * @since 11 04 2024
 * @description Class that represents the Model in the MVC pattern
 * @see {@link * https://es.wikipedia.org/wiki/Modelo%E2%80%93vista%E2%80%93controlador}
 */
/**
 * Class that represents the Model in the MVC pattern
 */
var Model = /** @class */ (function () {
    /**
     * Constructor of the Model class, initializes the todos array with two objects
     */
    function Model() {
        this.todos = [
            { id: 1, text: 'Run a marathon', complete: false },
            { id: 2, text: 'Plant a garden', complete: false },
        ];
    }
    /**
     * Function that returns the todos array
     * @returns an array of todos
     */
    Model.prototype.getTodos = function () {
        return this.todos;
    };
    /**
     * Function that binds the onTodoListChanged function to a callback
     * @param callback is a function that takes an array of todos as a parameter
     */
    Model.prototype.bindTodoListChanged = function (callback) {
        this.onTodoListChanged = callback;
    };
    /**
     * Function that calls the callback function with the todos array
     * @param todos is an array of todos
     */
    Model.prototype.onTodoListChanged = function (todos) {
        // This is a placeholder for a function that would be overwritten by the Controller
    };
    /**
     * Function that adds a todo to the todos array
     * @param todoText is the text of the todo
     */
    Model.prototype.addTodo = function (todoText) {
        var todo = {
            id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
            text: todoText,
            complete: false,
        };
        this.todos.push(todo);
        this.onTodoListChanged(this.todos);
    };
    /**
     * Function that deletes a todo from the todos array
     * @param id is the id of the todo to be deleted
     */
    Model.prototype.deleteTodo = function (id) {
        this.todos = this.todos.filter(function (todo) { return todo.id !== id; });
        this.onTodoListChanged(this.todos);
    };
    /**
     * Function that toggles the complete property of a todo
     * @param id is the id of the todo to be toggled
     */
    Model.prototype.toggleTodo = function (id) {
        this.todos = this.todos.map(function (todo) {
            return todo.id === id ? { id: todo.id, text: todo.text, complete: !todo.complete } : todo;
        });
        this.onTodoListChanged(this.todos);
    };
    return Model;
}());
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
var View = /** @class */ (function () {
    /**
     * Constructor of the View class, initializes the HTML elements and the temporaryTodoText property
     */
    function View() {
        this.app = this.getElement('#root');
        this.form = this.createElement('form');
        this.input = this.createElement('input');
        this.input.type = 'text';
        this.input.placeholder = 'Add todo';
        this.input.name = 'todo';
        this.submitButton = this.createElement('button');
        this.submitButton.textContent = 'Submit';
        this.form.append(this.input, this.submitButton);
        this.title = this.createElement('h1');
        this.title.textContent = 'Todos';
        this.todoList = this.createElement('ul', 'todo-list');
        this.app.append(this.title, this.form, this.todoList);
        this.temporaryTodoText = '';
        this.initLocalListeners();
    }
    /**
     * Method that displays the todos
     * @param todos is an array of todos
     */
    View.prototype.displayTodos = function (todos) {
        var _this = this;
        // Delete all nodes that are children of the todoList
        while (this.todoList.firstChild) {
            this.todoList.removeChild(this.todoList.firstChild);
        }
        // Show default message if there are no todos
        if (todos.length === 0) {
            var p = this.createElement('p');
            p.textContent = '¡Nada que hacer! ¿Agregar una tarea?';
            this.todoList.append(p);
        }
        else {
            // Create nodes
            todos.forEach(function (todo) {
                var li = _this.createElement('li');
                li.id = todo.id.toString();
                var checkbox = _this.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = todo.complete;
                var span = _this.createElement('span');
                span.contentEditable = 'true';
                span.classList.add('editable');
                if (todo.complete) {
                    var strike = _this.createElement('s');
                    strike.textContent = todo.text;
                    span.append(strike);
                }
                else {
                    span.textContent = todo.text;
                }
                var deleteButton = _this.createElement('button', 'delete');
                deleteButton.textContent = 'Delete';
                li.append(checkbox, span, deleteButton);
                // Append nodes
                _this.todoList.append(li);
            });
        }
    };
    /**
     * Method that binds the addTodo event to a handler
     * @param handler is a function that takes a string as a parameter
     */
    View.prototype.bindAddTodo = function (handler) {
        var _this = this;
        this.form.addEventListener('submit', function (event) {
            event.preventDefault();
            if (_this.todoText) {
                handler(_this.todoText);
                _this.resetInput();
            }
        });
    };
    /**
     * Method that binds the deleteTodo event to a handler
     * @param handler is a function that takes an id as a parameter
     */
    View.prototype.bindDeleteTodo = function (handler) {
        this.todoList.addEventListener('click', function (event) {
            if (event.target.className === 'delete') {
                var id = parseInt(event.target.parentElement.id);
                handler(id);
            }
        });
    };
    /**
     * Method that binds the toggleTodo event to a handler
     * @param handler is a function that takes an id as a parameter
     */
    View.prototype.bindToggleTodo = function (handler) {
        this.todoList.addEventListener('change', function (event) {
            if (event.target.type === 'checkbox') {
                var id = parseInt(event.target.parentElement.id);
                handler(id);
            }
        });
    };
    /**
     * Method that initializes local listeners
     */
    View.prototype.initLocalListeners = function () {
        var _this = this;
        this.todoList.addEventListener('input', function (event) {
            if (event.target.className === 'editable') {
                _this.temporaryTodoText = event.target.innerText;
            }
        });
    };
    /**
     * Method that creates an HTML element
     * @param tag is the tag of the element
     * @param className is the class of the element
     * @returns the created element
     */
    View.prototype.createElement = function (tag, className) {
        var element = document.createElement(tag);
        if (className)
            element.classList.add(className);
        return element;
    };
    /**
     * Method that returns an HTML element
     * @param selector is the selector of the element
     * @returns the element
     */
    View.prototype.getElement = function (selector) {
        var element = document.querySelector(selector);
        return element;
    };
    Object.defineProperty(View.prototype, "todoText", {
        /**
         * Getter of the todoText property
         * @returns the value of the input element
         */
        get: function () {
            return this.input.value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Method that resets the input element
     * @param value is the value to set
     */
    View.prototype.resetInput = function () {
        this.input.value = '';
    };
    return View;
}());
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Pablo Medina Moreno
 * @since 11 04 2024
 * @description Class that represents the Controller in the MVC pattern
 * @see {@link * https://es.wikipedia.org/wiki/Modelo%E2%80%93vista%E2%80%93controlador}
 */
/// <reference path="model.ts" />
/// <reference path="view.ts" />
/**
 * Class that represents the Controller in the MVC pattern
 */
var Controller = /** @class */ (function () {
    /**
     * Constructor of the Controller class
     * @param model is an instance of the Model class
     * @param view is an instance of the View class
     */
    function Controller(model, view) {
        var _this = this;
        /**
         * Method that displays the todos
         * @param todos is an array of todos
         */
        this.onTodoListChanged = function (todos) {
            _this.view.displayTodos(todos);
        };
        /**
         * Method that adds a todo to the model
         * @param todoText is the text of the todo
         */
        this.handleAddTodo = function (todoText) {
            _this.model.addTodo(todoText);
        };
        /**
         * Method that deletes a todo from the model
         * @param id is the id of the todo
         */
        this.handleDeleteTodo = function (id) {
            _this.model.deleteTodo(id);
        };
        /**
         * Method that toggles a todo from the model
         * @param id is the id of the todo
         */
        this.handleToggleTodo = function (id) {
            _this.model.toggleTodo(id);
        };
        this.model = model;
        this.view = view;
        // Explicit this binding
        this.model.bindTodoListChanged(this.onTodoListChanged);
        this.view.bindAddTodo(this.handleAddTodo.bind(this));
        this.view.bindDeleteTodo(this.handleDeleteTodo.bind(this));
        this.view.bindToggleTodo(this.handleToggleTodo.bind(this));
        // Show initial todos
        this.onTodoListChanged(this.model.getTodos());
    }
    return Controller;
}());
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Pablo Medina Moreno
 * @since 11 04 2024
 * @description Client-side MVC pattern implementation
 * @see {@link * https://es.wikipedia.org/wiki/Modelo%E2%80%93vista%E2%80%93controlador}
 * tsc --outFile main.js main.ts
 */
/// <reference path="model.ts" />
/// <reference path="view.ts" />
/// <reference path="controller.ts" />
/**
 * Main function that creates the model, view and controller
 */
function main() {
    var model = new Model();
    var view = new View();
    new Controller(model, view);
}
main();
