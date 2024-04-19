class Board{
    #size;
    #lights;
    #container;

    constructor(size, lights){
        this.#size = size;
        this.#lights = lights;
        this.#container = $('#game-body');
        this.render();
    }

    render(){
        $('#win-message').hide();

        this.#container.empty();
        for(let i = 0; i < this.#size; i++){
            let row = $('<tr></tr>');
            for(let j = 0; j < this.#size; j++){
                row.append(this.#lights[i][j].container);
                this.#lights[i][j].container[0].onclick = () => this.toggleLight(i, j);
            }
            this.#container.append(row);
        }
    }

    toggleLight(row, col){
        this.#lights[row][col].toggle();
        if(row > 0){
            this.#lights[row - 1][col].toggle();
        }

        if(row < this.#size - 1){
            this.#lights[row + 1][col].toggle();
        }

        if(col > 0){
            this.#lights[row][col - 1].toggle();
        }

        if(col < this.#size - 1){
            this.#lights[row][col + 1].toggle();
        }

        this.checkWin();
    }

    checkWin(){
        for(let i = 0; i < this.#size; i++){
            for(let j = 0; j < this.#size; j++){
                if(this.#lights[i][j].isOn){
                    return;
                }
            }
        }
        for(let row of this.#lights){
            for(let light of row){
                light.container.prop('onclick', null).off('click');
                light.container.children().prop('disabled', true);
            }
        }

        this.#displayWinMessage();
    }

    #displayWinMessage(){
        $('#win-message').show();
    }

    static fromSetupResponse(size, lightsOn){
        let lights = [];
        for(let i = 0; i < size; i++){
            lights[i] = [];
            for(let j = 0; j < size; j++){
                lights[i][j] = new Light(false);
            }
        }

        for(let i = 0; i < lightsOn.length; i++){
            lights[lightsOn[i][0]][lightsOn[i][1]].toggle();
        }

        return new Board(size, lights);
    }
}