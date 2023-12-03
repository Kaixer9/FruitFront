import api from "./Base";

async function getFruits() {
  const { data } = await api.get("/frutas");
  return data;
}

async function getUsers() {
  const { data } = await api.get("/user");
  return data;
}

async function getProfile() {
  const { data } = await api.get("/user/profile",{headers: {authorization: localStorage.token}});
  
  return data.user;
}



async function getFruitsId(frutasId) {
  const { data } = await api.get(`/frutas/${frutasId}`);
  return data;
}

async function getRecipes() {
  const { data } = await api.get(`/recetas`);
  return data;
}



async function getUserId() {
  const { data } = await api.get(`/user/${localStorage.userId}`);
  console.log(data)
  return data;

}

async function getRecipesByFruitId(frutasId) { //este!!
  const { data } = await api.get(`/recetas/frutas/${frutasId}`);
  
  console.log(data)
  return data;
}


async function addReceta(recetaData, frutaId ) { //add
  
  try {
    const dataToSend = {
      ...recetaData,
      fruitId: frutaId,
      userId: localStorage.userId,
    };
    console.log(dataToSend)
    const { data } = await api.post(`/recetas`, dataToSend);
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error al añadir la receta:", error.message);
    throw error;
  }
}


export const getRecipesByUserId = async (userId) => {
  const { data } = await api.get(`/user/${userId}/recipes`);
  return data;
};


async function addRecipe(recetaData) {
  try {
    const { data } = await api.post("/recetas", recetaData)
      localStorage.getItem('token', response.data.token);
    
    return data
  } catch (error) {
    console.error("Error al añadir la receta:", error.message);
    throw error;
  }
}




export { getFruits, getFruitsId, addRecipe, getRecipes, getUserId, getProfile, getUsers, addReceta, getRecipesByFruitId };
