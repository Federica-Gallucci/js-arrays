const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

console.log(teachers);
let utilityTeachers = " ";

const reversedTeachers = [];

for (i = 0; i < teachers.length; i++) {
  utilityTeachers = teachers.shift(); // rimuovo all'inizio dell'array e lo stalvo in utilityTeachers
  for (i = 0; i < teachers.length; i++) {
    reversedTeachers = utilityTeachers.unshift(utilityTeachers[i]); // aggiungo all'inizio dell'array
  }
}
console.log(utilityTeachers);

console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

// 3. Rimuovi 'Ed' dall'array teachers

teachers.splice(1, 1);
console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = null;

for (i = 0; i < teachers.length; i++) {
  if (teachers[i] === "Fabio") {
  }
}

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;
