/**
 * ¡Alerta en la fábrica de juguetes de Santa! El Grinch 😈 se ha infiltrado en el almacén y ha saboteado algunos de los juguetes 💣.

Los elfos necesitan ayuda para encontrar los juguetes saboteados y eliminarlos antes de que llegue la Navidad. Para ello tenemos el mapa 🗺️ del almacén, que es una matriz.

Los * representan los juguetes saboteados y las celdas vacías con un espacio en blanco son los lugares seguros.

Tu tarea es escribir una función que devuelva la misma matriz pero, en cada posición, nos indique el número de juguetes saboteados que hay en las celdas adyacentes.

Si una celda contiene un juguete saboteado, debe permanecer igual. Si una celda no toca ningún juguete saboteado, debe contener un espacio en blanco .

const store = [
  ['*', ' ', ' ', ' '],
  [' ', ' ', '*', ' '],
  [' ', ' ', ' ', ' '],
  ['*', ' ', ' ', ' ']
]

console.log(revealSabotage(store))
/* Debería mostrar:
[
    ['*', '2', '1', '1'],
    ['1', '2', '*', '1'],
    ['1', '2', '1', '1'],
    ['*', '1', ' ', ' ']
]
*/

function revealSabotage(store) {
    for (let i = 0; i < store.length; i++) {
        for (let j = 0; j < store[i].length; j++) {
            if (store[i][j] != "*") {
                let u = i > 0 && store[i - 1][j] == "*";
                let d = i < store.length - 1 && store[i + 1][j] == "*";
                let l = j > 0 && store[i][j - 1] == "*";
                let r = j < store[i].length - 1 && store[i][j + 1] == "*";
                let d1 = i > 0 && j > 0 && store[i - 1][j - 1] == "*";
                let d2 = i > 0 && j < store[i].length - 1 && store[i - 1][j + 1] == "*";
                let d3 = i < store.length - 1 && j > 0 && store[i + 1][j - 1] == "*";
                let d4 = i < store.length - 1 && j < store[i].length - 1 && store[i + 1][j + 1] == "*";
                let all = [u, d, l, r, d1, d2, d3, d4].filter(x => x == true).length;
                store[i][j] = all == 0 ? " " : all.toString();
            }
        }
    }
    return store
}

const store = [
    ['*', ' ', ' ', ' '],
    [' ', ' ', '*', ' '],
    [' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ']
]

console.log(revealSabotage(store))