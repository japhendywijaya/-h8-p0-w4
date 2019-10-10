// ini varian 2 yang menggunakan algoritma "Pohon Faktor"
// code lebih panjang, tapi cara ini akan meng-efisiensikan proses perulangan program 
// karena sekarang tidak perlu lagi diuji 10.000x apabila 'test number'nya = 10.000

function fpb(angka1, angka2) 
{
    console.log('\n', 'case for - FPB', angka1, angka2, '\n ------------------------------------');

    var factorAngkaSatu = []
    var factorAngkaDua = []
    
    // cari komponen angka1
    var x = 2
    while (true)
      {
        if (x === angka1)
          {
              factorAngkaSatu.push(x)
              break
          }
        else if ( angka1 % x === 0)
          {
              factorAngkaSatu.push(x)
              angka1 = angka1 / x
          }
        else if ( angka1 % x !== 0)
          {
              x++
          }


      }
    // console.log('Komponen angka 1 =', factorAngkaSatu)


    // cari komponen angka2
    x = 2
    while (true)
      {
        if (x === angka2)
          {
              factorAngkaDua.push(x)
              break
          }
        else if ( angka2 % x === 0)
          {
              factorAngkaDua.push(x)
              angka2 = angka2 / x
          }
        else if ( angka2 % x !== 0)
          {
              x++
          }


      }
    // console.log('Komponen angka 2 =', factorAngkaDua)


    // cari common component
    var commonComponent =[]
    var tempCommon = ""

    for( x = 0; x <= factorAngkaSatu.length-1; x++)
      {
        // console.log ('x =', x)

        
        for ( var y = 0; y <= factorAngkaDua.length-1; y++)
          {

            if (factorAngkaSatu[x] === factorAngkaDua[y])
              {
                if(factorAngkaSatu[x] !== tempCommon)
                  {
                    tempCommon = factorAngkaSatu[x]
                    commonComponent.push(tempCommon)
                  }
              }

          }

      }
    // console.log('Common Component =', commonComponent)
    

    // hitung total Result berdasarkan common component tersedikit di factorAngkaSatu dan factorAngkaDua
    var totalResult = 1

    for (x = 0; x <= commonComponent.length-1; x++)
      {
        var ccDiFactorSatu = 0
        var ccDiFactorDua = 0

        for( y = 0; y <= factorAngkaSatu.length-1; y++)
          {
            if (commonComponent[x] === factorAngkaSatu[y])
              {
                ccDiFactorSatu +=1
              }
          }
        // console.log('CC', commonComponent[x], 'di factor satu =', ccDiFactorSatu)

        for( var z = 0; z <= factorAngkaDua.length-1; z++)
          {
            if (commonComponent[x] === factorAngkaDua[z])
              {
                ccDiFactorDua +=1
              }
          }
        // console.log('CC', commonComponent[x], ' di factor dua =', ccDiFactorDua)
        
        if ( ccDiFactorSatu <= ccDiFactorDua)
          {
            totalResult *= (commonComponent[x] * ccDiFactorSatu)
          }
        else
          {
            totalResult *= (commonComponent[x] * ccDiFactorDua)
          }

      }

    return totalResult

      


}



// test case
var defaultString = 'jawaban ='

  console.log(defaultString, fpb(12, 16)); // 4
  console.log(defaultString, fpb(50, 40)); // 10
  console.log(defaultString, fpb(22, 99)); // 11
  console.log(defaultString, fpb(24, 36)); // 12
  console.log(defaultString, fpb(17, 23)); // 1


