import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://10.16.50.147:3001',
});
