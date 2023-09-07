function myIsInString(haystack, needle) {
    // Utilisez la méthode indexOf() pour vérifier si 'needle' se trouve dans 'haystack'.
    // Si la valeur de retour est différente de -1, alors 'needle' a été trouvé.
    return haystack.indexOf(needle) !== -1;
}

// Testez la fonction avec quelques exemples
//console.log(myIsInString("Hello World", "llo"));   // Devrait afficher true
//console.log(myIsInString("Hello World", "rele")); // Devrait afficher false
