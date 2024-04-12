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
var LissajousModel = /** @class */ (function () {
    /**
     * Constructor de la clase LissajousModel
     */
    function LissajousModel(amplitudeX, amplitudeY, frequencyX, frequencyY, phase) {
        if (amplitudeX === void 0) { amplitudeX = 100; }
        if (amplitudeY === void 0) { amplitudeY = 100; }
        if (frequencyX === void 0) { frequencyX = 3; }
        if (frequencyY === void 0) { frequencyY = 2; }
        if (phase === void 0) { phase = 0; }
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
    LissajousModel.prototype.setAmplitudeX = function (value) {
        this.amplitudeX = value;
        // this.lissajousChanged(this.amplitudeX, this.amplitudeY, this.frequencyX, this.frequencyY, this.phase);
    };
    /**
     * Setter de la amplitud en el eje Y
     * @param value Amplitud en el eje Y
     */
    LissajousModel.prototype.setAmplitudeY = function (value) {
        this.amplitudeY = value;
        // this.lissajousChanged(this.amplitudeX, this.amplitudeY, this.frequencyX, this.frequencyY, this.phase);
    };
    /**
     * Setter de la frecuencia en el eje X
     * @param value Frecuencia en el eje X
     */
    LissajousModel.prototype.setFrequencyX = function (value) {
        this.frequencyX = value;
        // this.lissajousChanged(this.amplitudeX, this.amplitudeY, this.frequencyX, this.frequencyY, this.phase);
    };
    /**
     * Setter de la frecuencia en el eje Y
     * @param value Frecuencia en el eje Y
     */
    LissajousModel.prototype.setFrequencyY = function (value) {
        this.frequencyY = value;
        // this.lissajousChanged(this.amplitudeX, this.amplitudeY, this.frequencyX, this.frequencyY, this.phase);
    };
    /**
     * Setter de la fase de la función
     * @param value Fase de la función
     */
    LissajousModel.prototype.setPhase = function (value) {
        this.phase = value;
        // this.lissajousChanged(this.amplitudeX, this.amplitudeY, this.frequencyX, this.frequencyY, this.phase);
    };
    /**
     * Getter de la amplitud en el eje X
     * @return Amplitud en el eje X
     */
    LissajousModel.prototype.getAmplitudeX = function () {
        return this.amplitudeX;
    };
    /**
     * Getter de la amplitud en el eje Y
     * @return Amplitud en el eje Y
     */
    LissajousModel.prototype.getAmplitudeY = function () {
        return this.amplitudeY;
    };
    /**
     * Getter de la frecuencia en el eje X
     * @return Frecuencia en el eje X
     */
    LissajousModel.prototype.getFrequencyX = function () {
        return this.frequencyX;
    };
    /**
     * Getter de la frecuencia en el eje Y
     * @return Frecuencia en el eje Y
     */
    LissajousModel.prototype.getFrequencyY = function () {
        return this.frequencyY;
    };
    /**
     * Getter de la fase de la función
     * @return Fase de la función
     */
    LissajousModel.prototype.getPhase = function () {
        return this.phase;
    };
    /**
     * Método que establece la función a ejecutar cuando la vista cambia
     * @param callback Función a ejecutar
     */
    LissajousModel.prototype.bindLissajousChanged = function (callback) {
        this.lissajousChanged = callback;
    };
    /**
     * Método que se ejecuta cuando la vista cambia
     * @param amplitudeX Amplitud en el eje X
     * @param amplitudeY Amplitud en el eje Y
     * @param frequencyX Frecuencia en el eje X
     * @param frequencyY Frecuencia en el eje Y
     * @param phase Fase de la función
     */
    LissajousModel.prototype.lissajousChanged = function (amplitudeX, amplitudeY, frequencyX, frequencyY, phase) {
        // Se espera que esta función sea definida por la instancia de Model en tiempo de ejecución.
    };
    return LissajousModel;
}());
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
var GridBackground = /** @class */ (function () {
    /**
     * Constructor de la clase GridBackground
     * @param size Tamaño de la cuadrícula
     * @param strokeStyleLight Estilo de trazo claro
     * @param strokeStyleDark Estilo de trazo oscuro
     */
    function GridBackground(size, strokeStyleLight, strokeStyleDark) {
        if (size === void 0) { size = 10; }
        if (strokeStyleLight === void 0) { strokeStyleLight = 'lightgrey'; }
        if (strokeStyleDark === void 0) { strokeStyleDark = 'grey'; }
        this.size = size;
        this.strokeStyleLight = strokeStyleLight;
        this.strokeStyleDark = strokeStyleDark;
        this.size = size;
        this.strokeStyleLight = strokeStyleLight;
        this.strokeStyleDark = strokeStyleDark;
    }
    /**
     * Método que dibuja la cuadrícula
     * @param context Contexto del canvas
     */
    GridBackground.prototype.draw = function (context) {
        var canvasWidth = context.canvas.width;
        var canvasHeight = context.canvas.height;
        context.beginPath();
        // Dibuja las lineas verticales
        for (var x = 0; x <= canvasWidth; x += this.size) {
            context.moveTo(x, 0);
            context.lineTo(x, canvasHeight);
        }
        // Dibuja las lineas horizontales
        for (var y = 0; y <= canvasHeight; y += this.size) {
            context.moveTo(0, y);
            context.lineTo(canvasWidth, y);
        }
        context.strokeStyle = this.strokeStyleLight;
        context.stroke();
        context.beginPath();
        // context.lineWidth = 2;
        // Dibuja las lineas verticales más gruesas
        for (var x = 0; x <= canvasWidth; x += this.size * 10) {
            context.moveTo(x, 0);
            context.lineTo(x, canvasHeight);
        }
        // Dibuja las lineas horizontales más gruesas
        for (var y = 0; y <= canvasHeight; y += this.size * 10) {
            context.moveTo(0, y);
            context.lineTo(canvasWidth, y);
        }
        context.strokeStyle = this.strokeStyleDark;
        context.stroke();
    };
    return GridBackground;
}());
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Pablo Medina Moreno
 * @since 06 03 2024
 * @description Clase que representa la vista de la aplicación
 * @see {@link * https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html}
 */
/// <reference path="grid.ts" />
/**
 * @brief Clase LissajousView que representa la vista de la aplicación
 */
var LissajousView = /** @class */ (function () {
    /**
     * @brief Constructor de la clase LissajousView
     */
    function LissajousView() {
        /**
         * @brief Atributos de la clase LissajousView
         * @readonly canvas Canvas de la aplicación
         * @readonly context Contexto del canvas
         * @readonly grid Fondo de cuadrícula
         */
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
        this.grid = new GridBackground();
        this.phiAnimationInterval = 0;
        this.inputs = [
            { elementId: '#inputA', modelSetter: 'setAmplitudeX' },
            { elementId: '#inputB', modelSetter: 'setAmplitudeY' },
            { elementId: '#inputa', modelSetter: 'setFrequencyX' },
            { elementId: '#inputb', modelSetter: 'setFrequencyY' },
            { elementId: '#inputPhi', modelSetter: 'setPhase' }
        ];
        this.setupEventListeners();
        this.startPhiAnimation();
    }
    /**
     * @brief Método privado que establece los eventos de la aplicación
     */
    LissajousView.prototype.setupEventListeners = function () {
        this.inputs.forEach(function (input) {
            var inputElement = document.querySelector(input.elementId);
            inputElement.addEventListener('input', function () {
                var EVENT_INFO = { action: input.modelSetter, value: parseFloat(inputElement.value) };
                document.dispatchEvent(new CustomEvent('input-changed', { detail: EVENT_INFO }));
            });
        });
        var animatePhiCheckbox = document.querySelector('#animatePhiCheckbox');
        animatePhiCheckbox.addEventListener('change', function () {
            var EVENT_INFO = { value: animatePhiCheckbox.checked };
            document.dispatchEvent(new CustomEvent('animatePhi', { detail: EVENT_INFO }));
        });
    };
    /**
     * @brief Método privado que inicia la animación de la fase
     * @param inputPhi Elemento de entrada de la fase
     */
    LissajousView.prototype.startPhiAnimation = function () {
        var inputPhi = document.querySelector('#inputPhi');
        var phiStep = 0.01;
        this.stopPhiAnimation();
        // Se ejecuta la función setInterval cada 1000 / 60 milisegundos
        this.phiAnimationInterval = setInterval(function () {
            var phi = parseFloat(inputPhi.value);
            phi += phiStep;
            if (phi > 2) {
                phi = 0;
            }
            inputPhi.value = phi.toFixed(2);
            var EVENT_INFO = { action: 'setPhase', value: phi };
            document.dispatchEvent(new CustomEvent('input-changed', { detail: EVENT_INFO }));
        }, 1000 / 60);
    };
    /**
     * @brief Método privado que detiene la animación de la fase
     */
    LissajousView.prototype.stopPhiAnimation = function () {
        if (this.phiAnimationInterval) {
            clearInterval(this.phiAnimationInterval);
            this.phiAnimationInterval = 0;
        }
    };
    /**
     * @brief Método que dibuja la curva de Lissajous
     * @param amplitudeX Amplitud en el eje X
     * @param amplitudeY Amplitud en el eje Y
     * @param frequencyX Frecuencia en el eje X
     * @param frequencyY Frecuencia en el eje Y
     * @param phase Fase de la función
     */
    LissajousView.prototype.draw = function (amplitudeX, amplitudeY, frequencyX, frequencyY, phase) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.grid.draw(this.context);
        this.context.beginPath();
        for (var time = 0; time < Math.PI * 2; time += 0.01) {
            var x = amplitudeX * Math.sin(frequencyX * time + phase * Math.PI) + this.canvas.width / 2;
            var y = amplitudeY * Math.sin(frequencyY * time) + this.canvas.height / 2;
            if (time === 0) {
                this.context.moveTo(x, y);
                continue;
            }
            this.context.lineTo(x, y);
        }
        this.context.strokeStyle = 'black';
        this.context.stroke();
    };
    return LissajousView;
}());
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
var LissajousController = /** @class */ (function () {
    /**
     * @brief Constructor de la clase LissajousController
     * @param model Modelo de la aplicación
     * @param view Vista de la aplicación
     * @param phiAnimationInterval Intervalo de animación de la fase
     */
    function LissajousController(model, view) {
        var _this = this;
        this.model = model;
        this.view = view;
        /**
         * @brief Método privado que actualiza la vista
         * @param amplitudeX Amplitud en el eje X
         * @param amplitudeY Amplitud en el eje Y
         * @param frequencyX Frecuencia en el eje X
         * @param frequencyY Frecuencia en el eje Y
         * @param phase Fase de la función
         */
        this.updateView = function (amplitudeX, amplitudeY, frequencyX, frequencyY, phase) {
            _this.view.draw(amplitudeX, amplitudeY, frequencyX, frequencyY, phase);
        };
        this.model = model;
        this.view = view;
        this.init();
    }
    /**
     * @brief Método privado que inicializa la aplicación
     */
    LissajousController.prototype.init = function () {
        // this.model.bindLissajousChanged(this.updateView);
        this.updateView(this.model.getAmplitudeX(), this.model.getAmplitudeY(), this.model.getFrequencyX(), this.model.getFrequencyY(), this.model.getPhase());
        this.handleSettersModel();
    };
    /**
     * @brief Método privado que maneja los eventos de la aplicación y actualiza el modelo
     */
    LissajousController.prototype.handleSettersModel = function () {
        var _this = this;
        document.addEventListener('input-changed', function (event) {
            var action = event.detail.action;
            var value = event.detail.value;
            _this.updateModel(action, value);
            _this.updateView(_this.model.getAmplitudeX(), _this.model.getAmplitudeY(), _this.model.getFrequencyX(), _this.model.getFrequencyY(), _this.model.getPhase());
        });
        document.addEventListener('animatePhi', function (event) {
            if (event.detail.value) {
                _this.view.startPhiAnimation();
            }
            else {
                _this.view.stopPhiAnimation();
            }
        });
    };
    /**
     * @brief Método privado que actualiza el modelo
     * @param action Acción a realizar
     * @param value Valor a actualizar
     */
    LissajousController.prototype.updateModel = function (action, value) {
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
    };
    return LissajousController;
}());
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
///<reference path='model.ts'/>
///<reference path='view.ts'/>
///<reference path='controller.ts'/>
/**
 * Función principal que crea el modelo, la vista y el controlador
 */
function main() {
    var model = new LissajousModel();
    var view = new LissajousView();
    new LissajousController(model, view);
}
main();
