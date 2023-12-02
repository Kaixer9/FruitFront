import api from "./Base";

async function getFruits() {
  const { data } = await api.get("/frutas");
  return data;
}

async function getFruitsId(frutasId) {
  const { data } = await api.get(`/frutas/${frutasId}`);
  return data;
}

async function getRecipesId(recetasId) {
  const { data } = await api.get(`/recetas/${recetasId}`);
  return data;
}

async function getUserId(usersId) {
  const { data } = await api.get(`/users/${usersId}`);
  return data;
}

/*async function addRecipe(recetaData) {
  try {
    const { data } = await api.post("/recetas", recetaData)
      localStorage.getItem('token', response.data.token);
    
    return data, localStorage.getItem('token')
  } catch (error) {
    console.error("Error al añadir la receta:", error.message);
    throw error;
  }
}*/


export { getFruits, getFruitsId, getRecipesId, getUserId, addRecipe };
