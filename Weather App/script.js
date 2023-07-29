const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'af7438ad21msh5f189f6f9a505e3p11f439jsn1de2bebb1776',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

var getWeather = (city) => {
    cityName.innerHTML = city
    cityname.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {


            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp1.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity1.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = new Date(response.sunrise * 1000);
            console.log(sunrise)
            sunset.innerHTML = new Date(response.sunset * 1000);
            dt = new Date(response.sunset * 1000);
            hr = "0" + dt.getHours();
            m = "0" + dt.getMinutes();
            s = "0" + dt.getSeconds();
            sunsetTime.innerHTML = hr.substr(-2) + ':' + m.substr(-2) + ':' + s.substr(-2);
            dt1 = new Date(response.sunrise * 1000);
            hr1 = dt1.getHours();
            m1 = "0" + dt1.getMinutes();
            s1 = "0" + dt1.getSeconds();
            sunriseTime.innerHTML = hr1 + ':' + m1.substr(-2) + ':' + s1.substr(-2);
            currentDate.innerHTML = new Date().toLocaleDateString();

        })
    // apik = "3045dd712ffe6e702e3245525ac7fa38"
    // fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apik)
    //     .then((response1) => {
    //         console.log(response1)
    //         var descrip = response1.weather['description']
    //         description.innerHTML = descrip
    //         let icons = response1.icon
    //         icon.innerHTML = `<img src='https://openweathermap.org/img/w/${icons}.png'>`
    //     })
        .catch(err => console.error(err));
}
submit.addEventListener('click', (e) => {
    e.preventDefault()
    getWeather(city.value)
})
getWeather('Delhi')

var getlucknow = (city1) =>{

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city1, options)
        .then(response => response.json())
        .then((response) => {
            Cloud_pct_LU.innerHTML = response.cloud_pct + '°C';
            Feels_like_LU.innerHTML = response.feels_like + '°C';
            Humidity_LU.innerHTML = response.humidity + '%';
            Max_temp_LU.innerHTML = response.max_temp + '°C';
            Min_temp_LU.innerHTML = response.min_temp + '°C';
            dt1 = new Date(response.sunrise * 1000);
            hr1 = dt1.getHours();
            m1 = "0" + dt1.getMinutes();
            s1 = "0" + dt1.getSeconds();
            Sunrise_LU.innerHTML = hr1 + ':' + m1.substr(-2) + ':' + s1.substr(-2);
            dt = new Date(response.sunset * 1000);
            hr = "0" + dt.getHours();
            m = "0" + dt.getMinutes();
            s = "0" + dt.getSeconds();
            Sunset_LU.innerHTML = hr.substr(-2) + ':' + m.substr(-2) + ':' + s.substr(-2);
            Temp_LU.innerHTML = response.temp + '°C';
            Wind_speed_LU.innerHTML = response.wind_speed + 'km/h';
            console.log(Cloud_pct_LU)
        })
        .catch(err1 => console.error(err1));
}
getlucknow('Lucknow')

var getDelhi = (city2) =>{

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city2, options)
        .then(response => response.json())
        .then((response) => {
            Cloud_pct_DL.innerHTML = response.cloud_pct + '°C';
            Feels_like_DL.innerHTML = response.feels_like + '°C';
            Humidity_DL.innerHTML = response.humidity + '%';
            Max_temp_DL.innerHTML = response.max_temp + '°C';
            Min_temp_DL.innerHTML = response.min_temp + '°C';
            dt1 = new Date(response.sunrise * 1000);
            hr1 = dt1.getHours();
            m1 = "0" + dt1.getMinutes();
            s1 = "0" + dt1.getSeconds();
            Sunrise_DL.innerHTML = hr1 + ':' + m1.substr(-2) + ':' + s1.substr(-2);
            dt = new Date(response.sunset * 1000);
            hr = "0" + dt.getHours();
            m = "0" + dt.getMinutes();
            s = "0" + dt.getSeconds();
            Sunset_DL.innerHTML = hr.substr(-2) + ':' + m.substr(-2) + ':' + s.substr(-2);
            Temp_DL.innerHTML = response.temp + '°C';
            Wind_speed_DL.innerHTML = response.wind_speed + 'km/h';
            console.log(Cloud_pct_DL)
        })
        .catch(err2 => console.error(err2));
}
getDelhi('Delhi')

