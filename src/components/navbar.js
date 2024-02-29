import { useRef, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";

function Navbar() {
	const navRef = useRef();
	const [isSticky, setIsSticky] = useState(false);

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			if (offset > 50) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header className={isSticky ? "sticky" : ""}>
			<h3>Rex Arga P3</h3>
			<nav ref={navRef}>
				<a href="/Home">Home</a>
				<a href="/Education">Education</a>
				<a href="/Contact">Contact</a>
				<a href="/About">About</a>
				<button className="nav-btn nav-close-btn" onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
