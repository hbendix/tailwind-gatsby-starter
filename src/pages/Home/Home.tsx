import * as React from 'react';
import SEO from '../SEO/SEO';
import { Subscribe } from '../../components';
import './Home.scss';

const Home: React.FC = (): JSX.Element => (
	<>
		<SEO pathname="#" article />
		<div className="flex h-screen w-screen p-8 home">
			<div className="flex w-2/3 main-bg-colour p-8">
				<div className="flex flex-col items-start justify-center">
					<h1 className="font-black text-6xl">High octane language learning</h1>
					<div className="p-2 mt-2">
						<p className="text-2xl">Get notified when we launch</p>
					</div>
					<div className="flex w-2/3">
						<Subscribe />
					</div>
				</div>
			</div>
			<div className="w-1/3 main-bg-colour h-full" />
		</div>
	</>
);

export default Home;
