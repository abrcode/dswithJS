/**
 * queue : same as stack but it worls first in first out (FIFO)
 in js just like stack , queue also implement as array
 */
 //queue

 function Queue() {
   var collection = []; // holds itemsof queue

  //methods of queue

  this.print = function () {
    console.log(collection);
  }

  //just like pushing item from the frontside
  this.enqueue = function(element) {
    collection.push(element)
  }

  //this method will be remove(Popping) the item from the front side
  /**
   * shift is method of array which ewmove elemnt from front side
     and unshift method for adding eleemnt from front side of array
   */
  this.dequeue = function () {
    return  collection.shift();
  }

 //this method will give front element of queue
 this.front = function(){
   return collection[0]
 }

 //this method give sizeof queue
  this.size = function () {
    return collection.length;
  }

  // find that queue is empty or not?

  this.isEmpty = function(){
    return (collection.length === 0);
  }

 }


var a=new Queue()

a.enqueue('a');
a.enqueue('b');
a.enqueue('c');
a.enqueue('d');
a.print();
console.log(a.dequeue());
console.log(a.size());
console.log(a.front());
a.print();
