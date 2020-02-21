import React, { useState } from 'react';
import { Grid, withStyles, createStyles, Typography } from '@material-ui/core';
import Editor from 'react-simple-code-editor';
import '../../../shared/prism_v2.css';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

const styles = createStyles({
  container: {
    width: '300px',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid black',
    margin: 15,
    background: 'lightgray',
    flexWrap: 'wrap'
  }
});

const Flashcard = ({ classes, card }) => {
  const [code2, setCode2] = useState(`import React from "react";
  import ReactDOM from "react-dom";
  
  const thePies = "pies";
  
  function App() {
    return (
      <h1>Hello world</h1>
    );
  }

  function App() {
    return (
      <h1>Hello world</h1>
    );
  }

  function App() {
    return (
      <h1>Hello world</h1>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));`);

  const onChange = code => {
    setCode2(code);
    console.log(code);
  };

  const { title, description, code } = card;
  return (
    <Grid className={classes.container}>
      <Typography>{title}</Typography>
      <Typography>{description}</Typography>
      <Grid
        style={{
          background: 'white',
          height: '250px',
          display: 'flex'
        }}
      >
        <Editor
          value={code}
          onValueChange={code => onChange(code)}
          highlight={code => highlight(code, languages.js)}
          padding={10}
          tabSize={4}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
            overflowY: 'scroll'
          }}
        />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Flashcard);
