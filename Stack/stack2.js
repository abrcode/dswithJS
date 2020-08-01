//create a stack
var Stack = function() {

   this.count=0 //for checking how many items in stack
   this.storage ={}  //empty object


  //add the value onto the end of the stack
  this.push = (value) =>{
    this.storage[this.count] = value; //add the value topo of the stack
    this.count ++
  }


 //remove and return the value at the end of the stack

  this.pop = function(){

    if(this.count === 0){
      console.log('The Stack is empty');;
    }

    this.count-- ;
    var result= this.storage[this.count];
    delete this.storage[this.count]; // removing the last value
    return result
  }

  //size of stack
  this.size = function(){
    return this.count;
  }

 //retrn the value at the end of the stack
  this.peek = function () {
    return this.storage[this.count-1]; // last item of stack
  }
}

//create object of stack
var myStack = new Stack();

myStack.push('Aniket');
myStack.push('Yash');
myStack.push('Karan');
myStack.push('Mahesh');
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push(5);
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.size());
