const weatherForm = document.getElementById("weather-form")
weatherForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    const report = document.getElementById("report")
    const value = document.getElementById("city-input").value
    const loader = document
    const location = await getGeoCode(value)
    const weather = await getWeather(location.lat, location.lon)
    displayWeather(location.name, location.country, weather.temp, weather.condition, weather.high, weather.low, weather.comment)
})

async function getGeoCode(value) {
    try {
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${value}&appid=28d7afe53e8b52a92909608cf67ef563`)
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    let name = data[0].name
    let country = data[0].country
    let lat = data[0].lat
    let lon = data[0].lon

    return {name, country, lat, lon}
    } catch (error) {
    return { error: "Location not found. Please try again." }
    }
}

async function getWeather(lat, lon) {
    try {
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=28d7afe53e8b52a92909608cf67ef563`)
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    let temp = data.main.temp
    let condition = data.weather[0].description
    let high = data.main.temp_max
    let low = data.main.temp_min
    let comment = Math.random() < 0.5 ? "You should go outside today." : "Maybe you should stay home today."

    return { temp, condition, high, low, comment }
    } catch(error) {
    return { error: "Could not fetch weather data. Please try again." }
    }
}