import { useContext } from "react";
import { NotSign } from "../components/NotSign/NotSign";
import { AppContext } from "../context/AppContext";

export function Editor() {
	const { authorized } = useContext(AppContext);

	return (
		<>
			{authorized
				? (
					<h1>Editor</h1>
				) : (
					<NotSign />
				)}
		</>
	);
}
