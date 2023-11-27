import api from "./Base";

async function getFruits() { 
const {data} = await api.get('/frutas')
return data
}

export {
 getFruits
}