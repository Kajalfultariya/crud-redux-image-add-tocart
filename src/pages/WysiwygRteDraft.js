import React, { useState ,useEffect} from 'react';
import { convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { Button, Form } from 'reactstrap';
import draftToHtml from "draftjs-to-html";
import { useDispatch } from "react-redux";
import { addEdiStart } from "../redux/actions";
import { useHistory } from 'react-router-dom';
import { loadEdiStart } from "../redux/actions";


const EditorContainer = () => {

    const [editorState, setEditorState] = useState('');
    const history=useHistory();
   
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadEdiStart())
    },[]);

    const onEditorStateChange = (editorState) => {
       
        setEditorState(editorState);
    };

    let data = "";
    function uploadImageCallBack(file) {
        return new Promise(
          (resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://api.imgur.com/3/image');
            xhr.setRequestHeader('Authorization', 'Client-ID ##clientid##');
            const data = new FormData();
            data.append('image', file);
            xhr.send(data);
            xhr.addEventListener('load', () => {
              const response = JSON.parse(xhr.responseText);
              console.log(response)
              resolve(response);
            });
            xhr.addEventListener('error', () => {
              const error = JSON.parse(xhr.responseText);
              console.log(error)
              reject(error);
            });
          }
        );
      }
    const handleSubmit = (e) => {
        e.preventDefault();

        //draft to html
        const contentRaw = convertToRaw(editorState.getCurrentContent());
        const contentHTML = draftToHtml(contentRaw);
        data = { contentHTML };
        console.log("Draft to html", data)

        dispatch(addEdiStart(data));
        history.push("/EditorShow")

    }

  
    return (
        <div style={{ margin: "auto", padding: "15px", maxWidth: "700px", alignContent: "center" }}>

            <div className='editor' >
                <Form onSubmit={handleSubmit}>
                <h1>Add Editor Data</h1>
                    <Editor
                        editorState={editorState}
                        onEditorStateChange={onEditorStateChange}
                        toolbar={{
                            inline: { inDropdown: true },
                            list: { inDropdown: true },
                            textAlign: { inDropdown: true },
                            link: { inDropdown: true },
                            history: { inDropdown: true },
                            image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
                          
                              }}
                    />
                    <Button type="submit">Save and Display</Button>




                </Form>
            </div>
        </div>)
}




export default EditorContainer;