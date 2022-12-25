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

class WeightedGraph{

    constructor(){
        this.adjacencyList = {}
    }


    addVertex(vertex){
        if(!this.adjacencyList[vertex]) 
        {this.adjacencyList[vertex] = []
        }
    }

    addEdge(v1,v2, weight){
        this.adjacencyList[v1].push({node: v2, weight:weight})
        this.adjacencyList[v2].push({node: v1, weight:weight})
    }

    Dijkstra(start, finish){
        const nodes = new PriorityQueue()
        const distances = {}
        const previous = {}
        let path = [] //return at end
        let smallest;

        //build up initial state
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex]= 0
                nodes.enqueue(vertex, 0)
            }
            else{
                distances[vertex]=Infinity
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null
        }
      

        while(nodes.values.length){
           smallest = nodes.dequeue().val
            if(smallest === finish){
               while(previous[smallest])
               {
                path.push(smallest)
                smallest = previous[smallest]
               }
               break;
            }
           if(smallest || distances[smallest]!== Infinity){
            for(let neighbor in this.adjacencyList[smallest])
            {
                //find neighboring node
                let nextNode = this.adjacencyList[smallest][neighbor]
                // console.log(nextNode)
                //calculate new distance to neighboring node
                let candidate = distances[smallest] + nextNode.weight
                let nextNeighbor = nextNode.node
                if(candidate< distances[nextNeighbor]){
                    //updating new smallest distance to neighbor
                    distances[nextNeighbor] = candidate
                    //updating previous - how we got to next neighbor
                    previous[nextNeighbor] = smallest
                    //enqueue in priority queue with new priority
                    nodes.enqueue(nextNeighbor, candidate)
                }
            }
           }
        }
        return path.concat(smallest).reverse()
    }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


console.log(graph.Dijkstra("A", "E"));
