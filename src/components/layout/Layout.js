import T from 'prop-types';

import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
	console.log("pasa2");
	return (
		<>
			<Header />
			<div className="container main">
				<div className="content pt-12">
					{children}
				</div>
			</div>
			<Footer />
		</>
	);
}

Layout.propTypes = {
	children: T.node,
};

Layout.defaultProps = {
	children: null,
};

export default Layout;