import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
	return (
		<header>
			<div className="title">
				<Link to="/" className="name">
					Héloïse Baland
				</Link>
				<div className="subtitle">Mannequin international</div>
			</div>
			<nav className="navbar">
				<ul>
					<CustomLink to="/">Accueil</CustomLink>
					<CustomLink to="/gallery">Galeries</CustomLink>
					<CustomLink to="/cv">Curriculum</CustomLink>
					<CustomLink to="/contact">Contact</CustomLink>
				</ul>
			</nav>
		</header>
	);
}

function CustomLink({ to, children, ...props }) {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: to === "/" });

	return (
		<li className={isActive ? "active" : ""}>
			<Link to={to} {...props}>
				{children}
			</Link>
		</li>
	);
}
