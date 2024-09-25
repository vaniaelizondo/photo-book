import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
	return (
		<div className="navbar">
			<div className="title">
				<Link to="/" className="name">
					Héloïse Baland
				</Link>
				<div className="subtitle">Mannequin à Nice</div>
			</div>
			<nav className="nav">
				<ul>
					<CustomLink to="/">Accueil</CustomLink>
					<CustomLink to="/galeries">Galeries</CustomLink>
					<CustomLink to="/cv">Curriculum</CustomLink>
					<CustomLink to="/contact">Contact</CustomLink>
				</ul>
			</nav>
		</div>
	);
}

function CustomLink({ to, children, ...props }) {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });

	return (
		<li className={isActive ? "active" : ""}>
			<Link to={to} {...props}>
				{children}
			</Link>
		</li>
	);
}
