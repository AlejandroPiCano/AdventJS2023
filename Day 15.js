/*
Estamos programando unos robots llamados giftbot 🤖🎁 que navegan de forma autónoma por los almacenes de regalos.

Estamos creando una función a la que le pasamos: el almacén 🏬 que deben navegar y los movimientos ↔️ que pueden realizar.

El almacén se representa como un array de cadenas de texto, donde:

. significa que hay vía libre.
* significa que hay un obstáculo.
! es la posición inicial del robot.
Los movimientos son un array de cadenas de texto, donde:

R mueve al robot una posición a la derecha.
L mueve al robot una posición a la izquierda.
U mueve al robot una posición hacia arriba.
D mueve al robot una posición hacia abajo.
Hay que tener en cuenta que el robot no puede superar los obstáculos ni los límites del almacén.

Dados un almacén y los movimientos, debemos devolver el array con la posición final de nuestro robot.

const store = ['..!....', '...*.*.']

const movements = ['R', 'R', 'D', 'L']
const result = autonomousDrive(store, movements)
console.log(result)

[
  ".......",
  "...*!*."
]

// El último movimiento es hacia la izquierda, pero no puede moverse porque hay un obstáculo.
Ten en cuenta que la store es un array que puede ser de un número de filas que va de 1 a 100, ya que tenemos almacenes de todos los tamaños.

También que el robot es posible que termine en su posición inicial si no puede moverse o si está dando vueltas.
 */


function autonomousDrive(store, movements) {
    function setAt(line, index, replace) {
        let lineChanged = line.substr(0, index) + replace;
        lineChanged += line.substr(index + 1, line.length - 1 - index);
        return lineChanged;
    }

    function swap(store, x, y, newX, newY) {
        let temp = store[x][y];
        let temp2 = store[newX][newY];
        store[x] = setAt(store[x], y, temp2)
        store[newX] = setAt(store[newX], newY, temp)
        return store;
    }

    let x = 0,
        y = 0;

    for (let i = 0; i < store.length; i++) {
        y = store[i].indexOf("!");
        if (y > -1) {
            x = i;
            break;
        }
    }

    for (let i = 0; i < movements.length; i++) {
        let movement = movements[i],
            newX = x,
            newY = y;

        if (movement == "R") {
            newY++;
        } else if (movement == "L") {
            newY--;
        } else if (movement == "U") {
            newX--;
        } else {
            newX++;
        }

        if (newX >= 0 && newX < store.length && newY >= 0 &&
            newY < store[0].length && store[newX][newY] != "*") {
            store = swap(store, x, y, newX, newY);
            x = newX;
            y = newY;
        }
    }

    return store;
}

store = ['..!....', '...*.*.']

movements = ['R', 'R', 'D', 'L']
result = autonomousDrive(store, movements)
console.log(result)