import T from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import { Container} from 'react-bootstrap';
function Layout({ children }) {
	return (
		<>
			<Header />
			<Container>{children}</Container>
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