import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getInicioCards = async () => {
  const response = await axios.get(`${API_URL}/inicio-cards-informacionais`);
  return response.data;
};

export const createInicioCard = async (data) => {
  const response = await axios.post(`${API_URL}/inicio-cards-informacionais`, data);
  return response.data;
};

export const updateInicioCard = async (id, data) => {
  const response = await axios.put(`${API_URL}/inicio-cards-informacionais/${id}`, data);
  return response.data;
};

export const deleteInicioCard = async (id) => {
  const response = await axios.delete(`${API_URL}/inicio-cards-informacionais/${id}`);
  return response.data;
};