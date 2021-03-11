// Lista di li (ingredienti)
var ingredients = document.getElementsByClassName('column');

// Nome burger inserito da user
var burgerName = document.getElementById('burger-name');

// Coupon inserito dall'utente
var coupon = document.getElementById('coupon');
var couponSconto = false;
var codSconto = ['martino', 'sconto20', '1234ABCD'];

var prezzo = 10;
// Bottone calcola
var calcPrice = document.getElementById('calcPrice');
// Prezzo finale visto dall'utente
var price = document.getElementById('price');

// Controllo il click su li ingredienti
for (let i = 0; i < ingredients.length; i++) {
    var ingredient = ingredients[i];

    ingredient.addEventListener('click', function(){
        // inputCheck mi prende il figlio di li 
        // in posizione 2 (<input type="checkbox">)
        var inputCheck = this.children[2];

        // Verifico se è checked e do il valore opposto
        inputCheck.checked = !inputCheck.checked;
        // Applico il prezzo nuovo
        if(inputCheck.checked == true){
            prezzo = prezzo + parseFloat(inputCheck.dataset.extra);
            console.log(prezzo);
        }
        // Altrimenti riscalo al prezzo originale
        else{
            prezzo = prezzo - parseFloat(inputCheck.dataset.extra);
        }
    });
}

// Controllo il click sul bottone calcola
calcPrice.addEventListener('click', function(){
    // Se ho inserito più di 0 caratteri
    if(burgerName.value.length > 0){
        // Controllo se il coupon corrisponde
        for (let i = 0; i < codSconto.length ; i++) {
            console.log(i);
            if (coupon.value == codSconto[i]) {
                couponSconto = true;
            }
        }
        // Se corrisponde effettuo lo sconto
        if (couponSconto) {
            couponSconto = false;
            var scontPrezzo = (prezzo / 100) * 80;
            price.innerHTML = scontPrezzo.toFixed(2);
        }
        // Altrimenti applico il prezzo pieno
        else{
            price.innerHTML = prezzo.toFixed(2);
        }
    }
    // Altrimenti alert "inserisci nome"
    else{ 
        alert('Inserisci un nome al tuo Burger!');
    }
});

