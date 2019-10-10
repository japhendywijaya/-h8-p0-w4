function urutkanAbjad(str) 
{
    console.log('\n','\n', 'case for -', str, '\n ------------------------------------');
    
    var splittingString = []

    splittingString = str.split("")
    // console.log('splitting string =', splittingString)


    splittingString.sort(function(a,b) {return a>b})
    // console.log('splitting string sorted =', splittingString)

    var strJoin = splittingString.join("")
    



    //final
    var defaultString = 'jawaban = '
    return defaultString + strJoin 
    

}
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'
