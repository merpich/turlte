import { Route, Routes } from "react-router-dom";
// import { Editor } from "./pages/Editor";
import { Intro } from "./pages/Intro/Intro";
// import { Login } from "./pages/Login";
// import { NotFound } from "./pages/NotFound";

export function App() {
	return (
		<Routes>
			{/* <Route
				path="*"
				element={ <NotFound /> }
			/> */}
			<Route
				path="/"
				element={ <Intro /> }
			/>
			{/* <Route
				path="/editor"
				element={ <Editor />}
			/>
			<Route
				path="/login"
				element={ <Login /> }
			/> */}
		</Routes>
	);
}
