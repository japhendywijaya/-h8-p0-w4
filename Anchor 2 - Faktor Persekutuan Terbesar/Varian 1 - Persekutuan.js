// ini varian 1 yang menggunakan algoritma "Persekutuan"
// code lebih pendek tapi mengharuskan program untuk menguji setiap angka dari 1 sampai 'test number'
// akibatnya, apabila 'test number' = 10.000, maka program akan menguji 10.000 kali

function fpb(angka1, angka2) 
{
  console.log('\n', 'case for - FPB', angka1, angka2, '\n ------------------------------------');

  var factorAngkaSatu = []
  var factorAngkaDua = []


  for (var x = 1; x<=angka1; x++)
    {
      if( angka1 % x === 0)
        {
          factorAngkaSatu.push(x)
        }
    }
  
  for (var x = 1; x<=angka2; x++)
  {
    if( angka2 % x === 0)
      {
        factorAngkaDua.push(x)
      }
  }
  
  // console.log(factorAngkaSatu)
  // console.log(factorAngkaDua)

  var commonFactor = []

  for (var x = 0; x < factorAngkaSatu.length; x++)
    {
      for (var y =0; y < factorAngkaDua.length; y++)
        {
          if( factorAngkaSatu[x] === factorAngkaDua[y])
            {
              commonFactor.push(factorAngkaSatu[x])
            }

        }

    }

  // console.log(commonFactor)
  
  var fpb = commonFactor[0]
  // console.log(fpb)
  
  if ( commonFactor.length === 1)
    {
      return fpb
    }
  else
    {

      for( var x = 1; x <= commonFactor.length-1; x++)
        {
          if( commonFactor[x] > fpb)
            {
              fpb = commonFactor[x]
            }
        }

      return fpb
    }

}


// test case
var defaultString = 'jawaban ='

  console.log(defaultString, fpb(12, 16)); // 4
  console.log(defaultString, fpb(50, 40)); // 10
  console.log(defaultString, fpb(22, 99)); // 11
  console.log(defaultString, fpb(24, 36)); // 12
  console.log(defaultString, fpb(17, 23)); // 1



