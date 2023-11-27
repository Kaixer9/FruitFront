import axios from "axios"

const api = axios.create({
  baseURL: 'https://verfrutas.onrender.com/fruitveg'
})

export default api