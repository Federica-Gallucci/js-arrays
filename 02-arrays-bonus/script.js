const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

console.log(teachers);

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

console.log("vettore inverso di teachers");
const reversedTeachers = [];

for (let i = teachers.length - 1; i >= 0; i--) {
  reversedTeachers.push(teachers[i]);
}
console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

console.log("Array con insegnati con nome di lunghezza >= 5 caratteri:");

let nameFive;
const longNames = [];

for (i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    nameFive = teachers[i];

    longNames.unshift(nameFive);
  }
}
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers

teachers.splice(1, 1);
console.log("Rimuovi Ed:");
console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let isFabioPresent = false;

for (i = 0; i < teachers.length; i++) {
  if (teachers[i] === "Fabio") {
    isFabioPresent = true;
  }
}
console.log(isFabioPresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(`, `);
console.log(teachersString);
