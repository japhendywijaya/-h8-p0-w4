function ubahHuruf(kata) 
{
    console.log('\n','\n', 'case for -', kata, '\n ------------------------------------');



    // get the char code
    var charCode = []

    for ( var x = 0; x < kata.length; x++)
      {
        charCode.push(kata.charCodeAt(x))
      }
    // console.log('char code =', charCode)



    // adding 1 to the char code
    // sekalian revert back to char
    var newKata = []

    for (x = 0; x < charCode.length; x++)
      {
          charCode[x] += 1

          newKata.push(String.fromCharCode(charCode[x]))
      }
    
    var kataJoin = newKata.join("")
    // console.log('after adding 1 to char code -', charCode)
    // console.log('reverting back to word =', kataJoin)



    //final
    var defaultString = 'jawaban = '
    return defaultString + kataJoin

}
  

  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
