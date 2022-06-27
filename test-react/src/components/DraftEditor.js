import React, { useState, useEffect, useRef } from "react";
import {Editor, EditorState} from "draft-js";
import EditorStyle from "./EditorStyled";

const DraftEditor = () => {
  const [es, setEs] = useState(EditorState.createEmpty());
  const editor = useRef();

  useEffect(() => {
    if(!editor.current) return;
    editor.current.focus();
  }, [editor]);
  return (
  <EditorStyle>
    <div className="tools">
      <button>a</button>
    </div>
    <Editor ref={editor} editorState={es} onChange={setEs}/>
  </EditorStyle>
  )
}

export default DraftEditor;