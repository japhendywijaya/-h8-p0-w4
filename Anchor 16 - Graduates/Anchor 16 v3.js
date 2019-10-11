// varian 3, jauh lebih simple

function graduates (students) 
{
    console.log('\n', '\n', '-------------------------------------');

    var minimumScore = 75

    var classes ={}

    for (var x = 0; x < students.length; x++)
      {

        if (students[x].score > minimumScore)
          {
            if ( classes[students[x].class] === undefined)
              {
                classes[students[x].class] = []
                classes[students[x].class].push 
                  (
                    {name: students[x].name, score: students[x].score}
                  )
              }
            else
              {
                classes[students[x].class].push 
                  (
                    {name: students[x].name, score: students[x].score}
                  )
              }


          }


      }
    return classes


    
}
  
  console.log('case 1 - \n', graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  

  console.log('case 2 - \n', graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log('case 3 - \n', graduates([])); //{}

  