// varian 2, lebih simple

function shoppingTime(memberId, money) 
{
    console.log('\n','\n', 'case for -', memberId, money, '\n ------------------------------------');
    
    // bikin object sale (iseng aja sengaja bikin objectnya unsorted)
    var saleUnsorted =
     {
        'Sweater brand Uniklooh' : 175000,
        'Baju brand H&N' : 250000,
        'Baju brand Zoro' : 500000,
        'Sepatu brand Stacattu' : 1500000,
        'Casing Handphone' : 50000,
      }
    // console.log('item on sale =', sale)
    

    // disorting dulu dari yang harganya paling gede
    // step 1
    var saleReverseSorted = {}
    for ( var x = 0 ; x< Object.keys(saleUnsorted).length; x++)
      {
        saleReverseSorted[Object.values(saleUnsorted)[x]] = Object.keys(saleUnsorted)[x]
      }
    // console.log('sale Reverse Sorted =\n', saleReverseSorted)


    // step 2
    var saleSortedZA = {}
    for (x = Object.keys(saleReverseSorted).length - 1; x >= 0; x--)
      {
        saleSortedZA[Object.values(saleReverseSorted)[x]] = Object.keys(saleReverseSorted)[x]
      }
    // console.log('saleSortedZA =\n', saleSortedZA)




    
    var minimumMoney = 50000

    if(!memberId)
      {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
      }
    else if (money < minimumMoney)
      {
        return 'Mohon maaf, uang tidak cukup'
      }
    else 
      {
        var memberBuyer =
          {
            memberId: memberId,
            money: money,
          }
        
        var runningMoney = money
        var shoppingList = []

        while (true)
          {
            for (x = 0; x < Object.keys(saleSortedZA).length; x++)
              {
                if ( runningMoney >= Object.values(saleSortedZA)[x])
                  {
                    runningMoney -= Object.values(saleSortedZA)[x]
                    shoppingList.push(Object.keys(saleSortedZA)[x])
                  }
              }
            break
          }

        memberBuyer['listPurchase'] = shoppingList
        memberBuyer['changeMoney'] = runningMoney

        // console.log('memberBuyer =', memberBuyer)
      }

    return memberBuyer
}
  







  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000)); //2475000
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }

  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

  
  console.log(shoppingTime('test', 50000));
  console.log(shoppingTime('test', 230000));

  