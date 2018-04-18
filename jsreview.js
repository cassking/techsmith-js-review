////prototype inheritance
//every object has a prototype
//ohter objects inherit props from parent
//calling method on object, looks at object
//then parent
//OOP
let car = function(model){
  this.model = model
}
car.prototype.getModel = function() {
  return this.model
}

let toyota = new car('toyota')
console.log(toyota.getModel())

let nissan = new car('nissan')
console.log(nissan.getModel())
//fiunction decl v function expression

funcD() // available here
//funcE() //not available here
// will throw error
function funcD() {
  console.log('function declaration')
}

let funcE = function() {
  console.log('function expression, anon')
}
funcD() // available here
funcE() // available here


//what are promises
//async call that has to wait for something
//that has to function, then execute
//a call back function on success or failure
//promises simplify this
// 
// var promise1 = new Promise(function(resolve, reject){
//   resolve($.ajax('a.json'))
// })
//
// promise1.then(function(r){
//   return new Promise()
// }).then(function(result){
//   $('#div1').html(result);
// })


//setTimeout()

setTimeout(function(){//executes last even if 0 secs has to wait for everything stack to finish
  console.log('a')
}, 0);
console.log('b')//exectutes first with c
console.log('c')

//what is closure, how to use it
// when a fucntion reutnrs another function
let obj = function() {
  let i =0
  return {
    setI(k){
      i=k
    },
    getI(){
      return i;// eac function has it's own closure
    }
  }
}
let x = obj()
x.setI(2)
x.setI(4)
console.log(x)
console.log(x.getI())


///
console.log([]+[])// returns empty string
console.log({}+{})// returns empty string


function a() {
  return 'hello'
}
const sentence = a `hi`;//template litral considres an argument so same as a('hi')
console.log(sentence)// returns hello

//editable content
// in inspect get the document.body.contentEditable= true
// can edit pages on chrome
//<div contentEditable='true'>hello</div>


function y() {
  console.log(this.length)
}
var z = {
  length: 5,
  method:function(y){
    arguments[0]()
  }
}
z.method(y,1)//retuns 2 length of array of arguments
