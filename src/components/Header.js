import "../assets/css/Header.css";
import logo from "../assets/img/anchor.svg";

console.log(logo); // /static/media/anchor.3ed194e6cf56c5ccb8551ab04dcc29cd.svg
function Header({ title }) {
	return (
		<div className="header">
			<img src={logo} className="logo" alt="logo" />
			<h1>{title}</h1>
		</div>
	);
}

export default Header;
