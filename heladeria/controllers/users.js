const getHola = (request, response) => {
    try {
        response.send({
            details: 'getting hola'
        })
    } catch(error) {
        response.status.send({
            details: error
        })
    }
}

const postHola = (request, response) => {
    try {
        response.send({
            details: 'posting hola'
        })
    } catch(error) {
        response.status.send({
            details: error
        })
    }
}

const putHola = (request, response) => {
    try {
        response.send({
            details: 'updating hola'
        })
    } catch(error) {
        response.status.send({
            details: error
        })
    }
}

const deleteHola = (request, response) => {
    try {
        response.send({
            details: 'deleting hole'
        })
    } catch(error) {
        response.status.send({
            details: error
        })
    }
}

module.exports = {
    getHola,
    postHola,
    putHola,
    deleteHola
}