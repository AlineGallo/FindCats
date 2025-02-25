import { api } from "./config/api.config";

export async function getBreeds() {
  try {
    const { data } = await api.get(
      `${import.meta.env.VITE_BASE_URL}/v1/breeds`,
    );
    return data;
  } catch (error) {
    console.log(error)
  }
}

export async function getCat(id: string) {
  try {
    const { data } = await api.get(
      `${import.meta.env.VITE_BASE_URL}/v1/breeds/` + id,
    );
    return data;
  } catch (error) {
    console.log(error)
  }
}

export async function getImages(breed_id: string) {
  try {
    const { data } = await api.get(
      `${import.meta.env.VITE_BASE_URL}/v1/images/search`,
      {
        params: {
          limit: 10,
          breed_ids: breed_id
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error)
  }
}

