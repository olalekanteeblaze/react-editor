import React, { useState } from 'react';
import Toolbar from './components/Toolbar';
import Editor from './components/Editor';
import classes from './App.module.scss';

function App() {

  const [bold, setBold] = useState(false)
  const [italic, setItalic] = useState(false)
  const [align, setAlign] = useState('left')
  const [underline, setUnderline] = useState(false)

  return (
    <div className={classes.container}>
      <Toolbar 
        bold={bold}
        setBold={setBold}
        italic={italic}
        setItalic={setItalic}
        align={align}
        setAlign={setAlign}
        underline={underline}
        setUnderline={setUnderline}
      />
      <Editor 
        bold={bold}
        setBold={setBold}
        italic={italic}
        setItalic={setItalic}
        align={align}
        setAlign={setAlign}
        underline={underline}
        setUnderline={setUnderline}
      />
    </div>
  );
}

export default App;
