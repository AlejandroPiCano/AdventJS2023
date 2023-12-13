/*
En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés

Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
 */
function decode(message) {
    function reverse(text) {
        let result = "";

        for (let index = text.length - 1; index >= 0; index--) {
            result += text[index];
        }

        return result;
    }

    let result = "";
    let i = 0;

    while (i < message.length) {
        let letter = message[i];

        if (letter == "(") {

            let indClosed = message.indexOf(")", i + 1);
            let indfOpen = message.indexOf("(", i + 1);

            if (indClosed < indfOpen || indfOpen == -1) {
                result += reverse(message.substr(i + 1, indClosed - i - 1))

                i = indClosed + 1;
            } else {
                let firstPart = message.substr(i + 1, indfOpen - i - 1);
                let iCI = message.indexOf(")", indfOpen + 1);
                let middlePart = message.substr(indfOpen + 1, iCI - indfOpen - 1);
                let iCO = message.indexOf(")", iCI + 1);
                let lastPart = message.substr(iCI + 1, iCO - iCI - 1);

                if (lastPart.indexOf("(") > -1) {
                    lastPart = reverse(lastPart);
                }

                result += reverse(firstPart + reverse(middlePart) + lastPart);

                i = iCO + 1;
            }

        } else {
            result += letter;
            i++;
        }

    }

    result = result.replaceAll("(", "").replaceAll(")", "");
    return result;
}


const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

console.log(decode('((nta)(sa))'));
// atn as