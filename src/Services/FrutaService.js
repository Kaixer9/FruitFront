import api from "./Base";

async function getFruits() {
  const { data } = await api.get("/frutas");
  console.log(data);
  return data;
}

async function getFruitsId(frutasId) {
  const { data } = await api.get(`/frutas/${frutasId}`);
  console.log(data);
  return data;
}

async function getRecipesId(recetasId) {
    const {data} = await api.get(`/recetas/${recetasId}`);
    return data;
}

export { getFruits, getFruitsId, getRecipesId };
