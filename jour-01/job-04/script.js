// Définir la fonction myArraySum
function myArraySum(array) {
    let sum = 0;

    // Utiliser une boucle for...of pour parcourir le tableau
    for (const element of array) {
        sum += element;
    }

    return sum;
}

// Testez la fonction avec un exemple
let exampleArray = [4, 24, 52, 14, 32, 56];
let result = myArraySum(exampleArray);

// Afficher le résultat dans la console
console.log(result); // Devrait afficher 182
