import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InfoDisplay from './InfoDisplay';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { HomeIcon } from './Icons.js';
import { Grid, CircularProgress } from '@material-ui/core';
import api from '../helpers/api';
import Paper from '@material-ui/core/Paper';
const styles = theme => ({
  root: {
    width: '100%',
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  info: {
    paddingLeft: theme.spacing.unit * 5,
  },
  grid1: {
    backgroundColor: '#2c387e',
    padding: 5,
    borderRadius: 5,
    marginBottom: 5
  },
  grid2: {
    margin: 'auto',
    width: '30%',
    heigh: '100%'
  },
  header: {
    fontWeight: 'bold'
  },
  paper: {
    margin: 20,
    padding: 10,
  },
  subheader: {
    color: '#2962ff',
    backgroundColor: 'rgba(224,224,224,0.9)'
  },
});


class ListObject extends Component {
  constructor(props) {
    super(props)
    this.state = {
        open: true,
        houseid: this.props.house.ID,
        rt: {}
      }
    }

    handleClick = () => {
      this.setState(state => ({ open: !state.open}));
    };

    render(){
        const { classes, house } = this.props;
        return (
        <div>
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>  
              <HomeIcon />  
            </ListItemIcon>
            <div className={classes.header}>
                <p>ID: {house.ID}</p> 
                <p>FULL NAME: {house.LASTNAME} {house.NAME}</p>
                <p>ADDRESS: {house.ADDRESS} </p>
            </div>
            {this.state.open ? <ExpandMore/> : <ExpandLess />}
          </ListItem>
          <Collapse in={!this.state.open} timeout="auto" unmountOnExit>
            <List  component="div" disablePadding>
              <ListItem  className={classes.nested}>
                <Grid container>
                  <Grid item className={classes.grid1}>
                    <Paper className={classes.paper} elevation={10}>
                        <p>DISPLAY: {house.DISPLAY}</p>
                        <p>EMAIL: <i>{house.EMAIL}</i></p> 
                        <p>PHONE NUMBER: <i>{house.TELNUMBER} </i></p>
                        <p >NUMBER OF RESIDENTS: <i>{house.ADDRESS}</i></p>
                        <p >NUMBER OF FLOORS: <i>{house.FLOORNUMBER}</i></p>
                        <p >NUMBER OF SMOKERS: <i>{house.SMOKERSNUMBER}</i></p>
                        <p >NUMBER OF PETS: <i>{house.PETSNUMBER}</i></p>
                        <p >IS REVOKED: <i>{house.REVOKEHOUSE}</i></p>
                        <p >FLOOR MATERIAL: <i>{house.FLOORMATERIAL}</i></p>
                        <p >WALLS MATERIAL: <i>{house.WALLSMATERIAL}</i></p>
                        <p >PAINT TYPE: <i>{house.PAINTTYPE}</i></p>
                        <p >LATITUDE: <i>{house.LATITUDE}</i></p>
                        <p >ALTITUDE: <i>{house.ALTITUDE}</i></p>
                        <p >LONGITUDE: <i>{house.LONGITUDE}</i></p>
                        <p >INSTALLED FOR: <b>{house.INSTALLER}</b> ON: {house.INSTALLDATE.substring(0,10)}</p>
                    </Paper>
                  </Grid>
                  <Grid className={classes.grid2} item>
                    <InfoDisplay houseid={house.ID}/>
                  </Grid>
                </Grid>
              </ListItem>
            </List>
          </Collapse>
        </div>
        )
        }
}

class NestedList extends Component {

  state = {
    houses: null
  }

  componentDidMount() {
    this.getHouses();
  }

  getHouses = async () => {
    const houses = await api.getHouses();
    this.setState({houses});
  }

  renderProgressIndicator = () => {
    const { classes } = this.props; 
    return <Grid   
            container
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}>
      <CircularProgress 
        size = {100}
        className={classes.progress} color="primary" />
    </Grid>
  }

  renderHouses = () => {
    const { classes } = this.props; 
    const { houses } = this.state;
    return <List
        component="nav"
        subheader={<ListSubheader className={classes.subheader} component="div">All the houses registered in Airpal DB</ListSubheader>}
        className={classes.root}
      >
        {houses.map(house => {
          return <ListObject classes={classes} house={house} key={house.ID}/>
        })}
    </List>
  }

  render() {
    return (
      this.state.houses ? this.renderHouses() : this.renderProgressIndicator()
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);