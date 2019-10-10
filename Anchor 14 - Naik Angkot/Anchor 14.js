function naikAngkot(arrPenumpang) 
{
    console.log('\n', '\n', '-------------------------------------');

    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    
    var transaction = []
    var pricePerRoute = 2000

    for (var x = 0; x < arrPenumpang.length; x++)
      {
          var objPenumpang = 
          {
              penumpang : '',
              naikDari : '',
              tujuan: '',
          }


          for (var y = 0; y < arrPenumpang[x].length; y++)
            {
                objPenumpang[Object.keys(objPenumpang)[y]] = arrPenumpang[x][y]
            }
            

          var distance = rute.indexOf(objPenumpang.tujuan) - rute.indexOf(objPenumpang.naikDari)
          var propBayar =  distance * pricePerRoute
          objPenumpang.bayar = propBayar
          
          transaction.push(objPenumpang)
          
      }
    
    
    return transaction

}
  





  //TEST CASE
  console.log('case 1 \n', naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log('case 2 \n', naikAngkot([])); //[]
