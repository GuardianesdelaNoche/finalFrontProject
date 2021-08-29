import { MdFavorite } from 'react-icons/md';
import  './Footer.css';
function Footer() {
	return <footer>
		<div className="container footer">
			<span className="text-muted">Made with 
			 {" "}<MdFavorite />{" "} 
			by GuardianesdelaNoche</span>
		</div>
	</footer>;
}

export default Footer;

