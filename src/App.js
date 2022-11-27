import { Route, Routes } from 'react-router-dom';
import { Intro } from './pages/Intro/Intro';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
// import { Editor } from "./pages/Editor";
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
			<Route
				path="/login"
				element={ <Login /> }
			/>
			<Route
				path="/register"
				element={ <Register /> }
			/>
			{/* <Route
				path="/editor"
				element={ <Editor />}
			/> */}
		</Routes>
	);
}
