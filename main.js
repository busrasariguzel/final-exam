const makeParagraph = (arr) => {
const string =arr.toString()

let newStr=''
for(let i=0;i<string.length;i++){
  if(string[i-1] === '.'){
newStr+= ' '
  } else {
    newStr += string[i]
  }
}
return newStr
}

const averageDogAge = (arr) => {
const newArr=[];
arr.forEach(function(arr){
if(arr.species === 'dog'){
  newArr.push(arr.age)
}
})

for(let i=0; i<newArr.length;i++){


}

let numbers = newArr.toString(' ')

// for(let i=0;i<numbers.length;i++){
//   return Number(i)
// }
return numbers
}


// let numbers= newArr.join(' ')
// let numbers2 = Number(numbers)
// return numbers
// }

const addToDigits = (number1, number2) => {



}
const isAsleep = function(people){
  return people.asleep===true
}

const nightOwls = function(people){
  return people.filter(isAsleep(element))
}


// const nightOwls = (people) => {
// const newArr=[];
// people.forEach(function(people){
// if(!people.asleep){
//   newArr.push(people)
// }

// })
// return newArr
// }



const nap = function(arr, callback){

}

// const findIndices = (arr,callback) => {
//   arr.filter(callback(arr){
//     if(callback(arr)===true){

//     }
//   })

// }

const findIndices = (array,callback) => {
  
const newArr=[];
array.forEach(function(element){
  if(callback===true){
    newArr.push(element)
}
})
return newArr
} 
const Faqtory = () => {
  return {
  length:0,
  questions:[],


  addQuestion(value){
  
  this.length++
  return this.questions.push(value)
  
  },


  
  }
}


class Dog {
constructor(name,breed,color){
this.name=name;
this.breed=breed;
this.color=color;
}
makeNoise() {
  return 'Woof.'

}
}

class GreatDane {
constructor(name,color){
this.name=name;
this.breed= 'Great Dane';
this.color=color;

}
makeNoise() {
  return 'WOOF.'

}

}

class Beagle {
constructor(name){
this.name=name;
this.breed='Beagle'
this.color='white/black/brown'
}
makeNoise() {
  return 'Awooooooooo.'

}
}

class Pointer {
constructor(name,color, isPoint){
this.name=name;
this.color=color
this.breed='Pointer';
this.points= isPoint;
}
point(){
  if(this.points===true){
    return 'Over there!'
  } else {
    return 'Woof.'
  }
}
}


module.exports = {
  makeParagraph,
  averageDogAge,
  addToDigits,
  nightOwls,
  nap,
  findIndices,
  Faqtory,
  Dog,
  GreatDane,
  Beagle,
  Pointer,
}