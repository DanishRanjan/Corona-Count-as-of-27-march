function updateMap() {
console.log("Updating map with rt data");

    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data);
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;
                if(cases>255){
                    color = "rgb(255, 0, 0)"
                }
                else{
                    color = `rgb(${cases})`
                }

                //mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                    
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);



            });

        })

}
updateMap();
// let interval = 2000;
// setInterval(updateMap, interval)





//pk.eyJ1IjoiZGFuaXNocmFuamFuOTAxIiwiYSI6ImNrYmVtdDhscDAwNTgzMW12b3g0c3hzMm8ifQ.ge4PVOUpiB3KjojyjX2now
