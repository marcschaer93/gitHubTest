// const oddNumbers = [11,33,77];




// const doubleArray = (array) => {
//   const doubledArray = [];
//   array.forEach(number => {
//     doubledArray.push(number * 2)
//   });
//   return doubledArray;
// }

// doubleArray(oddNumbers);





// const tripleArray = (array) => {
//   return array.map(num=>{
//     return num*3 
//   })
// }

// tripleArray(oddNumbers)


//CallBack Functions

// some // every

// const checkboxes = document.querySelectorAll('input[type="checkbox"]');
// const checklistForm = document.querySelector('#checklistForm');
// const submitBtn = document.querySelector('#submit')
// console.log(checklistForm);


// submitBtn.addEventListener('click', function(e){
//   e.preventDefault()
//   if(e.target.className === 'button'){
//     const allChecked = Array.from(checkboxes).every((checkbox)=>{
//       return checkbox.checked;
//     })
//     if (allChecked){
//       document.body.style.backgroundColor = 'red'}
//     if(!allChecked) alert('Please, check all checkboxes')
//   }
  
// })


// const submit = () => {
//   Array.from(checkboxes).every((checkbox)=>{
//     return checkbox.checked;
//   })
// }



// const array = ['hello', 'mellow', 'cat', 'campfire', 'ella'];


// const searchEl = (array, string) => {
//   const searchEll = string;
//   array.some((word)=> {
//     return word.indexOf(searchEll);
//   })
  
// }

// searchEl(array, "ell")

// const mySome = (array, callback) => {
//   for ( let i = 0; i < array.length; i++){
//     if(callback(array[i], i, array)) return true;
//   }
//   return false;
// }

// mySome([1,2,3,4,5,6,7], function(n){
//   return n < 5;
// })

// mySome(['hello', 'mellow', 'cat', 'campfire', 'ella'], function(word){
//   return word.value = 'hello';
// })



// //Exercise 1

// const hasOddNumber = (array) => {
//   return array.some(function(num){
//     return (num % 2 !== 0)
//   })

// }

// hasOddNumber([1,2,2,2,2,2,4]) // true
// hasOddNumber([2,2,2,2,2,4]) // false

// // Exercise 2

// const hasAZero = (number) => {
//   const numberToString = number.toString().split('')
//   return numberToString.some(function(zero) {
//     return zero === '0';
//   })
// }

// hasAZero(33321232131012) // true
// hasAZero(1212121) // false

// // Exercise 3

// const hasOnlyOddNumbers = (array) => {
//   if(array.every((num)=>{return num % 2 !== 0})) return true 
//   return false;
// }


// hasOnlyOddNumbers([1,3,5,7]) // true
// hasOnlyOddNumbers([1,2,3,5,7]) // false

// // Ecercise 4

// const hasNoDuplicates = (array) => {
//   return array.every((num)=>{return array.indexOf(num) === array.lastIndexOf(num)})
// }

// hasNoDuplicates([1,2,3,1]) // false
// hasNoDuplicates([1,2,3]) // true


// // Ecercise 5

// const hasCertainKey = (arr, key) => {
//   return arr.every((object)=> {return key in object })
// }


// let arr = [
//   {title: "Instructor", first: 'Elie', last:"Schoppik"},
//   {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
//   {title: "Instructor", first: 'Matt', last:"Lane"},
//   {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
// ]

// hasCertainKey(arr,'first') // true
// hasCertainKey(arr,'isCatOwner') // false

// // Exercise 6

// const hasCertainValue = (arr, key, value) => {
//   return arr.every((object)=> {return object[key] === value})
// }

// hasCertainValue(arr,'title','Instructor') // true
// hasCertainValue(arr,'first','Elie') // false


// const myFind = (array, callback) => {
//   for ( let i = 0; i < array.length; i++) {
//     if(callback(array[i], i, array) === true ) return array[i];
//   }
// }


// myFind([1,2,3,4,5], function(num){
//   return num === 4;
// }) 


// const myFindIndex = (array, callback) => {
//   for (let index = 0; index < array.length; index++) {
//     if(callback(array[index], index, array) === true) return index;
    
//   } 
//   return -1
// }

// myFindIndex([1,2,3,4,5,6,7], function(num){
//   return num === 5;
// })


// // Exercise 1

// const findUserByUsername = (array, userName) => {
//   return array.find((user)=>{
//     return user["username"] === userName;
//     // OR: return user.username === userName;
//   })
// }


// const users = [
//   {username: 'mlewis'},
//   {username: 'akagen'},
//   {username: 'msmith'}
// ];

// findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
// findUserByUsername(users, 'taco') // undefined

// // Exercise 2

// const removeUser = (array, userName) => {
//   let indexOfUserName = array.findIndex((user)=>{return user.username === userName})
//   if(indexOfUserName === -1) return undefined;

//   return array.splice(indexOfUserName, 1)[0];
// }

// removeUser(users, 'mlewis') // {username: 'akagen'}
// removeUser(users, 'akagen') // undefined


//Exercise 1

const extractValue = (arr, value) => {
  return arr.reduce((names, currentPerson)=>{
    names.push(currentPerson[value])
    return names
  },[])
}

const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']s

// Exercise 2

const vowelCount = (string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let stringArray = string.toLowerCase().split('');

  const filteredArray = stringArray.filter((char)=>{
    let filteredArray = [];
      return vowels.indexOf(char) !== -1
  })

   return filteredArray.reduce((letters, currentChar)=>{
    if(letters[currentChar] == null){
      letters[currentChar] = 1;
    } else {
      letters[currentChar] = letters[currentChar] + 1;
    }
    return letters
  }, {})
}

vowelCount('Elie') // {e:2,i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};

// Exercise 3

const addKeyAndValue = (arrNames, key, value) => { 
  arrNames.reduce((accu, currentObj, index)=>{
    accu[index][key] = value;
    // console.log(accu[index][key]);
    return accu;
  },arrNames)
}

const arrNames = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

addKeyAndValue(arrNames, 'title', 'Instructor') 


// [
//   {title: 'Instructor', name: 'Elie'},
//   {title: 'Instructor', name: 'Tim'},
//   {title: 'Instructor', name: 'Matt'},
//   {title: 'Instructor', name: 'Colt'}
// ]

// Exercise 4

const partition = (arr2, cb) => {
  return arr2.reduce((acc, next)=>{
    if(cb(next)){
      acc[0].push(next)
    } else {
      acc[1].push(next);
    } return acc;
  }, [[],[]])
}

function isEven(val){
  return val % 2 === 0;
}

const arr2 = [1,2,3,4,5,6,7,8];

partition(arr2, isEven) // [[2,4,6,8], [1,3,5,7]];

function isLongerThanThreeCharacters(val){
  return val.length > 3;
}


const names = ['Elie', 'Colt', 'Tim', 'Matt'];

partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]






// Exercise 

const array = ['dani', 'apfel', 'greentea', 'enduro78'];

const toUppercase = (array) => {
  return array.map(string => {
    return string.toUpperCase();
  });
}

toUppercase(array);








const extractCourse =  (array) => {
  return array.map((value)=>{return value.course})
}

extractCourse([
  { author: "Billy Banks", course: "Tai Bo" },
  { author: "Colt Steele", course: "JavaScript 101" },
  { author: "Gordon Ramsey", course: "Cooking and Yelling" },
])


// Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.


// const countdown = (time) => {
//   let timer = setInterval(() => {
//     time--;
//     if(time === 0){
//       clearInterval(timer);
//       console.log(`Its Over!`);
//     } 
//     else {console.log(time);}
//   }, 1000);
// }



// countdown(10);


Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.



randomGame