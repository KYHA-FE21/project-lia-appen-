import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
// Routes
import Profile from "./features/profile/routes";
import Matchmake from "./features/matchmake/routes";
import Applications from "./features/applications/routes";
import Splash from "./features/splash/routes";
import Signin from "./features/auth/routes/signin";
import Signup from "./features/auth/routes/signup";
import Reset from "./features/auth/routes/reset";
import CreateQuestionnaire from "./features/questionnaire/routes/create";
import OverviewQuestionnaire from "./features/questionnaire/routes/overview";

const routes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					{/* <Route index element={<Splash />}></Route> */}
					{/* <Route path="/login" element={<Login />}></Route> */}
					<Route path="/profile" element={<Profile />}></Route>
					<Route path="/matchmake" element={<Matchmake />}></Route>
					<Route path="/applications" element={<Applications />}></Route>
					<Route
						path="/questionnaire/overview/:id"
						element={<OverviewQuestionnaire />}
					></Route>
					<Route
						path="/questionnaire/create/:id"
						element={<CreateQuestionnaire />}
					></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default routes;
