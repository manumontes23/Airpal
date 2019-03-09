import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Input, Button } from '@material-ui/core';


const styles = theme => ({
  container: {
    display: 'flexbox',
    backgroundColor: '#212121',
    margin: '20px',
    borderRadius: 5,
    paddingTop: 15,
    
  },
  form: {
    display: 'flexbox',
    margin: '20px',
  },
  textField: {
    margin: theme.spacing.unit,
    backgroundColor: '#e0e0e0',
    borderRadius: 5
  },
  select: {
    margin: theme.spacing.unit,
    width: theme.spacing.unit * 15,
    backgroundColor: '#e0e0e0',
    borderRadius: 5
  },
  heading: {
    color: '#fff'
  },
  tittle : {
    margin: 'auto',
    color: '#fff'
  },
  dense: {
    marginTop: 20,
    backgroundColor: '#424242'
  },
  details: {
    display: 'block',

  },
  button: {
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    padding: 10
  }
});

const revokedOptions = [
  {
    label: 'SI',
    value: true,
    key: 'revoked'
  },
  {
    label: 'NO',
    value: false,
    key: 'not-revoked'
  }
]

class FormHouse extends React.Component {

  state = {
    revoked: false,
  }
  
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Typography className={classes.tittle} variant='h2' align='center'>Registro de Vivienda</Typography>
        <form className={classes.form} autoComplete="off">
          <ExpansionPanel className={classes.dense}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
              <Typography className={classes.heading} variant='title'>Información de habitante</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.details}>
            <TextField 
                id='house-name'
                name='NAME'
                variant='filled'
                label='Nombre'
                required={true}
                className={classes.textField}
              />
              <TextField 
              id='house-lastname'
              name='LASTNAME'
              variant='filled'
              required={true}
              label='Apellidos'
              required={true}
              className={classes.textField}/>
              <TextField 
              id='house-email'
              name='EMAIL'
              label='Email'
              variant='filled'
              type='EMAIL'
              required={true}
              className={classes.textField}/>
              <TextField 
              id='house-telnumber'
              name='TELNUMBER'
              label='Telefono'
              required={true}
              variant='filled'
              className={classes.textField}
              type='number'
              />
              <TextField 
              id='house-address'
              name='ADDRESS'
              variant='filled'
              label='Dirección'
              required={true}
              className={classes.textField}/>
              <TextField 
              id='houses-resident-number'
              name='RESIDENTNUMBER'
              variant='filled'
              label='Número de residentes'
              required={true}
              type='number'
              className={classes.textField}/>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel className={classes.dense}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
              <Typography variant='title' className={classes.heading}>Información Vivienda</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.details}>
              <TextField 
              id='house-floor-number'
              name='FLOORNUMBER'
              required={true}
              variant='filled'
              label='Numero de piso'
              helperText='Se elige el numero piso en cuanto a altitud de un edificio'
              className={classes.textField}
              type='number'/>
              <TextField 
              id='house-revoked'
              name='REVOKEHOUSE'
              variant='filled'
              label='Casa revocada'
              fullWidth
              select
              className={classes.select}
              value={this.state.revoked}
              onChange={this.handleChange('revoked')}>
              {revokedOptions.map(option => (
                <option key={option.key} value={option.value}>
                  {option.label}
                </option>
              ))}</TextField>
              <TextField 
              id='house-smokers'
              variant='filled'
              name='SMOKERSNUMBER'
              label='Numero de fumadores'
              helperText='Si no hay fumadores ingrese 0'
              type='number'
              required={true}
              className={classes.textField}/>
              <TextField
              id='house-pet-number'
              name='PETSNUMBER'
              label='Numero de mascotas'
              variant='filled'
              helperText='Si no hay, ingrese 0'
              required={true}
              className={classes.textField}
              type='number'/>
              <TextField 
              id='house-floor-material'
              variant='filled'
              name='FLOORMATERIAL'
              label='Material del suelo'
              className={classes.textField}
              required={true}/>
              <TextField 
              id='house-walls-material'
              name='WALLSMATERIAL'
              variant='filled'
              label='Material de las paredes'
              className={classes.textField}
              required={true}/>
              <TextField 
              id='house-paint'
              variant='filled'
              name='PAINTTYPE'
              label='Tipo de pintura'
              className={classes.textField}
              required={true}/>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <Button variant='raised' className={classes.button}>Registrar</Button>
        </form>
      </div>
    );
  }
}

FormHouse.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormHouse);