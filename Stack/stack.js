/**
 * Stack : It works on last in first out (LIFO)
 */

/**
 function of stack : this is simple satck which work as array
push : place the data on top
pop : remove data from the top of the stack
peek :  for dispalying top element of stack ,
length : for the size of stack
 */


 var letters =[] //this is stack as array

 var word = "racecar"
 var rword ="";

//put  letters into the stack
for (var i = 0; i < word.length; i++) {
  letters.push(word[i])
}

//pop the stack so we can store reverse of the word
for (var i = 0; i < word.length; i++) {
   rword += letters.pop();
}

// chech whether its palindrome of // NOTE:
if (rword === word) {
  console.log(`${word} is a palindrome`);
}else {
  console.log(`${word} is not palindrome`);
}
