import { useState } from 'react';
import { CssEditor } from '../Editor/CssEditor';
import { HtmlEditor } from '../Editor/HtmlEditor';
import { JsEditor } from '../Editor/JsEditor';
import styles from './CodeBar.module.scss';

export function CodeBar() {
	const [activeTab, setActiveTab] = useState('html');

	return (
		<div className={styles.wrapper}>
			<nav className={styles.nav}>
				<button
					className={`${styles.tab} ${activeTab === 'html' ? styles.activeTab : ''}`}
					onClick={() => setActiveTab('html')}
				>
					HTML
				</button>
				<button
					className={`${styles.tab} ${activeTab === 'css' ? styles.activeTab : ''}`}
					onClick={() => setActiveTab('css')}
				>
					CSS
				</button>
				<button
					className={`${styles.tab} ${activeTab === 'js' ? styles.activeTab : ''}`}
					onClick={() => setActiveTab('js')}
				>
					JS
				</button>
			</nav>

			<div className={styles.editor}>
				{ activeTab === 'html' ? <HtmlEditor /> : null }
				{ activeTab === 'css' ? <CssEditor /> : null }
				{ activeTab === 'js' ? <JsEditor /> : null }
			</div>
		</div>
	);
}
