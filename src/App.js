import { Route, Routes } from 'react-router-dom';
import { Intro } from './pages/Intro/Intro';
import { Register } from './pages/Login/Register';
import { SignIn } from './pages/Login/SignIn';
import { NotFound } from './pages/NotFound/NotFound';
// import { Editor } from "./pages/Editor";

export function App() {
	return (
		<Routes>
			<Route
				path="*"
				element={ <NotFound /> }
			/>
			<Route
				path="/"
				element={ <Intro /> }
			/>
			<Route
				path="/signin"
				element={ <SignIn /> }
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
