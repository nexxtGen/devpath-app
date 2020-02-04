import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = createStyles({
  content: {
    marginTop: 65,
    marginLeft: 40,
    display: 'flex',
    flexGrow: 1,
    padding: 60,
    transition: 'margin-left 0.3s, ease-in'
  },
  contentOpenDraver: {
    marginTop: 65,
    marginLeft: 210,
    display: 'flex',
    flexGrow: 1,
    padding: 60,
    transition: 'margin-left 0.3s, ease-in'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 8
  }
});

const LandingPage = ({ classes, open }) => {
  return (
    <main className={open ? classes.contentOpenDraver : classes.content}>
      <div className={classes.toolbar} />
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
        non enim praesent elementum facilisis leo vel. Risus at ultrices mi
        tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
        tellus. Convallis convallis tellus id interdum velit Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
        elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet.
        Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis
        convallis tellus id interdum velit Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus
        in hendrerit gravida rutrum quisque non tellus. Convallis convallis
        tellus id interdum velit Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis
        leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
        hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus
        id interdum velit Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus
        at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
        rutrum quisque non tellus. Convallis convallis tellus id interdum velit
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
        non enim praesent elementum facilisis leo vel. Risus at ultrices mi
        tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
        tellus. Convallis convallis tellus id interdum velitLorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
        elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet.
        Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis
        convallis tellus id interdum velit Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus
        in hendrerit gravida rutrum quisque non tellus. Convallis convallis
        tellus id interdum velit Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis
        leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
        hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus
        id interdum velitLorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus
        at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
        rutrum quisque non tellus. Convallis convallis tellus id interdum velit
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
        non enim praesent elementum facilisis leo vel. Risus at ultrices mi
        tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
        tellus. Convallis convallis tellus id interdum velit Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
        elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet.
        Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis
        convallis tellus id interdum velitLorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus
        in hendrerit gravida rutrum quisque non tellus. Convallis convallis
        tellus id interdum velit Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis
        leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
        hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus
        id interdum velit Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus
        at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
        rutrum quisque non tellus. Convallis convallis tellus id interdum velit
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus
        in hendrerit gravida rutrum quisque non tellus. Convallis convallis
        tellus id interdum velit Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis
        leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
        hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus
        id interdum velitLorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus
        at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
        rutrum quisque non tellus. Convallis convallis tellus id interdum velit
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
        non enim praesent elementum facilisis leo vel. Risus at ultrices mi
        tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
        tellus. Convallis convallis tellus id interdum velit Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
        elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet.
        Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis
        convallis tellus id interdum velitLorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus
        in hendrerit gravida rutrum quisque non tellus. Convallis convallis
        tellus id interdum velit Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis
        leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
        hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus
        id interdum velit Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus
        at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
        rutrum quisque non tellus. Convallis convallis tellus id interdum velit
      </Typography>
    </main>
  );
};

export default withStyles(styles)(LandingPage);
