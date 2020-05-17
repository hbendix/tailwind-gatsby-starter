import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';
import { Link } from 'gatsby';
import * as API from '../../API';
import { DefaultValidation } from './Validation';

type Props = {
	token: string
}
export const ResetPassword: React.FC<Props> = ({ token }): JSX.Element => {
	const [submitted, setSubmitted] = React.useState<boolean>(false);
	const [loading, setLoading] = React.useState<boolean>(false);
	const { addToast } = useToasts();
	const {
		register, handleSubmit, errors, watch,
	} = useForm<API.ResetPasswordDTO>();
	const onSubmit = async (data: API.ResetPasswordDTO) => {
		setLoading(true);
		try {
			await API.resetPassword(data, token);
			addToast('Your password has been reset.', {
				appearance: 'success',
				autoDismiss: true,
			});
			setSubmitted(true);
		} catch (e) {
			addToast(e.message ?? 'An error has occurred, please try again!', {
				appearance: 'error',
				autoDismiss: true,
			});
		}
		setLoading(false);
	};
	return (
		<>
			<form className="flex flex-col w-full mt-4" onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="password">
					New password
					<input
						name="password"
						className="my-2 bg-transparent focus:outline-none focus:shadow-outline border border-white-300 py-2 px-4 block w-full appearance-none leading-normal"
						type="password"
						id="password"
						required
						ref={register(DefaultValidation.password)}
					/>
				</label>
				{errors.password ? (
					<p className="text-red-500 mb-4 text-sm">
						{errors.password.message}
						.
					</p>
				) : <></>}
				<label htmlFor="password">
					Confirm password
					<input
						name="confirmPassword"
						className="my-2 bg-transparent focus:outline-none focus:shadow-outline border border-white-300 py-2 px-4 block w-full appearance-none leading-normal"
						type="password"
						id="confirmPassword"
						required
						ref={register({ validate: value => value === watch('password') || 'Passwords do not match' })}
					/>
				</label>
				{errors.confirmPassword ? (
					<p className="text-red-500 mb-4 text-sm">
						{errors.confirmPassword.message}
						.
					</p>
				) : <></>}
				{!submitted
					? (
						<button
							type="submit"
							className="ease-in hover:bg-red-800 border-white-300 font-semibold hover:text-white py-2 px-4 my-2 border-2"
						>
							{loading ? 'Loading...' : 'Submit'}
						</button>
					) : <></>}
			</form>
			{submitted
				? (
					<div className="flex flex-col w-full">
						<Link to="/">
							<button
								type="submit"
								className="ease-in hover:bg-red-800 border-white-300 font-semibold hover:text-white py-2 px-4 my-2 border-2 w-full"
							>
								Go home
							</button>
						</Link>
					</div>
				) : <></>}
		</>
	);
};
