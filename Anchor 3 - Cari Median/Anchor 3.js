function cariMedian(arr) 
{
    console.log('\n ------------------------------------');
  
    var panjangIndex = arr.length
    var middleIndex = Math.ceil(panjangIndex /2) - 1


    if (panjangIndex % 2 === 0)
        {
            var middleIndexDown = (panjangIndex/2) - 1
            var middleIndexUp = middleIndexDown + 1

            median = (arr[middleIndexDown] + arr[middleIndexUp]) / 2
        }
    else
        {
            median = arr[middleIndex]
        }
    
    // console.log ('Panjang index =', panjangIndex)
    // console.log('middle index =', middleIndex)
    // console.log('middle down =', middleIndexDown)
    // console.log('middle up =', middleIndexUp)


    return median





}


// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
 

