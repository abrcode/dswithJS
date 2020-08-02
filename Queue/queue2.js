/**
 * Priority queue
 */

 function PriorityQueue() {
   var collection = []

   //print the PriorityQueue
   this.printCollection = function () {
     (console.log(collection));
   }

//here passing element is array
  this.enqueue = function (element) {
    if(this.isEmpty()){
      collection.push(element)
    }else {
      var added = false;
      for (var i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1])//checkimg priorities
        {
         collection.splice(i,0,element); //splice method(position , noms of elementdlt , element add)
          added = true;
          break;
        }
      }
     if(!added){
       collection.push(element);
     }
    }
  };


//this.dequeue
this.dequeue = function () {
  var value = collection.shift()
  return value[0];
}

//fromt of the queue

this.front = function () {
  return collection[0];
}

this.size= function () {
 return collection.length;
}

this.isEmpty = function(){
  return (collection.legth === 0);
}

}

var pq=new PriorityQueue()
pq.enqueue(['Aniket',2])
pq.enqueue(['Vishal',2])
pq.enqueue(['Yash',1])
pq.printCollection()
pq.dequeue()
pq.front()
pq.printCollection()
