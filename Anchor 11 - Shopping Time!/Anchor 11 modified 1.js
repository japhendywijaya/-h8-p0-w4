function shoppingTime(memberId, money) 
{
    console.log('\n','\n', 'case for -', memberId, money, '\n ------------------------------------');
    
    // bikin object sale
    var sale =
      {
        'Sepatu brand Stacattu' : 1500000,
        'Baju brand Zoro' : 500000,
        'Baju brand H&N' : 250000,
        'Sweater brand Uniklooh' : 175000,
        'Casing Handphone' : 50000,
      }
    // console.log('item on sale =', sale)



    // bikin algoritma list purchase
    var lastIndex
    var itemBought = 0
    var x = 0
    var lastMoney = money

    if (money >=50000)
    {
      while (true) 
      {
        if( x === Object.keys(sale).length || lastMoney < 50000)
          {
            break
          }
        else if (lastMoney - Object.values(sale)[x] < 0)
          {
            x++
          }
        else
          {
            lastMoney -= Object.values(sale)[x]
            lastIndex = x
            itemBought += 1

            x++
          }
      }

    }
    
    // console.log('\n');
    // console.log('sisa uang', lastMoney)
    // console.log('item bought', itemBought)
    // console.log('last index =', lastIndex)

    


    // bikin object listPurchased
    var barangBelanjaan = []
    for (x = lastIndex-itemBought+1; x<=lastIndex; x++)
      {
          barangBelanjaan.push(Object.keys(sale)[x])
      }
    // console.log('\n');
    // console.log('list purchased =', barangBelanjaan)


    var member = 
    {
        memberID : memberId,
        money : money,
        listPurchased : barangBelanjaan,
        changeMoney : lastMoney
    }
    // console.log('\n');
    // console.log('output =', member)


    if (!memberId)
      {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
      }
    else if (money < 50000)
      {
        return 'Mohon maaf, uang tidak cukup'
      }
    else
      {
        return member
      }

    


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