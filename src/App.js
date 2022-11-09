import { Route, Routes } from "react-router-dom";
import { Editor } from "./pages/Editor";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";

export function App() {
	return (
		<Routes>
			<Route
				path="*"
				element={ <NotFound /> }
			/>
			<Route
				path="/"
				element={ <Home /> }
			/>
			<Route
				path="/editor"
				element={ <Editor />}
			/>
			<Route
				path="/login"
				element={ <Login /> }
			/>
		</Routes>
	);
}
