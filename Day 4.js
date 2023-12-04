function decode(message) {
    let result = "";
    let i = 0;
     
    // for(let i=0; i< message.length; i++)
    while( i< message.length)
     {
      let letter = message[i];
     
      if(letter == "(") {
         
         let indexOfClosed = message.indexOf(")", i+1);
         let indexOfOpen = message.indexOf("(", i+1);
         
         if(indexOfClosed < indexOfOpen || indexOfOpen == -1){
           result += reverse(message.substr(i+1, indexOfClosed-i-1))
           
           i = indexOfClosed + 1;
          }
          else
          {
             let firstPart = message.substr(i+1, indexOfOpen - i-1);
             let indexOfCloseInner = message.indexOf(")", indexOfOpen+1);
             let middlePart = message.substr(indexOfOpen+1, indexOfCloseInner - indexOfOpen- 1);
             let indexOfCloseOutter = message.indexOf(")", indexOfCloseInner+1);
             let lastPart = message.substr(indexOfCloseInner+1, indexOfCloseOutter - indexOfCloseInner - 1 );
             
             if(lastPart.indexOf("(") > -1)
             {
               lastPart = reverse(lastPart);
               //lastPart = lastPart.replaceAll(")", "");              
             }

             result += reverse( firstPart + reverse(middlePart) +  lastPart );
             
             i= indexOfCloseOutter+1;          
          }     
         
      }
      else 
      {
         result+= letter;
         i++;
      }
     
     }
     
     result = result.replaceAll("(", "").replaceAll(")", "");
     return result;
   }
   
   
   function reverse (text)
   {
      let result = "";
      
      for(index=text.length-1; index>=0 ; index--)
     {
       result+= text[index];
     }
     
     return result;
   }
   
   console.log("eee");
   
   const a = decode('hola (odnum)')
   console.log(a) // hola mundo
   
   const b = decode('(olleh) (dlrow)!')
   console.log(b) // hello world!
   
   const c = decode('sa(u(cla)atn)s')
   console.log(c) // santaclaus
   
  console.log( decode('((nta)(sa))'));
  // atn as