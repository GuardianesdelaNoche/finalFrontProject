import T from 'prop-types';

import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

function UserLayout({ children }) {
	return (
		<>
			<Header/>
			<div className="container main">
				<div className="content">
					{children}
					<Sidebar />
				</div>
			</div>
			<Footer/>	
		</>
	);
}

UserLayout.propTypes = {
	children: T.node,
};

UserLayout.defaultProps = {
	children: null,
};

export default UserLayout;