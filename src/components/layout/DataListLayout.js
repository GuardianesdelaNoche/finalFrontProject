import T from 'prop-types';

import Sidebar from './Sidebar';
import HeaderUser from './HeaderUser';
import Footer from './Footer';

function DataListLayout({ children }) {
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

DataListLayout.propTypes = {
	children: T.node,
};

DataListLayout.defaultProps = {
	children: null,
};

export default DataListLayout;