class Sorter {
  constructor() {
    this.arr = []
    this.sortFunc = function(a, b) {return a - b};// your implementation
  }

  add(element) {
   this.arr.push(element); // your implementation
  }

  at(index) {
      return this.arr[index]; // your implementation
  }

  get length() {
    return this.arr.length;
    // your implementation
  }

  toArray() {
    return this.arr;// your implementation
  }

  sort(indices) {
   indices.sort(function(a, b) {return a - b});
   var arrSort = [];
   for (var i = 0; i < indices.length; i++){
     arrSort.push(this.arr[indices[i]])
       }
    arrSort.sort(this.sortFunc);
    for (var i = 0; i<indices.length; i++){
      this.arr[indices[i]] = arrSort[i];
    }
// your implementation
  }

  setComparator(compareFunction) {
  this.sortFunc = compareFunction  // your implementation
  }
}

module.exports = Sorter;