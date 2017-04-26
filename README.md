# Weather-App-React-Native

## Description
### Type city name to fetch current weather report from OpenWeatherMap API.

## Implementation
`
// Fecth API to get data from the OpenWeaherMap API 
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
`
