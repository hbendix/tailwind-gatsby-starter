import Axios, { AxiosInstance } from 'axios';
import { defaultHeaders } from './Headers';

export const axios: AxiosInstance = Axios.create({
	timeout: 10000,
	headers: {
		...defaultHeaders,
	},
});
