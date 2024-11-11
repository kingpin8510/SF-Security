// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const submitAppointment = async (appointmentData: any) => {
  const response = await api.post('/appointments', appointmentData);
  return response.data;
};

export const fetchAppointments = async () => {
  const response = await api.get('/admin/appointments');
  return response.data;
};

export const updateAppointmentStatus = async (id: string, status: string) => {
  const response = await api.patch(`/admin/appointments/${id}`, { status });
  return response.data;
};