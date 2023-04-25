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



//Exercise 1

const hasOddNumber = (array) => {
  return array.some(function(num){
    return (num % 2 !== 0)
  })

}

hasOddNumber([1,2,2,2,2,2,4]) // true
hasOddNumber([2,2,2,2,2,4]) // false

// Exercise 2

const hasAZero = (number) => {
  const numberToString = number.toString().split('')
  return numberToString.some(function(zero) {
    return zero === '0';
  })
}

hasAZero(33321232131012) // true
hasAZero(1212121) // false

// Exercise 3

const hasOnlyOddNumbers = (array) => {
  if(array.every((num)=>{return num % 2 !== 0})) return true 
  return false;
}


hasOnlyOddNumbers([1,3,5,7]) // true
hasOnlyOddNumbers([1,2,3,5,7]) // false

// Ecercise 4

const hasNoDuplicates = (array) => {
  return array.every((num)=>{return array.indexOf(num) === array.lastIndexOf(num)})
}

hasNoDuplicates([1,2,3,1]) // false
hasNoDuplicates([1,2,3]) // true


// Ecercise 5

const hasCertainKey = (arr, key) => {
  return arr.every((object)=> {return key in object })
}


let arr = [
  {title: "Instructor", first: 'Elie', last:"Schoppik"},
  {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
  {title: "Instructor", first: 'Matt', last:"Lane"},
  {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
]

hasCertainKey(arr,'first') // true
hasCertainKey(arr,'isCatOwner') // false

// Exercise 6

const hasCertainValue = (arr, key, value) => {
  return arr.every((object)=> {return object[key] === value})
}

hasCertainValue(arr,'title','Instructor') // true
hasCertainValue(arr,'first','Elie') // false



