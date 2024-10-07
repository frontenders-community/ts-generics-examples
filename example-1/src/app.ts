/* 
Esempio della funzione che non utilizza i generics e non esegue il controllo dei tipi
function getLastItem(arr: any) {
  return arr[arr.length - 1];
}
 */

/* 
Esempio della funzione che utilizza i generics e esegue il controllo dei tipi
 */
function getLastItem<T>(arr: T[]): T {
  return arr[arr.length - 1];
}

// Esempio di utilizzo con diversi tipi di dati
const numbers = [1, 2, 3, 4];
const lastNumber = getLastItem(numbers); // 4

const strings = ["a", "b", "c", "d"];
const lastString = getLastItem(strings); // "d"

/* const errorResult = getLastItem(1234); // undefined */

console.log(lastNumber, lastString);