import { createContext, useState } from 'react';

const AppContext = createContext();

function AppProvider({ children }) {
	const [user, setUser] = useState({});
	const [authorized, setAuthorized] = useState(false);

	const values = {
		user, setUser,
		authorized, setAuthorized
	};

	return (
		<AppContext.Provider value={values}>
			{ children }
		</AppContext.Provider>
	);
}

export { AppContext, AppProvider };
