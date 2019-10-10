function highestScore (students) 
{
    console.log('\n', '\n', '-------------------------------------');


    var classes = ['foxes', 'wolves', 'tigers']
    var classesDBProp = []


    // cari top score dan top student, push property class DB nantinya
    for(var x = 0; x < classes.length; x++)  
      {
        var topScore = 0
        var topStudent =''

        for (var y = 0; y < students.length; y++)
           {

                if(students[y].class === classes[x])
                  {
                     if(students[y].score > topScore)
                       {
                           topScore = students[y].score
                           topStudent = students[y].name
                       }
                  }
           }

        var classesProps =
            {
                name: topStudent,
                score: topScore
            }
        // console.log(classesProps)

        classesDBProp.push(classesProps)

      }
    
    // console.log(classesDBProp)
    


    // bikin Object class DB
    var classesDB ={}

    for (x = 0; x < classes.length; x++)
      {
        if(classesDBProp[x].name !== "")
          {
              classesDB[classes[x]]= classesDBProp[x]
          }
      }
    // console.log(classesDB)
    return classesDB

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


  