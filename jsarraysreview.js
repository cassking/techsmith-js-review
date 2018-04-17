//different ways to REMOVE dupes from Arrays
//Four solutions, 1 ) One brute-force method using a for loop,  2)sort and remove, 3)  using JavaScript Objects and 4) Using ES6 / ES2015 Sets.
//least complex
let a = [1,2,5,2,1,8]
let b =[]
let len = a.length

let bSet = new Set(a)
//or use spread operator
console.log([... new Set(a)])//use spread opconverts to Array
//using new ES6 set which only stores unique vals
//using a seprate Array

for(let i=0; i< len; i++){
  if(b.indexOf(a[i] === -1)){//-1 means does not exist
    b.push(a[i])
  }
}
console.log(b)

///using quick sort
a.sort();//returns 1 1 2 2 5 8
let temp_store;//tracks if prev. encoutnered number
for(let i=0;i<len; i++){
  if(a[i] !== temp_store){//if not encountered
    b.push(a[i])//push
    temp_store = a[i]  //store it
  }
}

//store in sep array
obj = {};
for(let val of a){
  obj[val] = true//keys are unique
}

let b =Object.keys(obj)//return as array
console.log(obj)
