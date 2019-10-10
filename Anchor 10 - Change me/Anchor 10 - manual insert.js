function changeMe(arr) 
{

    var currentDate = new Date().getFullYear()
    // console.log(currentDate)

    for (var x = 0; x < arr.length; x++)
      {
        var birthYear = arr[x][3]
        var umur
        
        if ( birthYear === undefined)
          {
            umur = 'Invalid Birth Year'
          }
        else
          {
            umur = currentDate - birthYear
          }


        var celebrity = 
          {
            firstName : arr[x][0],
            lastName : arr[x][1],
            gender : arr[x][2],     
            age : umur
          }

          
          console.log( (x+1) + ". " + celebrity.firstName, celebrity.lastName, ":")
          console.log(celebrity)
          

      }
}
  








  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  
  changeMe([]); // ""



