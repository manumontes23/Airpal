import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import api from '../helpers/api';
import { CircularProgress } from '@material-ui/core';
import Divider from '@material-ui/core/Divider'

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit,
      margin: 'auto',
      maxWidth: 700,
      backgroundColor: '#9e9e9e'
    }
})

class InfoDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rt: null,
            not_found: false
        }
    }
    
    componentDidMount() {
        this.getRT();
    }

    /**
     * Get house id from props
     * Call API helper function getHouseRT() to get this house RT info
     * Set state to the RT returned
     * If some error, it'll catch it in the state to render error warning/adive
     */
    getRT = async () => {
        const { houseid } = this.props
        try {
            let rt = await api.getHouseRT(houseid);
            this.setState({ rt });
        } catch (err) {
            this.setState( {not_found: true})
        }
    }

    /**
     * Returns a Progress Circle to render
     */
    renderProgressIndicator = () => {
        return <Grid   
                container
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}>
          <CircularProgress
            size = {100}
            color="primary" />
        </Grid>
    }

    /**
     * Render all the info from RT
     * Still in dev
     * TODO: Make it beautier
     */
    renderInfo(){
        const { rt } = this.state;
        const {classes} = this.props;
        return <div className={classes.root}>
        <Paper className={classes.paper} square={false} elevation={6}>
            <Typography variant="subtitle1">
                DISPOSITIVO: {rt.ID}
            </Typography>
            <Divider />
            <Typography>
                TEMPERATURA: {rt.TEMPERATURE}
            </Typography>
            <Typography>
                FECHA: {rt.DATETIME}
            </Typography>
            <Typography>
                CONCENTRACIÓN: {rt.CONCENTRATION}
            </Typography>
            <Typography>
                HUMEDAD: {rt.HUMIDITY}
            </Typography>
            <Typography>
                PRESIÓN: {rt.PRESSURE}
            </Typography>   
        </Paper>
    </div>
    }

    /**
     * If this house getting its RT threw some error, it'll render a message
     * If this house has an actual RT ready on its state, will render it
     * Else, it will render de progress circle
     */
    render() {
        if(this.state.not_found) return <h3 style = {{color: "red"}}> Error 418 I'm a teapot </h3>
        return (
            this.state.rt ?  this.renderInfo() : this.renderProgressIndicator()
        )
    }
}

InfoDisplay.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfoDisplay);