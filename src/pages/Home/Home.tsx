/* eslint-disable max-len */
import * as React from 'react';
import { useToasts } from 'react-toast-notifications';
import SEO from '../SEO/SEO';
import './Home.scss';

const Home: React.FC = (): JSX.Element => {
	const [email, setEmail] = React.useState<string | undefined>(undefined);
	const { addToast } = useToasts();
	const submitForm = () => {
		// eslint-disable-next-line no-console
		console.log(email);
		addToast('You\'ve been added to our emailing list', {
			appearance: 'success',
			autoDismiss: true,
		});
	};
	return (
		<>
			<SEO pathname="#" article />
			<div className="flex h-screen w-screen p-8">
				<div className="flex w-2/3 main-bg-colour p-8">
					<div className="flex flex-col items-start justify-center">
						<h1 className="font-black text-6xl">High octane language learning</h1>
						<div className="p-2 mt-2">
							<p className="text-2xl">Get notified when we launch</p>
						</div>
						<div className="flex w-2/3">
							<form className="flex">
								<input
									className="my-2 bg-transparent focus:outline-none focus:shadow-outline border border-white-300 py-2 px-4 block w-full appearance-none leading-normal"
									type="email"
									placeholder="jane@example.com"
									required
									id="email"
									onChange={value => setEmail(value.target.value)}
								/>
								<button
									type="button"
									className="ease-in hover:bg-red-800 border-white-300 font-semibold hover:text-white py-2 px-4 my-2 border-2"
									onClick={submitForm}
								>
									Subscribe
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className="w-1/3 main-bg-colour h-full" />
			</div>
		</>
	);
};
export default Home;
