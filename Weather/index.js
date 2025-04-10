// https://api.openweathermap.org/data/2.5/weather?q=surat&appid=b4c426c91009e3429c4af53c61fd6e9c&units=metric

const shoat = (data) => {
    // let temp = `<input type="text" placeholder="Your City:" id="search">
    //     <h1 class="city">${data.name}</h1>
    //     <div class="weather-icon">🌤️</div>
    //     <h2 class="temperature">${data.main.temp}°C</h2>
    //     <p class="description">Partly Cloudy</p>
    // `
    document.querySelector(".city").innerHTML = `${data.name}`;
    document.querySelector(".speed").innerHTML =`💨${data.wind.speed}KM/h`
    document.querySelector(".description").innerHTML = `${data.weather[0].description}`
    document.getElementById("container").innerHTML = `${Math.round(data.main.temp)}°C`;
};
const getWeather = async (citrange) => {
    let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citrange}&appid=b4c426c91009e3429c4af53c61fd6e9c&units=metric`);
    let res = await req.json();
    console.log(res);

    shoat(res)
};
document.getElementById("search").addEventListener("keypress", (e) => {
    // e.target.value;
    // console.log(e);
    if (e.key == "Enter") {
        const citrange = e.target.value;
        console.log(citrange);
        getWeather(citrange);

    }
});
