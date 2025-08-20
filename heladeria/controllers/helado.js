const getHelado = (request, response) => {
    try {
        response.send({
            details: "Hola"
        })
    } catch (error) {
        response.status(400).send({
            details: error
        })
    }

}

module.export = {
    getHelado
}