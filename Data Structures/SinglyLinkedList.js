class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

class SinglyLinkedList{
    constructor(){
        this.length = 0
        this.head = null
        this.tail = null
    }

    push(val){
        let newNode = new Node(val)
        if(!this.head)
        {
            this.head = newNode
            this.tail = this.head
        }
        else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length ++
        return this
    }

    //remove item from end of list and return it
    pop(){
        if(!this.head) return undefined


        let current = this.head
        let newTail = current

        while(current.next)
        {
            //newTail will become the new tail once there isn't a .next
            newTail = current
            current = current.next
        }
        this.tail = newTail
        //sever connection
        this.tail.next = null
        this.length --
        if(this.length===0)
        {
            this.head =null
            this.tail =null
        }
        return current
    }

    //remove item from beginning of list
    shift(){
      if(!this.head) return undefined
      //store current head as variable
        let currentHead = this.head
    //head becomes next value of the currentHead
        this.head = currentHead.next
        //length of list decrements by 1
        this.length --
        if(this.length===0)
        {
            this.head =null
            this.tail =null
        }
        return currentHead
    }

    unshift(val){
        let newNode = new Node(val)

        if(!this.head)
        {
            this.head = newNode
            this.tail = this.head
            this.next = null
            this.length++
            return this
        }

        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }

    get(index){
        if(index<0|| index >=this.length) return null
        let count = 0
        let current = this.head
    
        while(count!==index)
        {
            current = current.next
            count++
        }
        return current
    }

    set(index, word)
    {
       let foundNode = this.get(index)
       if(!foundNode) return false
       foundNode.val = word
       return true

    }

    insert(index, val)
    {
        if(index<0 || index>this.length) return false
        if(index ===this.length) return !!this.push(val)
        if(index ===0) return !!this.unshift(val)
            let previous = this.get(index-1)
            let newNode = new Node(val)
            let temp = previous.next
            previous.next = newNode
            newNode.next = temp
            this.length++
            return true
    }

    remove(index)
    {
        if(index<0 || index>=this.length) return undefined
        if(index === 0) return this.shift()
        if(index === this.length-1) return this.pop()

        let previousNode = this.get(index-1)
        let removed = previousNode.next
        previousNode.next = removed.next
        this.length --
        return removed
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
            previous = node
            node = next

        }
        return this
    }
}

let list = new SinglyLinkedList
list.push("hello")
list.push("goodbye")
list.push("cool")
// list.unshift("testing")
// list.unshift("helloagain")
// list.push("hello1")
// console.log(list.set(-1, "AHHH"))
// console.log(list)
// list.insert(0, "newValue")
// list.insert(0,1)
// console.log(list.get(2))
// console.log(list)
// list.remove(2)


list.reverse().print()
console.log(list)