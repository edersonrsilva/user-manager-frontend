import axios from 'axios';
import { User } from '../types/user';

const API_URL = 'http://localhost:9090/api/users';

export const userService = {
  getAllUsers: async (): Promise<User[]> => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  getUserById: async (id: number): Promise<User> => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },

  createUser: async (user: User): Promise<User> => {
    const response = await axios.post(API_URL, user);
    return response.data;
  },

  updateUser: async (id: number, user: User): Promise<User> => {
    const response = await axios.put(`${API_URL}/${id}`, user);
    return response.data;
  },

  deleteUser: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
  }
}; 