/*
En Rovaniemi, Finlandia 🇫🇮, los trineos 🛷 se alquilan por intervalos de tiempo. Cada intervalo se representa como un array de dos elementos, donde el primer elemento es el inicio del alquiler y el segundo es el final.

Por ejemplo, el array [2, 7] representa un alquiler que comienza en la hora 2 y termina en la hora 7. El problema es que a veces los intervalos se superponen entre sí, haciendo que sea un lío entender de qué hora a qué hora se alquiló el trineo.

Nos piden que, para simplificar la tarea de calcular el tiempo total de alquiler, escribamos una función que fusione todos los intervalos superpuestos y devolver un array de intervalos ordenados:

optimizeIntervals([
  [5, 8],
  [2, 7],
  [3, 4]
]) // [[2, 8]]

optimizeIntervals([
  [1, 3],
  [8, 10],
  [2, 6]
]) // [[1, 6], [8, 10]]

optimizeIntervals([
  [3, 4],
  [1, 2],
  [5, 6]
]) // [[1, 2], [3, 4], [5, 6]]
Puedes asumir que el primer elemento de cada intervalo siempre es menor o igual que el segundo elemento. Pero los intervalos no están necesariamente ordenados.

Los números de horas pueden llegar hasta la cifra 9999.
 */

function optimizeIntervals(intervals) {
    function optimize(intervals) {
        let result = [intervals[0]];

        for (let current of intervals) {
            let needToAdd = false;

            for (let j = 0; j < result.length; j++) {
                let prev = result[j];
                needToAdd = false;

                if (current[0] >= prev[0] && current[0] <= prev[1]) {
                    if (current[1] > prev[1])
                        result[j] = [prev[0], current[1]];
                    break;
                } else if (current[1] >= prev[0] && current[1] <= prev[1]) {
                    result[j] = [current[0], prev[1]];

                    break;
                } else if (current[0] <= prev[0] && current[1] >= prev[1]) {
                    result[j] = current;
                    break;
                } else
                    needToAdd = true;
            }

            if (needToAdd)
                result.push(current);
        }

        return result;
    }

    let result = optimize(intervals);
    result = optimize(result);

    return result.sort(function(a, b) {
        return a[0] - b[0];
    });
}

console.log(optimizeIntervals([
    [1, 5],
    [6, 10],
    [11, 15],
    [16, 20]
]));
/*
console.log(optimizeIntervals([
        [3, 4],
        [5, 8],
        [2, 7]
    ]))
   
    console.log(optimizeIntervals([
        [5, 8],
        [2, 7],
        [3, 4]
    ]));

    console.log(optimizeIntervals([
        [1, 3],
        [8, 10],
        [2, 6]
    ]))

    console.log(optimizeIntervals([
        [3, 4],
        [1, 2],
        [5, 6]
    ]))*/