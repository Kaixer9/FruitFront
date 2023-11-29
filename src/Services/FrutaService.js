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
    const {data} = await api.get(`/recetas/${recetasId}`);
    return data;
}

async function getUserId(usersId) {
  const {data} = await api.get(`/users/${usersId}`)
  return data
}

export { getFruits, getFruitsId, getRecipesId, getUserId };
