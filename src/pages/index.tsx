import * as React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import Home from './Home/Home';
import '../Styles/index.scss';

const Index: React.FC = (): JSX.Element => (
	<ToastProvider
		placement="bottom-center"
	>
		<Home />
	</ToastProvider>
);

export default Index;
