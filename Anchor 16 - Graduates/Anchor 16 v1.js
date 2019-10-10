// v1 = munculin semua kelas walaupun tidak ada yang lulus, value kelas tersebut kosong
function graduates (students) 
{
    console.log('\n', '\n', '-------------------------------------');


    var classes = ['foxes', 'wolves', 'tigers']
    var minScore = 75

    //compiling classes DB
    var classesDB = []
    for (var x = 0; x < classes.length; x++)
      {
        var classesDBProp = []

        for (var y = 0; y < students.length; y++ )
          {

            if (students[y].class === classes[x])
              {
                if(students[y].score >= minScore)
                {
                    var graduatingStudent =
                    {
                        name: students[y].name,
                        score: students[y].score
                    }

                    classesDBProp.push(graduatingStudent)
                }  

              }
          }

        classesDB.push(classesDBProp)
        

      }
    // console.log(classesDB)


    //compiling Object  classesDBReport
    var classesDBReport = {}

    for (x = 0; x < classes.length; x++)
      {
          if (classesDB.length !== 0)
            {
                classesDBReport[classes[x]] = classesDB[x]
            }
      }
    // console.log(classesDBReport)      
    return classesDBReport
            
    
    





    
}
  
  console.log(graduates([
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
  

  console.log(graduates([
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
  
  
  console.log(graduates([])); //{}

  