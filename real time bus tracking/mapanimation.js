// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
    [-71.093729, 42.359244],
    [-71.094915, 42.360175],
    [-71.0958, 42.360698],
    [-71.099558, 42.362953],
    [-71.103476, 42.365248],
    [-71.106067, 42.366806],
    [-71.108717, 42.368355],
    [-71.110799, 42.369192],
    [-71.113095, 42.370218],
    [-71.115476, 42.372085],
    [-71.117585, 42.373016],
    [-71.118625, 42.374863],
  ];
  
  
  mapboxgl.accessToken = 'pk.eyJ1Ijoid2FsdGVydmFubm95IiwiYSI6ImNrb24zeTRsbjBpemYyb2w2d21peDQ1MnEifQ.ZdPxQ6qNa6iaOmRgOqPs6g';
  
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom: 14,
  });
  
  
  let marker = new mapboxgl.Marker()
  .setLngLat(busStops[0])
  .addTo(map)
  let counter = 0;
  function move() {
    marker.setLngLat(busStops[counter])
    counter++;
    if(counter >= busStops.length){
      counter = 0;
    }
    setTimeout(move,1000);
  }
  