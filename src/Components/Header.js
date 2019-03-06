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
    }
  })
  
function Header(props) {
    const { classes, isLoggedIn } = props;
<<<<<<< HEAD

=======
    
    const renderHouses = () => {
      props.renderComponent('houses');
    }

    const renderHome = () => {
      props.renderComponent('home');
    }
    
>>>>>>> f1b0a88f4b478ca1ba583b3e3150c1dfb791febb
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <HomeIcon/>
              AIRPAL
            </IconButton> 
            <Button 
              color="inherit" 
              className={isLoggedIn ? classes.button : classes.hidden}
              onClick={() => props.history.push("/home")}>
              Home
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
              onClick={() => props.history.push("/home")}>
              Displays
            </Button>
            <Button               
              color="inherit" 
              className={isLoggedIn ? classes.button : classes.hidden}
              onClick={() => props.history.push("/home")}>
              Admins
            </Button>
            <Button               
              color="inherit" 
              className={isLoggedIn ? classes.button : classes.hidden}
              onClick={() => props.history.push("/home")}>
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
