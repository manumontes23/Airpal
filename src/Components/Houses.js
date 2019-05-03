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
    overflowX: 'hidden',
    backgroundColor:'#424242'
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
    background: 'linear-gradient(to right bottom, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #eeeeee, #dddddd, #cccccc, #a7a7a7, #848484, #626262, #424242);'
  },
  info: {
    color: '#00ffff',
    paddingLeft: theme.spacing.unit * 5,
    
  },
  grid1: {
    padding: 5,
    marginBottom: 5
  },
  grid2: {
    margin: 'auto',
    width: '30%',
    heigh: '100%'
  },
  header: {
    fontWeight: 'bold',
  },
  paper: {
    color: 'white',
    margin: 20,
    padding: 10,
    boxShadow: '19px 12px 16px -1px rgba(0,0,0,0.38)',
    backgroundColor: '#212121'
  },
  subheader: {
    color: '#2962ff',
    backgroundColor: 'rgba(224,224,224,0.9)',
  },
  p: {
    color: '#00ffff',
    textShadow: '0px 0px 7px rgba(0,255,255,0.64)'
  },
  i: {
    color: 'white',
    textShadow: 'none'
  }
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
                <p className={classes.i}>ID: {house.ID}</p> 
                <p className={classes.i}>FULL NAME: {house.LASTNAME} {house.NAME}</p>
                <p className={classes.i}>ADDRESS: {house.ADDRESS} </p>
            </div>
            {this.state.open ? <ExpandMore/> : <ExpandLess />}
          </ListItem>
          <Collapse in={!this.state.open} timeout="auto" unmountOnExit>
            <List  component="div" disablePadding>
              <ListItem  className={classes.nested}>
                <Grid container>
                  <Grid item className={classes.grid1}>
                    <Paper className={classes.paper} elevation={10}>
                        <p className={classes.p}>DISPLAY: <b className={classes.i}>{house.DISPLAY}</b></p>
                        <p className={classes.p}>EMAIL: <i className={classes.i}>{house.EMAIL}</i></p> 
                        <p className={classes.p}>PHONE NUMBER: <i className={classes.i}>{house.TELNUMBER} </i></p>
                        <p className={classes.p}>NUMBER OF RESIDENTS: <i className={classes.i}>{house.ADDRESS}</i></p>
                        <p className={classes.p}>NUMBER OF FLOORS: <i className={classes.i}>{house.FLOORNUMBER}</i></p>
                        <p className={classes.p}>NUMBER OF SMOKERS: <i className={classes.i}>{house.SMOKERSNUMBER}</i></p>
                        <p className={classes.p}>NUMBER OF PETS: <i className={classes.i}>{house.PETSNUMBER}</i></p>
                        <p className={classes.p}>IS REVOKED: <i className={classes.i}>{house.REVOKEHOUSE}</i></p>
                        <p className={classes.p}>FLOOR MATERIAL: <i className={classes.i}>{house.FLOORMATERIAL}</i></p>
                        <p className={classes.p}>WALLS MATERIAL: <i className={classes.i}>{house.WALLSMATERIAL}</i></p>
                        <p className={classes.p}>PAINT TYPE: <i className={classes.i}>{house.PAINTTYPE}</i></p>
                        <p className={classes.p}>LATITUDE: <i className={classes.i}>{house.LATITUDE}</i></p>
                        <p className={classes.p}>ALTITUDE: <i className={classes.i}>{house.ALTITUDE}</i></p>
                        <p className={classes.p}>LONGITUDE: <i className={classes.i}>{house.LONGITUDE}</i></p>
                        <p className={classes.p}>INSTALLED FOR: <b className={classes.i}>{house.INSTALLER}</b> ON: <b className={classes.i}>{house.INSTALLDATE.substring(0,10)}</b></p>
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