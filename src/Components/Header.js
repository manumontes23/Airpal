import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    button: {
      margin: theme.spacing.unit,
    }
  })
  
function Header(props) {
    const { classes } = props;
    
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              AIRPAL
            </IconButton> 
            <Button color="inherit" className={classes.button}>
              Home
            </Button>
            <Button color="inherit" className={classes.button}>
              Houses
            </Button>
            <Button color="inherit" className={classes.button}>
              Displays
            </Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
  export default withStyles(styles)(Header);
