import React from 'react';
import { Editor, EditorState } from 'draft-js';
import './TextioEditor.scss';


class TextioEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };
        this.onChange = editorState => this.setState({ editorState });
    }
    render() {
        const { editorState } = this.state;
        return <Editor editorState={editorState} onChange={this.onChange} />;
    }
}

export default TextioEditor;