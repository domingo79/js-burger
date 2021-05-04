/*
Il programma dovrà consentire di calcolare il prezzo del panino
selezionando o deselezionando gli ingredienti proposti.
*/

var ingredienti = [
    ['cheese', '1'],
    ['feggs', '2'],
    ['mustard', '0.5'],
    ['tomato', '1'],
    ['lettuce', '1'],
    ['ketchup', '0.5'],
];

function rendeInput(lista, elementi) {
    contatore = 0;
    while (contatore < lista.length) {

        elementi.insertAdjacentHTML('beforeend',
            `
        <div class="form-group">
        <img height="30" src="./asset/img/${lista[contatore][0] + '.svg'}">
        <label for="${lista[contatore][0]}">${lista[contatore][0]}</label>
        <input type="checkbox" name="${lista[contatore][0]}" id="${lista[contatore][0]}" data-price="${lista[contatore][1]}">
        </div> 

        `
        );

        contatore++
    }
}

var ingredientiElements = document.querySelector('.ingredienti');
rendeInput(ingredienti, ingredientiElements);

