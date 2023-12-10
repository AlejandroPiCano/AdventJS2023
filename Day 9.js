/*
Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!

Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, siempre deben estar alternadas. Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.

Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), devuelva el número mínimo de luces que hay que cambiar para que estén los colores alternos.

adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// -> 1 (cambias la cuarta luz a 🔴)

adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
// -> 0 (ya están alternadas)

adjustLights(['🔴', '🔴', '🔴'])
// -> 1 (cambias la segunda luz a 🟢)
 */

function adjustLights(lights) {
    if (lights.length < 2) return 0;

    let f = adjustLightsPart(lights);

    lights[0] = lights[0] == '🔴' ? '🟢' : '🔴';
    let s = adjustLightsPart(lights);

    return Math.min(f, s + 1);

    function adjustLightsPart(lights) {
        if (lights.length < 2) return 0;

        // Code here
        let prevNotChanged = lights[0],
            prevChanged = lights[0] == '🔴' ? '🟢' : '🔴';
        cChanged = 1,
            cNotChanged = 0;

        for (let i = 1; i < lights.length; i++) {

            if (lights[i] == prevChanged) {
                cChanged++;
                prevChanged = lights[i] == '🔴' ? '🟢' : '🔴';
            } else
                prevChanged = lights[i];

            if (lights[i] == prevNotChanged) {
                cNotChanged++;
                prevNotChanged = lights[i] == '🔴' ? '🟢' : '🔴';
            } else
                prevNotChanged = lights[i];
        }

        /*for (let light of lights) {
            if (light == prev) {
                countChangedFirst++;
                prev = light == '🔴' ? '🟢' : '🔴';
            } else
                prev = light;
        }*/
        return Math.min(cChanged, cNotChanged);
        //return count;
    }
}

console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']));

console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']));
// -> 1 (cambias la cuarta luz a 🔴)

console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']));
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)


// -> 0 (ya están alternadas)

console.log(adjustLights(['🔴', '🔴', '🔴']));
// -> 1 (cambias la segunda luz a 🟢)