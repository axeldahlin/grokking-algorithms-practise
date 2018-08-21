// graph
const graph = {};
graph['start'] = {};
graph['start']['a'] = 10;


graph['a'] = {};
graph['a']['b'] = 20;


graph['b'] = {};
graph['b']['c'] = 1;
graph['b']['fin'] = 30;

graph['c'] = {};
graph['c']['a'] = 1;

graph['fin'] = {};

// the costs table
const costs = {};
costs['a'] = 10;
costs['b'] = Infinity;
costs['c'] = Infinity;
costs['fin'] = Infinity;


// the paraents table
const parents = {};
parents['a'] = 'start';
parents['b'] = 'start';
parents['fin'] = null;

let processed = [];

function find_lowest_cost_node(costs) {
  let lowest_cost = Infinity;
  let lowest_cost_node = null;
  for (let node in costs) {
    const cost = costs[node];
    if (cost < lowest_cost && (processed.indexOf(node) === -1)) {
      lowest_cost = cost;
      lowest_cost_node = node;
    }
  }
  return lowest_cost_node;
}

let node = find_lowest_cost_node(costs);

while (node != null) {
  let cost = costs[node];
  let neighbors = graph[node];
  Object.keys(neighbors).forEach(n => {
    let new_cost = cost + neighbors[n];
    if (new_cost < costs[n]) {
      costs[n] = new_cost;
      parents[n] = node; 
    }
  });
   processed.push(node);
   node = find_lowest_cost_node(costs);
}

console.log({costs});
console.log({parents});