function maxDistance(movements) {
    let distance = 0;
    let asterisks = 0;

    for(let character of movements)
    {
        if(character == ">")
          distance++;
        else  if(character == "<")
          distance --;
        else
          asterisks++;    
    }

    if(distance < 0)
      distance*=-1;

      return distance + asterisks;
  }


  const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5