import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      margin: 'auto',
      maxWidth: 500,
    }
})

class InfoDisplay extends Component {
    constructor() {
        super();
    }

    render() {
        const {classes, info} = this.props;
        return (
            <div>
                <Paper className={classes.paper}>
                    <Grid container spacing={16}>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={16}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        {info.id}
                                    </Typography>
                                    <Typography variant="h4">{info.datetime}
                                    </Typography>
                                    <Typography variant="h4">{info.temperatura}</Typography>
                                    <Typography variant="h4">{info.humidity}</Typography>
                                    <Typography variant="h4">{info.pressure}</Typography>
                                    <Typography variant="h4">{info.display}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

InfoDisplay.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(InfoDisplay);