var getBostan = (city3) =>{

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city3, options)
        .then(response => response.json())
        .then((response) => {
            Cloud_pct_BO.innerHTML = response.cloud_pct + '°C';
            Feels_like_BO.innerHTML = response.feels_like + '°C';
            Humidity_BO.innerHTML = response.humidity + '%';
            Max_temp_BO.innerHTML = response.max_temp + '°C';
            Min_temp_BO.innerHTML = response.min_temp + '°C';
            dt1 = new Date(response.sunrise * 1000);
            hr1 = dt1.getHours();
            m1 = "0" + dt1.getMinutes();
            s1 = "0" + dt1.getSeconds();
            Sunrise_BO.innerHTML = hr1 + ':' + m1.substr(-2) + ':' + s1.substr(-2);
            dt = new Date(response.sunset * 1000);
            hr = "0" + dt.getHours();
            m = "0" + dt.getMinutes();
            s = "0" + dt.getSeconds();
            Sunset_BO.innerHTML = hr.substr(-2) + ':' + m.substr(-2) + ':' + s.substr(-2);
            Temp_BO.innerHTML = response.temp + '°C';
            Wind_speed_BO.innerHTML = response.wind_speed + 'km/h';
            console.log(Cloud_pct_BO)
        })
        .catch(err3 => console.error(err3));
}
getBostan('Bostan')

var getKolkata = (city4) =>{

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city4, options)
        .then(response => response.json())
        .then((response) => {
            Cloud_pct_KO.innerHTML = response.cloud_pct + '°C';
            Feels_like_KO.innerHTML = response.feels_like + '°C';
            Humidity_KO.innerHTML = response.humidity + '%';
            Max_temp_KO.innerHTML = response.max_temp + '°C';
            Min_temp_KO.innerHTML = response.min_temp + '°C';
            dt1 = new Date(response.sunrise * 1000);
            hr1 = dt1.getHours();
            m1 = "0" + dt1.getMinutes();
            s1 = "0" + dt1.getSeconds();
            Sunrise_KO.innerHTML = hr1 + ':' + m1.substr(-2) + ':' + s1.substr(-2);
            dt = new Date(response.sunset * 1000);
            hr = "0" + dt.getHours();
            m = "0" + dt.getMinutes();
            s = "0" + dt.getSeconds();
            Sunset_KO.innerHTML = hr.substr(-2) + ':' + m.substr(-2) + ':' + s.substr(-2);
            Temp_KO.innerHTML = response.temp + '°C';
            Wind_speed_KO.innerHTML = response.wind_speed + 'km/h';
            console.log(Cloud_pct_KO)
        })
        .catch(err1 => console.error(err1));
}
getKolkata('Kolkata')

var getMumbai = (city5) =>{

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city5, options)
        .then(response => response.json())
        .then((response) => {
            Cloud_pct_MU.innerHTML = response.cloud_pct + '°C';
            Feels_like_MU.innerHTML = response.feels_like + '°C';
            Humidity_MU.innerHTML = response.humidity + '%';
            Max_temp_MU.innerHTML = response.max_temp + '°C';
            Min_temp_MU.innerHTML = response.min_temp + '°C';
            dt1 = new Date(response.sunrise * 1000);
            hr1 = dt1.getHours();
            m1 = "0" + dt1.getMinutes();
            s1 = "0" + dt1.getSeconds();
            Sunrise_MU.innerHTML = hr1 + ':' + m1.substr(-2) + ':' + s1.substr(-2);
            dt = new Date(response.sunset * 1000);
            hr = "0" + dt.getHours();
            m = "0" + dt.getMinutes();
            s = "0" + dt.getSeconds();
            Sunset_MU.innerHTML = hr.substr(-2) + ':' + m.substr(-2) + ':' + s.substr(-2);
            Temp_MU.innerHTML = response.temp + '°C';
            Wind_speed_MU.innerHTML = response.wind_speed + 'km/h';
            console.log(Cloud_pct_MU)
        })
        .catch(err5 => console.error(err5));
}
getMumbai('Mumbai')

var getBangalore = (city6) =>{

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city6, options)
        .then(response => response.json())
        .then((response) => {
            Cloud_pct_BA.innerHTML = response.cloud_pct + '°C';
            Feels_like_BA.innerHTML = response.feels_like + '°C';
            Humidity_BA.innerHTML = response.humidity + '%';
            Max_temp_BA.innerHTML = response.max_temp + '°C';
            Min_temp_BA.innerHTML = response.min_temp + '°C';
            dt1 = new Date(response.sunrise * 1000);
            hr1 = dt1.getHours();
            m1 = "0" + dt1.getMinutes();
            s1 = "0" + dt1.getSeconds();
            Sunrise_BA.innerHTML = hr1 + ':' + m1.substr(-2) + ':' + s1.substr(-2);
            dt = new Date(response.sunset * 1000);
            hr = "0" + dt.getHours();
            m = "0" + dt.getMinutes();
            s = "0" + dt.getSeconds();
            Sunset_BA.innerHTML = hr.substr(-2) + ':' + m.substr(-2) + ':' + s.substr(-2);
            Temp_BA.innerHTML = response.temp + '°C';
            Wind_speed_BA.innerHTML = response.wind_speed + 'km/h';
            console.log(Cloud_pct_BA)
        })
        .catch(err6 => console.error(err6));
}
getBangalore('Bangalore')