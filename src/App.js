import React, { useEffect } from "react";
import { Mks } from "./screens";

function App() {
	const initUI = () => {
		if (window.innerWidth < 700) {
			document.body.style.zoom = 0.3;
		}

		if (window.innerWidth >= 700 && window.innerWidth < 800) {
			document.body.style.zoom = 0.4;
		}

		if (window.innerWidth >= 800 && window.innerWidth < 940) {
			document.body.style.zoom = 0.45;
		}

		if (window.innerWidth >= 940 && window.innerWidth < 1120) {
			document.body.style.zoom = 0.5;
		}

		if (window.innerWidth >= 1120 && window.innerWidth < 1250) {
			document.body.style.zoom = 0.6;
		}

		if (window.innerWidth >= 1250 && window.innerWidth < 1420) {
			document.body.style.zoom = 0.7;
		}

		if (window.innerWidth >= 1420 && window.innerWidth < 1620) {
			document.body.style.zoom = 0.79;
		}

		if (window.innerWidth >= 1620 && window.innerWidth < 1780) {
			document.body.style.zoom = 0.88;
		}

		if (window.innerWidth >= 1780 && window.innerWidth < 1950) {
			document.body.style.zoom = 0.95;
		}

		// if (window.innerWidth >= 1950 && window.innerWidth < 2160) {
		// 	document.body.style.zoom = 1;
		// }

		if (window.innerWidth >= 1950) {
			document.body.style.zoom = 1;
		}

		document.body.style.opacity = 1;
	};

	useEffect(() => {
		if (document.readyState !== "loading") {
			setTimeout(initUI, 0);
		} else {
			document.addEventListener("DOMContentLoaded", () => {
				setTimeout(initUI, 0);
			});
		}

		window.addEventListener("resize", initUI);
	}, []);

	return (
		<React.StrictMode>
			<Mks/>
		</React.StrictMode>
	);
}

export default App;
