// varian 2, jauh lebih simple

function highestScore (students) 
{
    console.log('\n', '\n', '-------------------------------------');


    var classes ={}

    for (var x = 0; x<students.length; x++)
      {
        if (classes[students[x].class] === undefined)
          {
            classes[students[x].class] = 
              {
                name: students[x].name,
                score: students[x].score
              }
          }
        else if ( students[x].score > classes[students[x].class].score)
              {
                classes[students[x].class].name = students[x].name
                classes[students[x].class].score = students[x].score
              }
          

      }
    
    return classes


}
  
  // TEST CASE
  console.log('case 1 - \n', highestScore([
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
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  



  
  console.log('case 2 - \n', highestScore([
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
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log('case 3 - \n', highestScore([])); //{}


  