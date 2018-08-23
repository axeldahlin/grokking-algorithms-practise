let states_needed = new Set (['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);
const radio_stations = {};
radio_stations['kone'] = new Set (['id', 'nv', 'ut']);
radio_stations['ktwo'] = new Set (['wa', 'id', 'mt']);
radio_stations['kthree'] = new Set (['or', 'nv', 'ca']);
radio_stations['kfour'] = new Set (['nv', 'ut']);
radio_stations['kfive'] = new Set (['ca', 'az']);
const final_stations = new Set ();

while (states_needed.size) {
  let best_station = null;
  let states_covered = new Set();
  for (station in radio_stations) {
    let states = radio_stations[station];
    const covered = new Set(
      [...states_needed].filter(x => states.has(x)));
    if (covered.size > best_station) {
      best_station = station;
      states_covered = covered;
    }
  }
  final_stations.add(best_station);
  states_needed = new Set ([...states_needed].filter(x => !states_covered.has(x)));
}
// logs: { final_stations: Set { 'kone', 'ktwo', 'kthree', 'kfive' } }
console.log({final_stations});