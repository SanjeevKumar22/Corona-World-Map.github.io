
function updateMap() {
    console.log("Updating map with realtime data");
    fetch("/data.json")//fetch api
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                cases=element.infected;
                if (cases>255){
                    color="rgb(255,0,0)"
                }
                else{
                    color="blue"
                }
                //mark on map
                new mapboxgl.Marker({
                    draggable: false,
                    color:color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);
            });
        })
}
let interval=20000;//20s
setInterval(updateMap,interval);

