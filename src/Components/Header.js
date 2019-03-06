import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home'




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
    }
  })
  
function Header(props) {
    const { classes, isLoggedIn } = props;
    
    const renderHouses = () => {
      props.renderComponent('houses');
    }

    const renderHome = () => {
      props.renderComponent('home');
    }
    
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <HomeIcon/>
              AIRPAL
            </IconButton> 
            <Button color="inherit" className={isLoggedIn ? classes.button : classes.hidden}>
              Home
            </Button>
            <Button color="inherit" className={isLoggedIn ? classes.button : classes.hidden} onClick={renderHouses}>
              Houses
            </Button>
            <Button color="inherit" className={isLoggedIn ? classes.button : classes.hidden}>
              Displays
            </Button>
            <Button color="inherit" className={isLoggedIn ? classes.button : classes.hidden}>
              Log Out
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  } 
  
  
  export default withStyles(styles)(Header);
