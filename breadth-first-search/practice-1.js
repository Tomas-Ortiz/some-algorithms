var Queue = function () {
  this.items = [];
};

Queue.prototype.enqueue = function (obj) {
  this.items.push(obj);
};

Queue.prototype.dequeue = function () {
  return this.items.shift();
};

Queue.prototype.isEmpty = function () {
  return this.items.length === 0;
};

var doBFS = (graph, source) => {
  var bfsInfo = [];

  for (let i = 0; i < graph.length; i++) {
    bfsInfo[i] = {
      distance: null,
      predecessor: null,
    };
  }

  bfsInfo[source].distance = 0;

  var queue = new Queue();
  queue.enqueue(source);

  while (!queue.isEmpty()) {
    var vertexRemoved = queue.dequeue();

    for (let i = 0; i < graph[vertexRemoved].length; i++) {
      var vertex = graph[vertexRemoved][i];

      if (bfsInfo[vertex].distance === null) {
        bfsInfo[vertex].distance = bfsInfo[vertexRemoved].distance + 1;
        bfsInfo[vertex].predecessor = vertexRemoved;
        queue.enqueue(vertex);
      }
    }
  }
  return bfsInfo;
};

var adjList = [
  [1], // vertex 0
  [0, 4, 5], // vertex 1
  [3, 4, 5], // vertex 2
  [2, 6], // vertex 3 --> source
  [1, 2], // vertex 4
  [1, 2, 6], // vertex 5
  [3, 5], // vertex 6
  [], // vertex 7
];

var bfsInfo = doBFS(adjList, 3);

for (let i = 0; i < adjList.length; i++) {
  console.log(
    'vertex ' +
      i +
      ': distance = ' +
      bfsInfo[i].distance +
      ', predecessor = ' +
      bfsInfo[i].predecessor
  );
}
