class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Stack{
constructor(){
    this.first = null
    this.last = null
    this.size = 0
}

push(val){
    let newNode= new Node(val)
    if(!this.first){
        this.first = newNode
        this.last = newNode
    }
    else{
        let temp = this.first
        this.first = newNode
        this.first.next = temp
    }

    this.size++
    return this.size
}

    pop(){
        if(!this.first){
           return null
        }
        let temp = this.first

        if(this.size ===1)
        {
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.val

    }
}


class Queue{
constructor(){
    this.first = null
    this.last = null
    this.size = 0
}

enqueue(val){
let newNode = new Node(val)

if(this.size===0){
    this.first = newNode
    this.last = newNode
}
else{
    this.last.next = newNode
    this.last = newNode
}
this.size++
return newNode

}

dequeue(){
    if(this.size===0){
       return null
    }
    let temp = this.first
    if(this.first===this.last){
        this.last = null
    }
    this.first = this.first.next
    
    this.size --
    return temp.val

}
}


q = new Queue()
q.enqueue(12)
q.enqueue(32)
q.enqueue(69)
console.log(q)
q.dequeue()

console.log(q)