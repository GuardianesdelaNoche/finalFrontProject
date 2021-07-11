import T from 'prop-types';

import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
	return (
		<>
			<Header />
			<div className="container main">
				<div className="content">
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