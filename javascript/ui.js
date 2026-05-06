function displayWeather(name, country, temp, condition, high, low, comment) {
let locationEl = document.querySelector(".location")
let degreeEl = document.querySelector(".degree")
let conditionEl = document.querySelector(".condition")
let highEl = document.querySelector(".high")
let lowEl = document.querySelector(".low")
let commentEl = document.querySelector(".comment")
let imgEl = document.querySelector(".img")

locationEl.innerHTML = `${name}, ${country}`
degreeEl.innerHTML = `${Math.round(temp)}°`
conditionEl.innerHTML = condition
highEl.innerHTML = `H: ${Math.round(high)}°`
lowEl.innerHTML = `L: ${Math.round(low)}°`
commentEl.innerHTML = comment
}