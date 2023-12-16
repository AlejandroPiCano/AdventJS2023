/**
 * Con el tema de las redes sociales, Santa Claus tiene pánico que los niños se despierten mientras él está repartiendo regalos en sus casos, usen el móvil para grabarlo y se haga viral en TikTok.

Quiere evitarlo a toda costa. Cada casa en esa calle tiene un número de regalos preparados. Sin embargo, las casas tienen un sistema de seguridad conectado entre casas adyacentes, por lo que no puede dejar los regalos en dos casas seguidas, o se activará la alarma que alertará a los niños.

Dada un array de enteros no negativos regalos que representa la cantidad de regalos en cada casa, tu tarea es ayudar a Papá Noel a determinar la máxima cantidad de regalos que puede entregar en una noche sin activar ninguna alarma.

maxGifts([2, 4, 2]) // 4 (4)
maxGifts([5, 1, 1, 5]) // 10 (5 + 5)
maxGifts([4, 1, 1, 4, 2, 1]) // 9 (4 + 4 + 1)
maxGifts([1, 3, 1, 3, 100]) // 103 (3 + 100)
 */

function maxGifts(houses) {
    const memo = [];

    function maxGiftsRec(index, jumps) {
        if (index >= houses.length) {
            return 0;
        }

        if (memo[index] && memo[index][jumps] !== undefined) {
            return memo[index][jumps];
        }

        if (index == houses.length - 1) {
            return houses[index];
        }

        let result;

        if (jumps) {
            result = houses[index] + maxGiftsRec(index + 2, false);
        } else {
            const iCurrent = houses[index] + maxGiftsRec(index + 2, false);
            const exCurrent = maxGiftsRec(index + 1, true);
            result = Math.max(iCurrent, exCurrent);
        }

        if (!memo[index]) {
            memo[index] = [];
        }

        memo[index][jumps] = result;

        return result;
    }

    const result = maxGiftsRec(0, false);
    return result;
}


console.log(maxGifts([2, 4, 2])) // 4 (4)
console.log(maxGifts([5, 1, 1, 5])) // 10 (5 + 5)
console.log(maxGifts([4, 1, 1, 4, 2, 1])) // 9 (4 + 4 + 1)
console.log(maxGifts([1, 3, 1, 3, 100])) // 103 (3 + 100)

let a = [];

for (let i = 0; i < 50; i++) {
    a.push(i);
}
console.log("started")
console.log(maxGifts(a));
console.log("ended")

//([1, 3, 1, 3, 100, 101])