const COORDS = 'coords';
function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));

}
function handleGeoSucces(position){
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {latitude : latitude,longitude:longitude};
    saveCoords(coordsObj);


}
function handleGeoError(){
    console.log("Fail to load geo location");
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}
function loadCords(){
    const loadedCord = localStorage.getItem(COORDS);
    if(loadedCord === null)
    {
        askForCoords();
    }
    else
    {
        getWeather();
    }
}
function init(){
    loadCords();

}
init();