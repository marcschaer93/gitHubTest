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