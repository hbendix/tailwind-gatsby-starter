/* eslint-disable no-console */
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';
import { DefaultValidation } from './Validation';

type EmailForm = {
	email: string
}
export const Subscribe: React.FC = () => {
	const { addToast } = useToasts();
	const { register, handleSubmit, errors } = useForm<EmailForm>();
	// eslint-disable-next-line no-console
	const onSubmit = (data: EmailForm) => {
		console.log(data);
		addToast('You\'ve been added to our emailing list', {
			appearance: 'success',
			autoDismiss: false,
		});
	};

	console.log(errors);
	return (
		<>
			<form className="flex" onSubmit={handleSubmit(onSubmit)}>
				<input
					name="email"
					className="my-2 bg-transparent focus:outline-none focus:shadow-outline border border-white-300 py-2 px-4 block w-full appearance-none leading-normal"
					type="email"
					placeholder="jane@example.com"
					id="email"
					ref={register(DefaultValidation.email)}
				/>
				<button
					type="submit"
					className="ease-in hover:bg-red-800 border-white-300 font-semibold hover:text-white py-2 px-4 my-2 border-2"
				>
					Subscribe
				</button>
			</form>
			{
				errors.email
					? (
						<div className="flex">
							<p>Hello</p>
						</div>
					) : <></>
			}
		</>
	);
};
