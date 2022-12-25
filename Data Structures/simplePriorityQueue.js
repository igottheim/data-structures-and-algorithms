class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

let a = new PriorityQueue()
a.enqueue("a", 5)
a.enqueue("B", 25)
a.enqueue("X", 4)

a.dequeue("B", 4)
console.log(a)
