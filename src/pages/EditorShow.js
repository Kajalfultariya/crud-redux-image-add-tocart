import React, { useEffect, useState } from 'react';
import { EditorState, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import { Button, Form } from 'reactstrap';
import { useDispatch, useSelector } from "react-redux";
import { Editor } from "react-draft-wysiwyg";
import { loadEdiStart } from "../redux/actions";
import { useHistory } from 'react-router-dom';

const EditorShow = () => {

    const [editorState1, setEditorState1] = useState('');
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.data);
    const history = useHistory();

    useEffect(() => {
        dispatch(loadEdiStart())

        if (users && !editorState1) {
            console.log(users.length);
            var num = users.length - 1;
            const contentBlock = htmlToDraft(users[num].contentHTML);
            if (contentBlock) {
                const contentState = ContentState.createFromBlockArray(
                    contentBlock.contentBlocks
                );
                setEditorState1(EditorState.createWithContent(contentState));
            }
        }
    }, []);


    const onEditorStateChange1 = (editorState1) => {
        setEditorState1(editorState1);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/WysiwygRteDraft")
    }

    return (
        <div style={{ margin: "auto", padding: "15px", maxWidth: "700px", alignContent: "center" }}>
            <div className='editor' >
                <Form onSubmit={handleSubmit}>
                    <h1>Display Editor Data</h1>
                    <Editor
                        editorState={editorState1}
                        onEditorStateChange={onEditorStateChange1}
                        init={{
                            menubar: false,
                            toolbar: false
                        }}
                    />
                     <Button type="submit">Back To Editor</Button>
                </Form>
            </div>
        </div>
    )
}

export default EditorShow;