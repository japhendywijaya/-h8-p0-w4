function tukarBesarKecil(kalimat) 
{
    console.log('\n','\n', 'case for -', kalimat, '\n ------------------------------------');

    var newKalimat = ""
    
    for (var x = 0; x < kalimat.length; x++)
      {
          if (kalimat[x] === kalimat[x].toUpperCase())
            {
                newKalimat += kalimat[x].toLowerCase()
            }
          else
            {
                newKalimat += kalimat[x].toUpperCase()
            }
      }

    return newKalimat



} 








  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"