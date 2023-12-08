/**
 * Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.

Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.

Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:

drawGift(4, '+')


   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####


drawGift(5, '*')

    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####


drawGift(1, '^')

#

Importante: Nos han dicho que siempre hay que dejar un salto de línea al final del dibujo.

Nota: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter ".

 */

function drawGift(size, symbol) {

    function fillLines(symbol, size, diagonal) {
        let result = "";
        for (let i = 0; i < size; i++) {
            let isLine = diagonal && (i == 0 || i == size - 1 || i == size - diagonal - 1)
            result += isLine ? "#" : symbol;
        }
        return result;
    }

    let rows = [];
    let firstHalf = "";
    let maxLong = 2 * size - 1;

    if (size <= 0) {
        return "\n";
    }

    if (size == 1) {
        return "#" + "\n"
    }

    //first row
    let blankSpaces = size - 1;
    let row = fillLines(" ", blankSpaces);
    row += fillLines("#", maxLong - blankSpaces);
    rows.push(row);
    firstHalf += row + "\n";

    for (let i = 1; i < size - 1; i++) {
        let blankSpaces = size - i - 1;
        let row = fillLines(" ", blankSpaces);
        row += fillLines(symbol, maxLong - blankSpaces, i);
        rows.push(row);
        firstHalf += row + "\n";
    }

    //last row    
    row = fillLines("#", size);
    row += fillLines(symbol, maxLong - size - 1) + "#";
    rows.push(row);
    firstHalf += rows[size - 1] + "\n";

    let secondHalf = "";
    for (let i = size - 2; i >= 0; i--) {
        secondHalf += rows[i].replaceAll(" ", "") + "\n";
    }

    return firstHalf + secondHalf;
}


console.log(drawGift(1, '^'));
console.log(drawGift(2, "-"));
console.log(drawGift(3, "-"));
console.log(drawGift(4, "-"));
console.log(drawGift(30, "-"));
console.log("terminó");

console.log(drawGift(2, "+"));

console.log(drawGift(4, "+"));