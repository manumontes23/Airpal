import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import RT from '../data/rt'

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
    constructor(props) {
        super(props);
        this.state = {
            houseid: this.props.id,
            rt: null,
        }
    }

    render() {
        //Filtrar el RT
        const actualRT = RT.filter(t => t.ID == this.state.houseid)
        console.log('rt',actualRT)
        console.log('houseid',this.state.houseid)

        return (
            <div>
                <Paper >
                    <Grid container spacing={16}>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={16}>
                                <Grid item xs>
                                    <Typography align='center' variant="subtitle1" >
                                        {actualRT[0].ID}
                                    </Typography>
                                    <Typography align='center'variant="inherit">
                                    TEMPERATURA: {actualRT[0].TEMPERATURA}
                                    </Typography>
                                    <Typography align='center'variant="inherit">
                                    FECHA: {actualRT[0].DATETIME}</Typography>
                                    <Typography align='center'variant="inherit">CONCENTRACIÓN: {actualRT[0].CONCENTRATION}</Typography>
                                    <Typography align='center'variant="inherit">HUMEDAD: {actualRT[0].HUMIDITY}</Typography>
                                    <Typography align='center'variant="inherit">PRESIÓN: {actualRT[0].PRESSURE}</Typography>
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