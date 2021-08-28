const weather = () => {
    const sreachId = document.getElementById('sreachId');
    const sreachIdValue = sreachId.value;
    let url;
    if (sreachIdValue == '') {
        url = `https://api.openweathermap.org/data/2.5/weather?q=dhaka&units=metric&appid=556e19cb3b901b5ee9a99228513f985f`;
    } else {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${sreachIdValue}&units=metric&appid=556e19cb3b901b5ee9a99228513f985f`;
    }
    sreachId.value = '';
    fetch(url)
        .then(resp => resp.json())
        .then(data => defaultWeather(data))
};
weather();


const defaultWeather = (data) => {
    const allDataShow = document.getElementById("allDataShow");
    allDataShow.textContent = '';
    const div = document.createElement("div");
    div.innerHTML = `
       <div class="card-header">
                <h1>Current Weather</h1>
            </div>
            <div class="card-body">
                <h2 class="card-title">${data.name}</h2>
                <h5 class="card-text">${data.main.temp} °C</h5>
                <p class="card-text"></p>
                <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" style="width:100px; color:red filter: sepia(100%);
                -webkit-filter: sepia(100%);" />
            </div>
            <div class="card-footer text-muted">
            <h3 class="text-white">${data.weather[0].description}</h3>
            </div>
    `;
    allDataShow.appendChild(div);
}
