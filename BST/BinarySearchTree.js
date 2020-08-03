class Node{
  constructor(data, left = null , right = null) {
    this.data = data;
    this.left = left;  // point left node
    this.right = right;  // point right node
  }
}
class BST {
  constructor() {
  this.root =  null; // in starting root(top of tree) is nul
  }


 //add method
 add(data){
   const node = this.root //refer to the node
  //if its first node then it wil null
   if (node === null) {
     this.root = new Node(data);
     return ;
   }else {
    // if its not first node and node inside the function will be a root node
  const searchTree = function (node) {
    if (data < node.data) {
      if (node.left === null) {
              node.left =new Node(data);
              return;
      }else if (node.left !== null) {
        return searchTree(node.left)  // recusrsion function
      }
    }else if (data > node.data) {
      if( node.right === null){
         node.right = new Node(data);
        return ;
      }else if (node.right !== null) {
        return searchTree(node.right);
      }
    }else {
      return null; // if they equal then we dont add it in tree
    }
  };
  return searchTree(node);
 }
 }


  // find minimum value in search searchTree
 findmin(){
   let current = this.root;

   while(current.left !== null) {
     current = current.left;
   }
   return current.data;
 }


 // find maximum in searchTree
 findmax(){
   let current = this.root;

   while(current.right !== null) {
     current = current.right;
   }
   return current.data;
 }


  // find nd isPresent is so similar

  find(data){
     let current = this.root;

   while (current.data !== data) {
      //checking that data will be grater or lesser then current.data
      if(data < current.data)
     {
       current = current.left
     }else {
       current = current.right
     }

     if(current === null){
       return null
     }
   }
   return current;
  }

//isPresent is same as find method

isPresent(data){
  let current = this.root;

 while (current.data !== data) {

  if( data < current.data){
    current = current.left
  }else{
    current = current.right
  }
  return false;
 }
 return true;
}


//removing data from treer NOTE : in BST we use recusrsion method for deletion and adding data
remove(data){
  const removeNode = function(node , data){

//if its empty tree
    if (node == null) {
      return null;
    };

    if(data == node.data){
      //node has no children
      if(node.left == null && node.right == null){
        return null // setting he reference to the node to null
      }
       //node has no left child
       if(node.left == null){
         return node.right;
       }
      //if node has no right child
      if(node.right == null){
        return node.left;
      }

       //if node has two children
        var tempNode =node.right;
        while (tempNode.left != null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right =removeNode(node.right ,tempNode.data);
        return node;
    }else if (data < node.data) {
      node.left = removeNode(node.left , data);
      return node;
    }else {
      node.roght =removeNode(node.right , data);
      return node;
    }
  }
  this.root = removeNode(this.root , data);
}
}


const bst = new BST();
bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
bst.add(8)
bst.remove(4);
console.log(bst.findmin());
console.log(bst.findmax());
console.log(bst.isPresent(30));
