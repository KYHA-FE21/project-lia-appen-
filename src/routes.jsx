import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import ProtectedRoutes from "./protected-routes";

// Routes
import Profile from "./features/profile/routes";
import Matchmake from "./features/matchmake/routes";
import Applications from "./features/applications/routes";
import Splash from "./features/splash/routes";
import Signin from "./features/auth/routes/signin";
import Signup from "./features/auth/routes/signup";
import Reset from "./features/auth/routes/reset";
import QuestionnaireEditor from "./features/questionnaire/routes/editor";
import QuestionnaireOverview from "./features/questionnaire/routes/overview";
import Advertisement from "./features/advertisement/routes";
import useUser from "./features/profile/hooks/use-user";
import AuthContext from "./context";
import { getStorage } from "./hooks/use-authenticate";

const AppRoutes = () => {
	const userStorage = getStorage("user")
	const user = useUser(userStorage.data?.id);

	let userContext = {}
	if (!userStorage.data?.id) {
		// Some kind of error with getting the user.
		userStorage.empty();
		userContext = { unauthenticated: true }
	}

	if (userStorage.data?.id) {
		if (user.state?.error) {
			userStorage.empty();
			window.location.pathname = "/signin";
		}

		userContext = user.state;
	}

	return (
		<AuthContext.Provider value={{ user: userContext, update: user.update }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Splash />}></Route>
						<Route
							path="/applications"
							element={
								<ProtectedRoutes allowedTypes={["student"]}>
									<Applications />
								</ProtectedRoutes>
							}
						/>
						<Route
							path="/applications/:id"
							element={
								<ProtectedRoutes allowedTypes={["company"]}>
									<Applications />
								</ProtectedRoutes>
							}
						/>
						<Route
							path="/profile"
							element={
								<ProtectedRoutes allowedTypes={["student", "company"]}>
									<Profile />
								</ProtectedRoutes>
							}
						/>
						<Route
							path="/matchmake"
							element={
								<ProtectedRoutes allowedTypes={["student"]}>
									<Matchmake />
								</ProtectedRoutes>
							}
						/>
						<Route
							path="/questionnaire/overview/:id"
							element={
								<ProtectedRoutes allowedTypes={["company"]}>
									<QuestionnaireOverview />
								</ProtectedRoutes>
							}
						/>
						<Route
							path="/questionnaire/editor/:id"
							element={
								<ProtectedRoutes allowedTypes={["company"]}>
									<QuestionnaireEditor />
								</ProtectedRoutes>
							}
						/>
						<Route
							path="/reset/:id"
							element={
								<ProtectedRoutes allowedTypes={["company"]}>
									<Reset />
								</ProtectedRoutes>
							}
						/>
						<Route
							path="/advertisement"
							element={
								<ProtectedRoutes allowedTypes={["company"]}>
									<Advertisement />
								</ProtectedRoutes>
							}
						/>
						<Route path="/signin" element={<Signin />} />
						<Route path="/signup" element={<Signup />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</AuthContext.Provider>
	);
};

export default AppRoutes;
