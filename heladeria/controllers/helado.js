const { request, response } = require("../app")
const Helado = require("../models/helados")

const getHelados = async (request, response) => {
    try {
        const helados = await Helado.find();
        console.log(helados);
        response.send({
            success: true,
            data: helados
        });
    } catch (error) {
        console.log(error);
        response.status(400).send({
            success: false,
            details: "Error al obtener helados."
        })
    }

}

const createHelado = async (request, response) => {
    try {

        const {sabor, precio} = request.body;

        const newHelado = {
            sabor: sabor,
            precio: precio
        };

        const result = await Helado.create(newHelado);

        response.send({
            success: true,
            details: 'Helado creado existosamente',
        });
    } catch (error) {
        response.status(400).send({
            success: false,
            details: "Error al crear el helado."
        });
    }
}

const updateHelado = async (request, response) => {
    try {
        const { sabor, precio } = request.body;

        const result = await Helado.updateOne( {sabor: sabor}, { $set: { precio: precio } } );

        response.send({
            success: true,
            details: 'Helado actualizado exitosamente.'
        });
    } catch (error) {
        response.status(400).send({
            success: false,
            details: "Error al actualizar el helado."
        });
    }
}

const deleteHelado = (request, response) => {
    try {

    } catch (error) {

    }
}


module.exports = {
    getHelados,
    createHelado,
    updateHelado,
    deleteHelado
}