import { useContext } from 'react';
import { CodeBar } from '../components/CodeBar/CodeBar';
import { NotSign } from '../components/NotSign/NotSign';
import { Preview } from '../components/Preview/Preview';
import { AppContext } from '../context/AppContext';
import { EditorProvider } from '../context/EditorContext';
import styles from '../styles/modules/Editor.module.scss';

export function Editor() {
	const { authorized } = useContext(AppContext);

	return (
		<>
			{authorized
				? (
					<EditorProvider>
						<div className={styles.wrapper}>
							<CodeBar />
							<Preview />
						</div>
					</EditorProvider>
				) : (
					<NotSign />
				)}
		</>
	);
}
