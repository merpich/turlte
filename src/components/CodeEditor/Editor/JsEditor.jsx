import { useContext } from 'react';
import { EditorContext } from '../../context/EditorContext';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/snippets/javascript';
import 'ace-builds/src-min-noconflict/ext-language_tools';

export function JsEditor() {
	const { js, setJs } = useContext(EditorContext);

	return (
		<AceEditor
			placeholder="Здесь ваш javascript код"
			mode="javascript"
			theme="twilight"
			name="editor_js"
			value={js}
			onChange={value => setJs(value)}
			fontSize={16}
			height={'100%'}
			width={'100%'}
			showPrintMargin={true}
			showGutter={true}
			highlightActiveLine={false}
			setOptions={{
				enableBasicAutocompletion: true,
				enableLiveAutocompletion: true,
				enableSnippets: true,
				tabSize: 2
			}}
		/>
	);
}