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
  
  // console.log('index char a =', indexCharA)
  // console.log('index char b =', indexCharB)

  


  //cari pair AB 
  var pairAB = []

  for(x = 0; x < indexCharA.length; x++)
    {
      for(var y = 0; y < indexCharB.length; y++)
        {
          if ( indexCharA[x] < indexCharB[y] )
            {
              var tempPairAB = []
              tempPairAB.push(indexCharA[x], indexCharB[y])
              pairAB.push(tempPairAB)
            }
        }
      
    }
  // console.log('pair AB =', pairAB)

  
  //cari pair BA
  var pairBA =[]
  for(x = 0; x < indexCharB.length; x++)
    {
      for(var y = 0; y < indexCharA.length; y++)
        {
          if ( indexCharB[x] < indexCharA[y] )
            {
              var tempPairBA = []
              tempPairBA.push(indexCharB[x], indexCharA[y])
              pairBA.push(tempPairBA)
            }
        }
      
    }
  // console.log('pair BA =', pairBA)  

  

  // hitung jarak dari masing2 pair
  var pairABRangeCounter = 0
  var pairBARangeCounter = 0
  var rangeToCount = 3

  for( x = 0; x < pairAB.length; x++)
    {
      if (pairAB.length === 0)      
        {
          break
        }
      
      var temp = Math.abs(pairAB[x][0] - pairAB[x][1]) - 1 
      if ( temp === rangeToCount)
        {
          pairABRangeCounter += 1
        }
    }
  // console.log('jumlah pair AB Range yang =3 :', pairABRangeCounter)


  for( x = 0; x < pairBA.length; x++)
    {
      if (pairBA.length === 0)      
        {
          break
        }
      
      var temp = Math.abs(pairBA[x][0] - pairBA[x][1]) - 1
      if ( temp  === rangeToCount)
        {
          pairBARangeCounter += 1
        }
    }
  // console.log('jumlah pair BA Range yang =3 :', pairBARangeCounter)

  
  var result = pairABRangeCounter + pairBARangeCounter
  // console.log('result =', result)

  
  // final
    var defaultString = 'jawaban = '

    if ( result > 0)
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
  console.log(checkAB('bacon and meat')); // false   

  console.log(checkAB('barbarianbarbarian')); // true


//test case in question
console.log(checkAB('aaaabbbb'));
console.log(checkAB('ababababab'));
