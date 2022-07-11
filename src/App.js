import React from "react";
import { Mks, Science } from "./screens";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<Routes>
					<Route path="/mks" element={<Mks />}>
						{/* <Route index element={<Home />} />
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
					</Route>
          <Route path="/science" element={<Science />} />
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	);
}

export default App;
