/*****************************
* 6. BOUCLES ET ITÉRATIONS
* BOUCLE = STRUCTURE DE CONTRÔLE N° 2 = MOYEN DE RÉPÉTER DES INSTRUCTIONS
*/

/*
  6.3. Erreurs fréquentes
*/

/*
EXEMPLE 1 : Boucle WHILE infinie
- Vous devez écrire une boucle 'while' pour afficher les nombres de 1 à 5.
- Assurez-vous d'initialiser une variable 'nombre' à 1 pour indiquer où commence la séquence.
- Utilisez une condition pour vérifier que 'nombre' est inférieur ou égal à 5, ce qui indique quand s'arrêter.
- Dans le corps de la boucle, affichez la valeur de 'nombre' dans la console.
- N'oubliez pas d'incrémenter la variable 'nombre' à chaque itération pour éviter une boucle infinie.

CORRECTION :
- Initialisez 'nombre' à 1.
- Utilisez 'while' avec une condition 'nombre <= 5'.
- Dans la boucle, affichez 'nombre' dans la console.
- Incrémentez 'nombre' à chaque itération pour éviter une boucle infinie.

*/

/*let nombre = 1;

while (true){
    if (nombre <= 5) {
        nombre++;
        console.log(nombre);
    }
}*/

let i = 0;

while (i < 5) {
    i++
    console.log(i)
}