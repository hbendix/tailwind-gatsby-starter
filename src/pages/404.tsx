import * as React from 'react';
import { Footer } from './Footer';
import { SEO } from './SEO';

export const NotFound: React.FC = (): JSX.Element => (
	<>
		<SEO pathname="#" article />
		<h1>Repetitio Gone Home</h1>
		<Footer />
	</>
);
