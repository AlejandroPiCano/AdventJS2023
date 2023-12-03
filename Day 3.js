/*
En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.

Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.

Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original = 'stepfor'
const modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

const original = 'abcde'
const modified = 'abcde'
findNaughtyStep(original, modified) // ''
*/

function findNaughtyStep(original, modified) { 
    let index = 0;
    
   for(index=0; index< original.length; index++)
    {
       if(index > modified.length - 1)
         return original[index];  
         
       if(original[index] != modified[index])
        {
           if(index+1 < modified.length && original[index] == modified[index+1])
                return modified[index]; 
           else
              return original[index];  
        }
    }
        
    if(index == modified.length)
     return "";
     
    if(index < modified.length)
     return modified[index]; 
    
  }