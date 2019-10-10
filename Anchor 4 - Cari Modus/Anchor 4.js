function cariModus(arr) 
{
    console.log('\n','\n', 'case for -', arr, '\n ------------------------------------');

    // cari unique number
    var uniqueNumber = [arr [0]]

    for (var x = 1; x < arr.length; x++)
      {
        for (var y = 0; y<x; y++)
          {
              if ( arr[y] === arr[x] )
                {
                    break
                }
              else if ( y === x-1 && arr[y] !== arr[x])
                {
                    uniqueNumber.push(arr[x])
                }
          }

      }
    // console.log('unique number =', uniqueNumber)

    
    //hitung kemunculan unique number tersebut
    var uniqueNumberCounter = []
    
    for (x = 0; x < uniqueNumber.length; x++)
      {
          uniqueNumberCounter.push(0)

          for (y = x; y < arr.length; y++)
            {
                if(arr[y] === arr[x])
                  {
                      uniqueNumberCounter[x] += 1
                  }
            }

      }
    // console.log('unique number counter =', uniqueNumberCounter)
    // console.log('unique number length =', uniqueNumberCounter.length)


    // hitung modus 
    // sekalian cek apakah setiap array hanya muncul sekali = gkada yang modus
    var modus = uniqueNumber[0]
    var movingCounter = uniqueNumberCounter[0]

    var modusEligibility = uniqueNumberCounter[0]

    for (x = 1; x < uniqueNumber.length; x++)
      {
        if (uniqueNumberCounter[x] > movingCounter)
          {
              movingCounter = uniqueNumberCounter[x]
              modus = uniqueNumber[x]
          }
        
        modusEligibility += uniqueNumberCounter[x]

      }
    
    if(modusEligibility / uniqueNumberCounter.length === uniqueNumberCounter[0])
      {
          modus = -1
      }

    // console.log('most appearance =', movingCounter)
    // console.log('modus =', modus)
    




    //final
    var defaultString = 'jawaban = '
    return defaultString + modus

}





  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1
 


