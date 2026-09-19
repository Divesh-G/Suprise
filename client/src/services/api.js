import axios from 'axios';

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || '/api' });

const token = () => localStorage.getItem('adminToken');

export const getSurprise = (t) => api.get(`/surprises/${t}`);

export const createSurprise = (data) =>
  api.post('/surprises', data, { headers: { Authorization: `Bearer ${token()}` } });

export const updateSurprise = (t, data) =>
  api.put(`/surprises/${t}`, data, { headers: { Authorization: `Bearer ${token()}` } });

export const deleteSurprise = (t) =>
  api.delete(`/surprises/${t}`, { headers: { Authorization: `Bearer ${token()}` } });

export const listSurprises = () =>
  api.get('/surprises', { headers: { Authorization: `Bearer ${token()}` } });

export const adminLogin = (password) =>
  api.post('/surprises/admin/login', { password });
