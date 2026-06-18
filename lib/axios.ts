import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://untrustingly-vicennial-herlinda.ngrok-free.dev/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
