import React, { Component } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    list: {

    },
    listitem: {
        display: 'flexbox',
        backgroundColor: '#000000'
    }
})

function test(classes) {
    let items = [];
    for (let index = 0; index < 10; index++) {
        items.push(
            <DisplayItem classes={classes} id={index}/>
        )
    }
    return items;
}

const DisplayItem = (props) => {
    const {id, classes} = props;
    return (
        <ListItem className={classes.listitem}>
            <Typography>Test</Typography>
            <Typography>{id}</Typography>
        </ListItem>
    )
}

class DisplayList extends Component {
  render() {
      const classes = this.props;
    return (
      <div>
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
