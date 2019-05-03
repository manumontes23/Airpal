import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home'
import { withRouter } from 'react-router-dom';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    button: {
      margin: theme.spacing.unit,
    },
    hidden: {
      display: "none"
    },
    toolbar: {
      background: '#000'
    },
    menuButton: {
      fontFamily: "'Righteous', cursive",
      color: '#00e5ff'
    }
  })
  
function Header(props) {
    const { classes, isLoggedIn } = props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <HomeIcon/>
              AIRPAL
            </IconButton> 
            <Button 
              color="inherit" 
              className={isLoggedIn ? classes.button : classes.hidden}
              onClick={() => props.history.push("/home")}>
              Registro
            </Button>
            <Button               
              color="inherit" 
              className={isLoggedIn ? classes.button : classes.hidden}
              onClick={() => props.history.push("/houses")}>
              Houses
            </Button>
            <Button               
              color="inherit" 
              className={isLoggedIn ? classes.button : classes.hidden}
              onClick={() => props.history.push("/displays")}>
              Devices
            </Button>
            <Button               
              color="inherit" 
              className={isLoggedIn ? classes.button : classes.hidden}
              onClick={() => props.history.push("/admin")}>
              Admins
            </Button>
            <Button               
              color="inherit" 
              className={isLoggedIn ? classes.button : classes.hidden}
              onClick={() => props.history.push("/warnings")}>
              Warnings
            </Button>
            <Button               
              color="inherit" 
              className={isLoggedIn ? classes.button : classes.hidden}
              onClick={() => console.log("Falta")}>              
              Log Out
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  } 
  
  
  export default withRouter(withStyles(styles)(Header));
