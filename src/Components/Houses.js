import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoDisplay from './InfoDisplay';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { HomeIcon } from './Icons.js';
import { Grid } from '@material-ui/core';
import RT from '../data/rt';
import api from '../helpers/api';

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
  constructor(props) {
    super(props)
    this.state = {
        open: true,
        houseid: this.props.house.ID,
        rt: {}
      }
    }

    componentDidMount(){
      this.getHouseRT();
    }

    getHouseRT = async () => {
      const rt = await this.getHouseRT(this.state.houseid);
      this.setState(rt);
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
            <div>
                <p>ID: {house.ID}</p> 
                <p>FULL NAME: {house.LASTNAME} {house.NAME}</p>
                <p>ADDRESS: {house.ADDRESS} </p>
            </div>
            {this.state.open ? <ExpandMore/> : <ExpandLess />}
          </ListItem>
          <Collapse in={!this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItem  className={classes.nested}>
            <Grid container>
              <Grid item direction="column">
                <div>
                    <p>DISPLAY: {house.DISPLAY} </p>
                    <p>EMAIL: {house.ID}</p> 
                    <p>PHONE NUMBER: {house.LASTNAME} {house.NAME}</p>
                    <p>NUMBER OF RESIDENTS: {house.ADDRESS} </p>
                    <p>NUMBER OF FLOORS: {house.FLOORNUMBER} </p>
                    <p>NUMBER OF SMOKERS: {house.SMOKERSNUMBER} </p>
                    <p>NUMBER OF PETS: {house.PETSNUMBER} </p>
                    <p>IS REVOKED: {house.REVOKEHOUSE} </p>
                  <div className={classes.info}>
                    <p>FLOOR MATERIAL: {house.FLOORMATERIAL} </p>
                    <p>WALLS MATERIAL: {house.WALLSMATERIAL} </p>
                    <p>PAINT TYPE: {house.PAINTTYPE} </p>
                    <p>LATITUDE: {house.LATITUDE} </p>
                    <p>ALTITUDE: {house.ALTITUDE} </p>
                    <p>LONGITUDE: {house.LONGITUDE} </p>
                    <p>INSTALLED FOR: {house.INSTALLER} ON: {house.INSTALLDATE.substring(0,10)}</p>
                  </div> 
                </div>
              </Grid>
              <Grid item xs>
                <InfoDisplay rt={this.state.rt}/>
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
    houses: []
  }

  componentDidMount() {
    this.getHouses();
  }

  getHouses = async () => {
    const houses = await api.getHouses();
    this.setState({houses});
  }


  render() {
    const { classes } = this.props; 
    const { houses } = this.state;

    return (
      <List
        component="nav"
        subheader={<ListSubheader component="div">All the houses registered in Airpal DB</ListSubheader>}
        className={classes.root}
      >
        {houses.map(house => {
          return <ListObject classes={classes} house={house} key={house.ID}/>
        })}
      </List>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);