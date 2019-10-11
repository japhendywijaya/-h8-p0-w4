function countProfit(shoppers) 
{
    console.log('\n','\n', '------------------------------------');

    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
    // console.log('\n');
    // console.log('listBarang =', listBarang)
    // console.log('panjang listBarang =', listBarang.length)


      
    
    // creating Object for each array item of ListBarang
      var itemDB = []

      if (shoppers.length >0)
      {
          for (var x =0; x<listBarang.length; x++)
            {
                // 1) cari product
                var propProduct = listBarang[x][0]


                // 2) cari shopper & cari leftover
                var propShopper =[]
                var propLeftOver = listBarang[x][2]
                var sellAmount = 0

                for ( var y = 0; y<shoppers.length; y++)
                  {
                    // console.log('shopper =', Object.values(shoppers)[y].product)
                    
                    if (Object.values(shoppers)[y].product === propProduct &&
                          Object.values(shoppers)[y].amount <= propLeftOver)
                        { 
                          propShopper.push(Object.values(shoppers)[y].name)

                          sellAmount += Object.values(shoppers)[y].amount
                          propLeftOver -= Object.values(shoppers)[y].amount
                        }
                      
                  }
                  // console.log('item shopper =', propShopper)
                  // console.log('sell amount =', sellAmount)


                // 3) cari profit
                var propProfit = sellAmount * listBarang[x][1]

                

                // 4) compiling into object
                var shopItem = 
                {
                    product : propProduct,
                    shoppers : propShopper,
                    leftover : propLeftOver,
                    totalProfit : propProfit 
                }


                itemDB.push(shopItem)
              
            } 

        }
        
        
        return itemDB
        

}


  
  // TEST CASES

  console.log('case #1', countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log('case #2', countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]

  console.log('case #3', countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]

  console.log('case #4', countProfit([])); //[]