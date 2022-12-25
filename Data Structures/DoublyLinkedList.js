class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.previous = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.length = 0
        this.head = null
        this.tail = null
    }


    push(val)
    {
        let newNode = new Node(val)

        if(this.length===0)
        {
            this.head = newNode
            this.tail = this.head
            
        }
        else{
            this.tail.next = newNode
            newNode.previous = this.tail
            this.tail = newNode

        }
        this.length++
        return this

    }

    print(){
        let arr = []
        let current = this.head
        while(current)
        {
            arr.push(current.val)
            current = current.next
        }

        console.log(arr)
    }

    pop()
    {
       if(this.length===0) return null

       let poppedNode = this.tail

       if(this.length===1) 
       {
        this.head = null
        this.tail = null
       } 

       else{
        this.tail = poppedNode.previous
        this.tail.next = null
        poppedNode.previous = null
       }
       this.length--
       return poppedNode
    }

    shift()
    {
        if(this.length===0) return null

        let shiftedNode = this.head
        if(this.length===1) 
        {
         this.head = null
         this.tail = null
        } 
        else{
        this.head = shiftedNode.next
        shiftedNode.next = null
        this.head.previous = null
        }
        this.length --
        return shiftedNode
    }
    unshift(val)
    {
        let newNode = new Node(val)

        if(this.length===0)
        {
            this.head = newNode
            this.tail = newNode
        }
        else{
            this.head.previous = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length ++
        return this
    }

    get(index){
        if(index<0 || index>= this.length) return null
        if(index<= this.length/2)
        {
            console.log("start wow")
        let count = 0
        let current = this.head

        while(count!==index)
        {
            current = current.next
            count ++
        }
        return current
    }
    else{
        console.log(" end wow")
        let count = this.length-1
        let current = this.tail
        while(count!==index)
        {
            current = current.previous
            count --
        }
        return current
    }
    }

    set(index, word)
    {
        let foundNode = this.get(index)
        if(!foundNode) return false
        foundNode.val = word
        return true
    }

    insert(index, value)
    {   if(index<0 || index>this.length)return null
        if(index===0) return this.unshift(value)
        if(index===this.length) return this.push(value)
        let newNode = new Node(value)
        let beforeNode = this.get(index-1)
        let afterNode = beforeNode.next
        beforeNode.next = newNode
        newNode.previous = beforeNode
        newNode.next = afterNode
        afterNode.previous = newNode
        this.length ++
        return true
    }

    remove(index)
    {
        if(index<0 || index>=this.length)return null
        if(index===0) return this.shift()
        if(index===this.length-1) return this.pop()

        let removeNode = this.get(index)
        let previousNode = removeNode.previous
        let nextNode = removeNode.next
        previousNode.next = nextNode
        nextNode.previous = previousNode
        removeNode.next = null
        removeNode.previous =null
        this.length --
        return removeNode

    }

    reverse()
    {
        let node = this.head
        this.head = this.tail
        this.tail = node
        let previous = null;
        let next = null;
        if(this.length===0) return null
        if(this.length===1) return this

        for(let i =0; i<this.length; i++)
        {
            next = node.next
            node.next = previous
            node.previous = next
            previous = node
            node = next

        }
        return this
    }
}


let list = new DoublyLinkedList()
let list2 = new DoublyLinkedList()
list.push(34)
list.push(45)
list.push(100)
list.push(45)
list.push("hi")
list.print()
list.reverse()

// list.pop()
// console.log(list.tail.previous)
list.print()
console.log(list.get(1).previous)
