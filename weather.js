const weather  = document.querySelector(".js-weather");
const COORDS = 'coords';
const API_KEY = "394cf911260a373160b0a057f18efad9";
function getWeather(lat,long){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}@${place}`;
    })


}


function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));

}
function handleGeoSucces(position){
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {latitude : latitude,longitude:longitude};
    saveCoords(coordsObj);
    getWeather(latitude,longitude);


}
function handleGeoError(){
    console.log("Fail to load geo location");
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}
function loadCords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null)
    {
        askForCoords();
    }
    else
    {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);

    }
}
function init(){
    loadCords();

}
init();