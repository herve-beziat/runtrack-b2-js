// Fonction myUpperCase qui convertit une chaîne de caractères en majuscules
function myUpperCase(string) {
    if (typeof string === 'string') {
        return string.toUpperCase();
    } else {
        // Gestion de l'erreur si le paramètre n'est pas une chaîne de caractères
        return "Le paramètre doit être une chaîne de caractères";
    }
}

let inputString = "Hello World";
let result = myUpperCase(inputString);
//console.log(result); // Cela affichera "HELLO WORLD" dans la console du navigateur.
