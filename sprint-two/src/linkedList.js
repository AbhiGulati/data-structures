var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(list.tail) {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    } else {
      list.tail = Node(value);
      list.head = list.tail;
    }
  };

  list.removeHead = function(){
    if(!list.head) {
      return null;
    }

    var tmp = list.head;
    list.head = list.head.next;
    if(!list.head) {
      list.tail = null;
    }
    return tmp.value;
  };

  list.contains = function(target){
    var node = list.head;
    while(node) {
      if(node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };

  list.findKey = function(target){
    var node = list.head;
    while(node) {
      if(node.value[0] === target) {
        return node;
      }
      node = node.next;
    }
    return null;
  }

  list.removeKey = function(target){
    var node = list.head;;
    if (node.value[0] === target){
      list.removeHead();
      return true;
    }
    else{
      while(node.next && node.next.value[0] !== target){
        node = node.next;
      }
      if (node.next){
        node.next = node.next.next;
        if(node.next === null) {
          list.tail = node;
        }
        return true;
      } else {
        return false;
      }
    }

  }

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
