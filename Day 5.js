function cyberReindeer(road, time) {
    function setAt(text, character, position)
    {
      return text.substr(0, position) + character + text.substr(position+1, text.length-1-position);
    }

    if (time == 0)
     return []

     let result = [];
     result.push(road);

     let previous = ".";
     let position = 1;

    for(let i=1;i<time;i++)
    {
        if(i==5)
        road = road.replaceAll("|", "*");

         if(road[position] != "|")
        {
           let current = road[position];           
           road = setAt(road, "S", position );    //road[i] = "S";
           road = setAt(road, previous, position-1  ); //road[i-1] = previous;
           previous = current;
           position++;
        }
        result.push(road);

    }

    return result;
  }

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)
console.log(result);