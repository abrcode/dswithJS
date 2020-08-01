/**
 * sets
 */

 function mySet() {
  //collection will hold the set
   var collection =[]

 //this method will check the presence of elemnt end give true or false
  this.has =function (element) {
     return (collection.indexOf(element) !== -1);//its return the index of that element
  }

  //this method will return all the value of set
  this.values = function(){
    return collection;
  }

  //this method will add element to the set
  this.add = function (element) {
    if(!this.has(element)){
      collection.push(element)
      return true;
    }
    return false;
  }

  //this method will remove element from the set
  this.remove = function (element) {
    if(this.has(element)){
      index = collection.indexOf(element);
      collection.splice(index,1);
      return true;
    }
    return false;
  }

  // this method will return the size of set
  this.size= function(){
    return collection.length;
  }

  //this method will return the union of two sets
  this.union =  function(otherSet){
    this.unionSet = new mySet()
    this.firstSet =  this.values()
    this.secondSet = otherSet.values();

    firstSet.forEach((e) => {
      unionSet.add(e)
    });

    secondSet.forEach((e) => {
      unionSet.add(e)
    });
    return unionSet;
  }

 //this method will return the intersections of two sets as new set
 this.intersection = function(otherSet){
   var intersectionSet = new mySet()
   var firstSet = this.values();

  firstSet.forEach((e) => {
    if(otherSet.has(e)){
      intersectionSet.add(e)
    }
  });
  return intersectionSet
 }

//this method will return the difference of two sets as new set
this.difference = function(otherSet){
  var differenceSet = new mySet();
  var firstSet = this.values();

  firstSet.forEach((e) => {
    if(!otherSet.has(e)){
      differenceSet.add(e)
    }
  });

  return differenceSet;
}

//this method will test if the set is subset of a different set
this.subset = function (otherSet) {
  var firstSet = this.values();
  return firstSet.every(function (value) {
    return otherSet.has(value);
  });
 };
}

var setA = new mySet();
var setB = new mySet();

setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");

console.log(setA.subset(setB));
// the intersectionSet is a new set thats why we call .values behind the intersection
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());
