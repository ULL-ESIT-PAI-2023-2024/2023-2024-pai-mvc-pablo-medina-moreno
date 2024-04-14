/** 
 * @class
 * @description Class for the buttons objects to be placed in tha page 
 */
export class Button {
    private button : HTMLButtonElement;
    private action: string = ''; 
    private eventName: string = '';
  
    /**
     * @description Sets up a button object placing it in the page (DOM)
     *              It set up an event listener for the click event on the button
     *              Notifies Menu when clicked, so that Menu can update the <h1>
     * @param {Element} containerElement - The DOM element that will host the button
     * @param {String} buttonName - Button text
     */
    constructor(buttonName: string, action: string, eventName: string) {
      this.action = action;
      this.eventName = eventName;
      this.button = document.getElementById(buttonName) as HTMLButtonElement;
      this.button.addEventListener('click', this.onClick);
    }
  
    /**
     * @method onClick
     * @description Event handler method for click events on the button
     *              It adds an EVENT_INFO object to the customEvent
     */
    private onClick = () => {
      const EVENT_INFO: object = { button: this.button, action: this.action };
      document.dispatchEvent(new CustomEvent(this.eventName, { detail: EVENT_INFO }));
    }
  }