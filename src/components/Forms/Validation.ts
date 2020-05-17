/* eslint-disable no-useless-escape */
import { ValidationOptions } from 'react-hook-form';

export const DefaultValidation: {[key: string]: ValidationOptions} = {
	email: {
		required: { value: true, message: 'Email is required' },
		pattern: {
			value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			message: 'Invalid Email Format',
		},
	},
	password: {
		required: { value: true, message: 'Password is required' },
		minLength: { value: 8, message: 'Password must be longer than 7 characters' },
	},
};
