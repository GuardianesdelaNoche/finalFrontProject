import T from 'prop-types';

import Sidebar from './Sidebar';
import HeaderUser from './HeaderUser';
import Footer from './Footer';

function UserLayout({ children }) {
	return (
		<>		
		  <div class="d-flex" id="wrapper">
				<Sidebar />
					<div class="container-fluid">
						<div className="container main">
						<HeaderUser />
							<div class="container">
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