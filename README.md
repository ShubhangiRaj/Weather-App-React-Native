# Weather-App-React-Native

Type city name to fetch current weather report from OpenWeatherMap API.

### Implementation
```
// Fecth API to get data from the OpenWeatherMap API 
fetch('http://api.openweathermap.org/data/2.5/weather/?q='+ city + "&units=metric" + "YOUR_API_KEY")
    .then((response) => response.json())
    .then((responseJSON) => {
        this.setState({
            forecast: {
                main: "Weather: " + responseJSON.weather[0].main,
                description: "Outside: " + responseJSON.weather[0].description,
                temp: "Temprature: " + responseJSON.main.temp + " C",
                country: "Country: " + responseJSON.sys.country
            }
        });
    })
    .catch((error) => {
        console.warn(error);
    });
```

### Screenshots
![Screenshot 1](./WeatherApp/img/screenshot_1.jpeg?raw=true "Title")
![Screenshot 2](./WeatherApp/img/screenshot_2.jpeg?raw=true "Title")
