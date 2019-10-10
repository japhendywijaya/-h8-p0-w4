function angkaPrima(angka) 
{
  console.log('\n', 'case for -', angka, '\n ------------------------------------');


    if (angka <=1)
      {
        return false
      }
    else
      {
      for (var x = 2; x<=angka; x++)
        {
          if (x === angka)
            {
              return true
            }
          else if( angka%x === 0)
            {
              return false
            }
      
        } 
      
    }
      
    }
    





  // TEST CASES
  console.log(angkaPrima(3)); // true

  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false 




  console.log(angkaPrima(1)); // false 
  console.log(angkaPrima(0)); // false 