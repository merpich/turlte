import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { EditorProvider } from '../../context/EditorContext';
import { CodeBar } from '../../components/CodeEditor/CodeBar/CodeBar';
import { Preview } from '../../components/CodeEditor/Preview/Preview';
import styles from './Editor.module.scss';

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
					<div>Запрещено</div>
					// <NotSign />
				)}
		</>
	);
}
