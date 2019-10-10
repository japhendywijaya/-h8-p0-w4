function checkAB(num) 
{
    console.log('\n','\n', 'case for -', num, '\n ------------------------------------');

  // cari index untuk char 'a' dan char 'b'  
  var indexCharA = []
  var indexCharB = []

  for (var x = 0; x < num.length; x++)
    {
      if (num[x] === 'a')
        {
          indexCharA.push(x)
        }
      else if (num[x] === 'b')
        {
          indexCharB.push(x)
        }
    }
  
  console.log('index char a =', indexCharA)
  console.log('index char b =', indexCharB)

  


  //cari pair AB 
  var pairAB = []

  for(x = 0; x < indexCharA.length; x++)
    {
      for(var y = 0; y < indexCharB.length; y++)
        {
          if (indexCharA[x] < indexCharB[y])
            {
              var tempPairAB = []
              tempPairAB.push(indexCharA[x], indexCharB[y])
              pairAB.push(tempPairAB)
              
              if (x !== indexCharA.length-1)
                {
                  break 
                }
            }
        }
      
    }
  console.log('pair AB =', pairAB)

  
  //cari pair BA
  var pairBA =[]
  for(x = 0; x < indexCharB.length; x++)
    {
      for(var y = 0; y < indexCharA.length; y++)
        {
          if (indexCharB[x] < indexCharA[y])
            {
              var tempPairBA = []
              tempPairBA.push(indexCharB[x], indexCharA[y])
              pairBA.push(tempPairBA)
              

              if (x !== indexCharB.length-1)
                {
                  break 
                }
            }
        }
      
    }
  console.log('pair BA =', pairBA)  

  

  // hitung jarak dari masing2 pair
  var maxPairABRange = 0
  var maxPairBARange = 0

  for( x = 0; x < pairAB.length; x++)
    {
      if (pairAB.length === 0)      
        {
          break
        }
      
      var temp = Math.abs(pairAB[x][0] - pairAB[x][1] - 1) 
      if ( temp > maxPairABRange)
        {
          maxPairABRange = temp
        }
    }
  console.log('max pair AB Range =', maxPairABRange)


  for( x = 0; x < pairBA.length; x++)
    {
      if (pairBA.length === 0)      
        {
          break
        }
      
      var temp = Math.abs(pairBA[x][0] - pairBA[x][1] - 1) 
      if ( temp > maxPairBARange)
        {
          maxPairBARange = temp
        }
    }
  console.log('max pair BA Range =', maxPairBARange)

  
  var result
  if( maxPairABRange = 3 && maxPairABRange > maxPairBARange)
    {
      result = maxPairABRange
    }
  else if ( maxPairBARange =3 && maxPairBARange > maxPairABRange)
    {
      result = maxPairBARange
    }
  console.log('result =', result)

  
  // final
    var defaultString = 'jawaban = '

    if ( result = 3)
      {
        return defaultString + true
      }
    else
      {
        return defaultString + false
      }
    
}
  







// TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false   //COBA TANYA INI LOGIKANYA GIMANA, pair BA bisa lebih dari 1 a gk, kaya contoh soalyang diatasnya

  console.log(checkAB('barbarianbarbarian')); // true