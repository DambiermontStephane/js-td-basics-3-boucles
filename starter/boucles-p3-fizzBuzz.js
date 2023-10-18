/* BOUCLES - PRÉPA 3 : FizzBuzz
Ecrivez un programme qui affiche tous les nombres entre 1 et 100 avec les exceptions suivantes :
- Il affiche "Fizz" à la place du nombre si celui-ci est divisible par 3 ;
- Il affiche "Buzz" à la place du nombre si celui-ci est divisible par 5 et non par 3 ;
- Il affiche "FizzBuzz" à la place du nombre si celui-ci est divisible à la fois par 3 et par 5.
*/

/* RAPPELS - AIDES :
- Vous aurez besoin de deux structures de contrôle pour réaliser cet exercice : les tests et les boucles.
- Vous devrez également utiliser l'opérateur modulo %, qui renvoie le reste de la division d'un entier par un autre.
- TIP : Cet exercice est un test d'embauche classique qui permet de sélectionner des candidats qualifiés.
  Donnez votre meilleur effort pour le réussir !
*/
// Écrivez le code JavaScript pour résoudre cet exercice en affichant les nombres de 1 à 100 selon les règles spécifiées.

for (let i=1;i<=100;console.log(i % 15 === 0?"fizzbuzz":i % 3 === 0?"fizz":i % 5 === 0?"buzz":i),i++) {}

/*for (let i = 1;i<100;i++) {
    if (i % 15 === 0) {
        console.log("fizzbuzz");
    }
    else if (i % 3 === 0) {
        console.log("fizz");
    }
    else if(i % 5 === 0){
        console.log("buzz");
    }else {
        console.log(i)
    }
}*/

