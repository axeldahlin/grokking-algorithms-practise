const graph = {
  you: ["alice", "bob", "claire"],
  bob: ["anuj", "peggy"],
  alice: ["peggy"],
  claire: ["thom", "jonny"],
  anuj: [],
  peggy: [],
  thom: [],
  jonny: []
};

function personIsSeller(name) {
  return name.slice(-1) === 'm';
}

function search(name) {
  const queue = [];
  queue.push(...graph[name]);
  const searched = [];
  while (queue.length > 0) {
    const person = queue.shift();
    if (!searched.includes(person)) {
      if (personIsSeller(person)) {
        console.log('The person called ' + person + ' is a super cool mango seller!');
        return true;
      } else {
        queue.push(...graph[person]);
        searched.push(person);
      }
    } 
  }
  return false;
}

search('you');