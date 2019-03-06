import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const styles = theme => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing.unit * 4,
    },
    info: {
      paddingLeft: theme.spacing.unit * 5,
    },
    map: {
      paddingLeft: theme.spacing.unit * 5,
      paddingRight: theme.spacing.unit * 5
    }
  });
  
  
  class ListObject extends Component {    
        
      render(){
          const { classes, RT } = this.props;
          return (
          <div>
            <ListItem button onClick={this.handleClick}>              
              <div>
                  <p>ID: {rt.id}</p> 
                  <p>DATETIME: {rt.DATETIME}</p>
                  <p>CONCENTRATION:{rt.CONCENTRATION}</p>
                  <p>TEMPERATURE:{rt.TEMPERATURA}</p>
                  <p>HUMIDITY:{rt.HUMIDITY}</p>
                  <p>PRESSURE:{rt.PRESSURE}</p>
              </div>
              
            </ListItem>            
            <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBGsYTyBvpy_UOWl8VWJF27Yz8TD6iPWTU" />
            <script src="../helpers/map.js" />
          </div>
          )
          }
  }
  
  class NestedList extends Component {
  
    render() {
      const { classes, rt } = this.props; 
      return (
        <List
          component="nav"
          subheader={<ListSubheader component="div">iFORMATION DISPLAY 1 </ListSubheader>}
          className={classes.root}
        >
          {RT.map(RT => {
            return <ListObject classes={classes} RT={RT} key={RT.ID}/>
          })}
        </List>
      );
    }
  }
  
  NestedList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(NestedList);