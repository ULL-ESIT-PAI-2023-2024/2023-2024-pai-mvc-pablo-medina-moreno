"use strict";
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Pablo Medina Moreno
 * @since 06 03 2024
 * @description Clase que representa la vista de la aplicación
 * @see {@link * https://es.wikipedia.org/wiki/Modelo%E2%80%93vista%E2%80%93controlador}
 */
/// <reference path="grid.ts" />
/**
 * @brief Clase LissajousView que representa la vista de la aplicación
 */
class LissajousView {
    /**
     * @brief Atributos de la clase LissajousView
     * @readonly canvas Canvas de la aplicación
     * @readonly context Contexto del canvas
     * @readonly grid Fondo de cuadrícula
     */
    canvas = document.getElementById('canvas');
    context = this.canvas.getContext('2d');
    grid = new GridBackground();
    inputs;
    phiAnimationInterval = 0;
    /**
     * @brief Constructor de la clase LissajousView
     */
    constructor() {
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
    setupEventListeners() {
        this.inputs.forEach(input => {
            const inputElement = document.querySelector(input.elementId);
            inputElement.addEventListener('input', () => {
                const EVENT_INFO = { action: input.modelSetter, value: parseFloat(inputElement.value) };
                document.dispatchEvent(new CustomEvent('input-changed', { detail: EVENT_INFO }));
            });
        });
        const animatePhiCheckbox = document.querySelector('#animatePhiCheckbox');
        animatePhiCheckbox.addEventListener('change', () => {
            const EVENT_INFO = { value: animatePhiCheckbox.checked };
            document.dispatchEvent(new CustomEvent('animatePhi', { detail: EVENT_INFO }));
        });
    }
    /**
     * @brief Método privado que inicia la animación de la fase
     * @param inputPhi Elemento de entrada de la fase
     */
    startPhiAnimation() {
        const inputPhi = document.querySelector('#inputPhi');
        const phiStep = 0.01;
        this.stopPhiAnimation();
        // Se ejecuta la función setInterval cada 1000 / 60 milisegundos
        this.phiAnimationInterval = setInterval(() => {
            let phi = parseFloat(inputPhi.value);
            phi += phiStep;
            if (phi > 2) {
                phi = 0;
            }
            inputPhi.value = phi.toFixed(2);
            const EVENT_INFO = { action: 'setPhase', value: phi };
            document.dispatchEvent(new CustomEvent('input-changed', { detail: EVENT_INFO }));
        }, 1000 / 60);
    }
    /**
     * @brief Método privado que detiene la animación de la fase
     */
    stopPhiAnimation() {
        if (this.phiAnimationInterval) {
            clearInterval(this.phiAnimationInterval);
            this.phiAnimationInterval = 0;
        }
    }
    /**
     * @brief Método que dibuja la curva de Lissajous
     * @param amplitudeX Amplitud en el eje X
     * @param amplitudeY Amplitud en el eje Y
     * @param frequencyX Frecuencia en el eje X
     * @param frequencyY Frecuencia en el eje Y
     * @param phase Fase de la función
     */
    draw(amplitudeX, amplitudeY, frequencyX, frequencyY, phase) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.grid.draw(this.context);
        this.context.beginPath();
        for (let time = 0; time < Math.PI * 2; time += 0.01) {
            const x = amplitudeX * Math.sin(frequencyX * time + phase * Math.PI) + this.canvas.width / 2;
            const y = amplitudeY * Math.sin(frequencyY * time) + this.canvas.height / 2;
            if (time === 0) {
                this.context.moveTo(x, y);
                continue;
            }
            this.context.lineTo(x, y);
        }
        this.context.strokeStyle = 'black';
        this.context.stroke();
    }
}
//# sourceMappingURL=view.js.map