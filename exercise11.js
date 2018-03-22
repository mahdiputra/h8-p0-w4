function changeMe(arr) {
  var hasil = []
  
  for(var i = 0 ; i < arr.length ; i++){
    var bio = {}
    bio.firstName = arr[i][0];
    bio.lastName = arr[i][1];
    bio.gender = arr[i][2];
    bio.age = ''
    if(arr[i][3] === undefined ||arr[i][3] >= 2019){
    bio.age = 'invalid birth year' 
    }else{
      bio.age = 2018 - Number(arr[i][3])
    }
    hasil.push(bio)
  }
  console.log(hasil)
  
  
}


// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 2019], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Bir


