class Light{
    #on;
    #button;
    #container;

    constructor(isOn){
        this.#on = isOn;
        this.#button = $('<button class="btn btn-dark light"></button>');
        this.#container = $('<td></td>');
        this.#container.append(this.#button);
    }

    toggle(){
        this.#on = !this.#on;
        this.#button.toggleClass('btn-dark');
        this.#button.toggleClass('btn-warning');
    }

    get isOn(){
        return this.#on;
    }

    get container(){
        return this.#container;
    }
}