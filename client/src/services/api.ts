import axios from "axios";

const BASE_URL = "https://blogger-ecru.vercel.app";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllPost = async () => {
  try {
    const response = await api.get("/posts");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPostDetail = async (id: any) => {
  try {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserPost = async (user: any) => {
  try {
    const response = await api.get(`/posts/${user}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
