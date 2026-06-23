import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://untrustingly-vicennial-herlinda.ngrok-free.dev/api/v1',
  headers: {
     'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzg0MzcxMTc3LCJpYXQiOjE3ODE3NzkxNzcsImp0aSI6IjIxNmUwNWU4MmNkMjQyMWI5ZDM0MGFlODE3Nzc2MjFkIiwidXNlcl9pZCI6ImIzZGE4N2YyLTZjNjEtNGM4MC1iNjhkLWE2ZWFkY2M1MTA1ZiJ9.eJMwTizSdJSBHKmhBhSyWBVtrnNC_w4utygcxB8qxZc'
  },
});

export default api;
