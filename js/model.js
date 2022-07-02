'use strict';

class Model{
    init(){
        console.log("Model initialized");
    }

    getApiKey(){
        return config.API_TOKEN;
    }

    getLocation(){
        return document.getElementById("cityname").value;
    }

    convertFromKelvin(temp){
        return (temp-273).toFixed(2);
    }

    async getApiData(){
        const apiKey = m.getApiKey();
        const inputVal = m.getLocation();
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}`;

        let promise = new Promise(function(resolve, reject){
            fetch(url).then(res => res.json()).then(data => {
                console.log(data);
                let name = data['name'];
                let country = data['sys']['country'];
                let weather = data['weather']['0']['description'];
                let temp = data['main']['temp'];
                let windSpeed = data['wind']['speed'];
                console.log(name);
                console.log(country);
                console.log(weather);
                console.log(m.convertFromKelvin(temp));
                console.log(windSpeed);
    
                let card = `<div class="card">
                <!--<img src="..." class="card-img-top" alt="..."></img>-->
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">Country: ${country}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Weather: ${weather} 
                    <li class="list-group-item">Temperature: ${temp} Celsius 
                    <li class="list-group-item">Wind Speed: ${windSpeed}
                </ul>
            </div>`
                console.log(card);
                resolve(card);
            })
        });
        return promise;
    }
}