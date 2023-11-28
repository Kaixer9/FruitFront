import api from "./Base";

async function getFruits() { 
    console.log('Hola')
const {data} = await api.get('/frutas')
console.log(data)
return data
}

export {
 getFruits
}