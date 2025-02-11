import { api } from "./config/api.config";

export async function getBreeds() {
  try {
    const { data } = await api.get(
      `${import.meta.env.VITE_BASE_URL}/v1/breeds?`,
    );
    return data;
  } catch (error) {
    console.log(error)
  }
}
