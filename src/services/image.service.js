import axios from "axios"

export const obtenerImagenes = async function () {
    try {
        const response = await axios.get('http://localhost:3000/api/images')
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}