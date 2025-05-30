

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
function sort(array){
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
for (let i = 0; i < array.length; i++){
    // i if-sattsen skriv ut i konsolen resultatet    
    if (array[i] % 2 === 0) {
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"        
    console.log(array[i] + " jämt")
} else {
    console.log(array[i] + " udda")
}
}
}
    // anropa funktionen och skicka med en array som argument
    sort([3,4,7,10,13])

}

uppg9()

module.exports = { uppg9 };