/* BOUCLES - PRÉPA 4 : Le Devin
N.B. Cet exercice est à faire après avoir vu les fonctions
Ecrivez un programme qui va deviner le nombre auquel vous avez pensé (voir livre p.99 et 100)
- Demandez à l'utilisateur d'entrer un nombre entier entre 1 et 10 auquel il pense
	et annoncez-lui que vous allez essayer de le deviner.
	Le message pourrait être : "Pensez très fort à un nombre entier entre 1 et 10
	et entrez-le ici (je ne regarde pas, c'est promis !), je vais essayer de le deviner…"
- Affichez "Ce n'est pas …" tant que vous n'avez pas trouvé le nombre auquel il pensait
	et puis "J'ai trouvé ! Vous pensiez à …" lorsque vous avez trouvé.
*/

/* AIDES :
- Vous allez avoir besoin de la fonction Math.random() :
	cette fonction vous donne un nombre aléatoire entre 0 et 1 ;
- Vous allez avoir besoin aussi de la fonction Math.floor() :
	cette fonction vous donne l'arrondi vers le bas d'un nombre décimal :
	par exemple Math.floor(10.8) = 10 (la fonction tronque, ne garde que la partie entière)
- Pour une meilleure compréhension, prenez le temps de consulter la documentation pour savoir comment utiliser
	ces fonctions, y compris leurs paramètres et les valeurs qu'elles retournent.
*/
// Écrivez le code JavaScript pour résoudre cet exercice en essayant de deviner le nombre auquel l'utilisateur pense.

const randomNb = parseInt(prompt("Entrez un chiffre entre 1 et 10:"));
let i = 1;

function randomNumber(nombre) {
    return Math.floor(Math.random() * nombre);
}

while (randomNb) {
    if (randomNumber(10) < randomNb) {
        i++;
        console.log(`Ce n'est pas ${i}`);
    } else if (i === randomNb){
        console.log(`C'est ${i}`);
        break;
    }
}