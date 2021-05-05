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

document.querySelector('button').addEventListener('click', function () {

    var burgerBasic = 3.99;
    //console.log(burgerBasic);

    var checkIngredienti = document.querySelectorAll("input[type='checkbox']");
    //console.log(checkIngredienti);

    var sumIngredients = null;

    for (var i = 0; i < checkIngredienti.length; i++) {
        var element = checkIngredienti[i];
        if (element.checked) {
            sumIngredients += Number(element.getAttribute('data-price'))
        }
    }
    //console.log(sumIngredients);

    var totalBurger = burgerBasic + sumIngredients;

    var discount = ['cp10', 'cp15', 'cp20'];

    var controlloCP = document.querySelector('#discount');

    var sconto = applicaSconto(controlloCP, discount, totalBurger);

    function applicaSconto(elem, lista, prezzo) {
        //  verificare il valore inserito del coupon 
        if (lista.includes(elem.value)) {
            console.log('applica lo sconto');
            prezzo -= prezzo * 0.10;
            console.log('prezzo');
            return prezzo;
        }
        return prezzo;
    }

    document.getElementById('price').innerHTML = '€ ' + totalBurger.toFixed(2);
    document.getElementById('price').innerHTML = '€ ' + sconto.toFixed(2);
})