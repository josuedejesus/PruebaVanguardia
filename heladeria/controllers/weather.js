async function getWeather(request, response) {
    try {
        const result = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.OPEN_WEATHER_API_KEY}`);

        response.send({
            data: result
        })
    } catch (error) {
        response.status(400).send({
            details: "Error al obtener el clima."
        })
    }
}

module.exports = {
    getWeather
}