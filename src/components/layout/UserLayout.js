import T from 'prop-types';

import Sidebar from './Sidebar';
import HeaderUser from './HeaderUser';
import Footer from './Footer';

function UserLayout({ children }) {
	return (
		<>		
		  <div className="d-flex" id="wrapper">
				<Sidebar />
					<div className="container-fluid">
						<div className="container main">
						<HeaderUser />
							<div className="container">
							{children}
							</div>
						</div>
					<Footer />
					</div>
					
				
		 </div>
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