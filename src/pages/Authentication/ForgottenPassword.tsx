import * as React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import SEO from '../SEO/SEO';
import { ResetPassword } from '../../components/Forms/ResetPassword';

const ForgottenPassword: React.FC = () => {
	const token: string = window.location.href.split('ForgottenPassword/')[1];
	return (
		<ToastProvider
			placement="bottom-center"
		>
			<SEO pathname="#" article />
			<div className="flex h-screen w-screen p-8">
				<div className="flex p-8 m-auto">
					<div className="flex flex-col items-start">
						<h1 className="font-black text-4xl">Reset your password</h1>
						<ResetPassword token={token} />
					</div>
				</div>
			</div>
		</ToastProvider>
	);
};

export default ForgottenPassword;
