function digitPerkalianMinimum(angka) 
{
    console.log('\n','\n', 'case for -', angka, '\n ------------------------------------');
    
    var numberPair = []


    // cari komponen angka
    var tempPair = []

    for (var x = 1; x <= Math.max(1 , angka/2); x++ )
      {
          tempPair = []

          if ( angka % x ===0)
            {
                tempPair.push(String(x), String(angka/x))
                numberPair.push(tempPair)
            }
      }
    // console.log('numberPair =', numberPair)
    
    

    // hitung jumlah digit dalam array
    var jumlahAngkaTemp
    var jumlahAngka = []

    for (x = 0; x < numberPair.length; x++)
      {
        jumlahAngkaTemp = 0
        jumlahAngkaTemp = numberPair[x][0].length + numberPair[x][1].length
        jumlahAngka.push(jumlahAngkaTemp)
      }
    // console.log('jumlah angka =', jumlahAngka)



    // cari yang jumlahnya paling kecil
    var minAngka = jumlahAngka[0]

    for (x = 1; x < jumlahAngka.length; x++)
      {
          if (jumlahAngka[x] < minAngka)
            {
                minAngka = jumlahAngka[x]
            }
      }
    // console.log('jumlah paling kecil =', minAngka)
    


    //final
    var defaultString = 'jawaban = '
    return defaultString + minAngka

}




  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
