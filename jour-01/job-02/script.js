function myCountChar(haystack, needle) {
    // Initialisez un compteur pour les occurrences du caractère
    let count = 0;

    // Parcourez chaque caractère de la chaîne de caractères avec une boucle for...of
    for (const char of haystack) {
        // Si le caractère courant correspond à l'aiguille (needle), incrémentez le compteur
        if (char === needle) {
            count++;
        }
    }

    // Retournez le nombre d'occurrences du caractère
    return count;
}

// Exemple d'utilisation de la fonction
const result = myCountChar("Hello World", "o");
console.log(result); // Cela devrait afficher 2 dans la console



