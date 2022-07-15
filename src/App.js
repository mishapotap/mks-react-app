import React from "react";
import { Mks, Science } from "./screens";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
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
