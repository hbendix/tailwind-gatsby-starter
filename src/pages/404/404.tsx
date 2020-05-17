import * as React from 'react';
import Footer from '../Footer/Footer';
import SEO from '../SEO/SEO';

const NotFound: React.FC = (): JSX.Element => (
	<>
		<SEO pathname="#" article={true} />
		<h1>Repetitio Gone Home</h1>
		<Footer />
	</>
);

export default NotFound;