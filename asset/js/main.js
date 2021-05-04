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

    var totalBurger = (burgerBasic + sumIngredients);

    var discount = ['cp10', 'cp15', 'cp20'];

    var controlloCP = document.querySelector('#discount').value;

    if (discount.includes(controlloCP) && controlloCP == 'cp10') {
        totalBurger -= totalBurger * 0.1;
        console.log('hai uno sconto 10 ' + totalBurger);
    } else if (discount.includes(controlloCP) && controlloCP == 'cp15') {
        totalBurger -= totalBurger * 0.15;
        console.log('hai uno sconto 15 ' + totalBurger);
    } else if (discount.includes(controlloCP) && controlloCP == 'cp20') {
        totalBurger -= totalBurger * 0.20;
        console.log('hai uno sconto 20 ' + totalBurger);
    } else {
        console.log('prezzo pieno');
    }

    document.getElementById('price').innerHTML = '€ ' + totalBurger;
})



