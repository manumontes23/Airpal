import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DisplayIcon from '@material-ui/icons/WifiTethering';

const styles = theme => ({
    dtitle: {
        flexWrap: 'wrap',
        color: '#000',  
        width: '50%',
        padding: '0.1em',
        fontFamily: "'Righteous', cursive",
    },
  });

/**
 * Se encarga de obtener la lista de dispositivos
 */
function getDisplays() {}

/**
 * Establece si un dispositivo está activo
 */
function setDeviceStatus() {}


/////////////TEMPORAL/////////////////////
function generate(element) {
    getDisplays()
    setDeviceStatus()
    return [0, 1, 2,3,4,5,6,7,8,9].map(value =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

function test(classes) {
    let items = [];
    items.push( <DisplayItem classes={classes}/> )
    return items;
}
//////////////////|||||||||////////////////

const DisplayItem = (props) => {
    const {classes} = props;
    const state = {
        dense: false,
        secondary: false,
      };
    return (
        <Grid item xs={12} md={6}>
        <div className={classes.demo}>
            <List dense={state.dense}>
            {generate(
                <ListItem>
                <ListItemAvatar>
                    <Avatar>
                    <DisplayIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary='Display'
                    secondary={state.secondary ? 'Secondary text' : null}
                />
                </ListItem>,
            )}
            </List>
        </div>
        </Grid>
    )
}

class DisplayList extends React.Component {
  render() {
      const classes = this.props;
    return (
      <div>
        <Typography variant="h1" className={classes.dtitle}>
            Lista de Dispositivos
        </Typography>
          <List className={classes.list}>
            {test(classes)}
          </List>
      </div>
    )
  }
}



DisplayList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DisplayList);
