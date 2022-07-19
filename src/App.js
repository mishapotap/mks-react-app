import React, { useEffect } from "react";
import { Mks, Science } from "./screens";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	const initUI = () => {
		if (window.innerWidth < 768) {
			document.body.style.zoom = 0.2;
		}

		if (window.innerWidth >= 768 && window.innerWidth < 1024) {
			document.body.style.zoom = 0.37;
		}

		if (window.innerWidth >= 1024 && window.innerWidth < 1250) {
			document.body.style.zoom = 0.47;
		}

		if (window.innerWidth >= 1250 && window.innerWidth < 1420) {
			document.body.style.zoom = 0.65;
		}

		if (window.innerWidth >= 1420 && window.innerWidth < 1620) {
			document.body.style.zoom = 0.75;
		}

		if (window.innerWidth >= 1620 && window.innerWidth < 1780) {
			document.body.style.zoom = 0.85;
		}

		if (window.innerWidth >= 1780 && window.innerWidth < 1950) {
			document.body.style.zoom = 0.9;
		}

		if (window.innerWidth >= 1950 && window.innerWidth < 2160) {
			document.body.style.zoom = 0.98;
		}

		if (window.innerWidth >= 2160) {
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
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Mks />} />
					<Route path="/science" element={<Science />} />
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	);
}

export default App;
