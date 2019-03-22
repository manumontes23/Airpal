import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography'
import api from '../helpers/api'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Button, Select, FormControl } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Map from './map';

const styles = theme => ({
  container: {
    display: 'flexbox',
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
    borderRadius: 5
  },
  select: {
    margin: theme.spacing.unit,
    width: theme.spacing.unit * 15,
    minWidth: 200,
    borderRadius: 5,
  },
  paper: {
    paddingTop: 5,
    marginTop: '2em',
    backgroundColor: '#1565c0'
  },
  tittle : {
    margin: 'auto',
  },
  dense: {
    marginTop: 20,
    borderRadius: 5
  },
  details: {
    display: 'block',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 170,
  },
  button: {
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 10,
  },
  helperText: {
    color: '#424242',
    fontStyle: 'italic',
    fontSize: '1.3em'
  }
});

// const revokedOptions = [
//   {
//     label: 'SI',
//     value: true,
//     key: 'revoked'
//   },
//   {
//     label: 'NO',
//     value: false,
//     key: 'not-revoked'
//   }
// ]

class FormHouse extends React.Component {
  state = {
    ID: 666,
    NAME: '',
    LASTNAME: '',
    ADDRESS: '',
    TELNUMBER: '',
    PETSNUMBER: '',
    SMOKERSNUMBER: '',
    PAINTTYPE: '',
    REVOKEHOUSE: '',
    EMAIL: '',
    RESIDENTNUMBER: '',
    FLOORMATERIAL: '',
    FLOORNUMBER: '',
    WALLSMATERIAL: '',
    LATITUDE: '2',
    ALTITUDE: "12",
    DISPLAY: 1,
    HOUSECODE: 3,
    INSTALLER: "1",
    INSTALLDATE: "2018-11-04T00:00:00.000Z"
  }

  /**
   * Envia la petición HTTP con la información del formulario
   */
  sendForm = async (e) => {
    e.preventDefault();
    api.postHouse(this.state);
  }
  
  /**
   * Cambia el estade segun el evento que se ejecute
   * Param: 
   * name:String que indica el nombre del atributo 
   * del estado que se desea cambiar
   */
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
        <Paper className={classes.paper} elevation={10}>
          <form className={classes.form} autoComplete="off" method='POST' onSubmit={this.sendForm}>
            <ExpansionPanel className={classes.dense}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography className={classes.heading} variant='title'>Información de habitante</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                <TextField 
                    id='house-name'
                    name='NAME'
                    variant='outlined'
                    onChange={this.handleChange('NAME')}
                    label='Nombre'
                    required={true}
                    className={classes.textField}
                  />
                  <TextField 
                    id='house-lastname'
                    name='LASTNAME'
                    onChange={this.handleChange('LASTNAME')}
                    variant='outlined'
                    required={true}
                    label='Apellidos'
                    className={classes.textField}/>
                  <TextField 
                    id='house-email'
                    name='EMAIL'
                    label='Email'
                    onChange={this.handleChange('EMAIL')}
                    variant='outlined'
                    type='EMAIL'
                    required={true}
                    className={classes.textField}/>
                  <TextField 
                    id='house-telnumber'
                    name='TELNUMBER'
                    label='Telefono'
                    onChange={this.handleChange('TELNUMBER')}
                    required={true}
                    variant='outlined'
                    className={classes.textField}
                    type='number'
                  />
                  <TextField 
                    id='house-address'
                    name='ADDRESS'
                    variant='outlined'
                    onChange={this.handleChange('ADDRESS')}
                    label='Dirección'
                    required={true}
                    className={classes.textField}/>
                  <TextField 
                    id='houses-resident-number'
                    name='RESIDENTNUMBER'
                    onChange={this.handleChange('RESIDENTNUMBER')}
                    variant='outlined'
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
                  onChange={this.handleChange('FLOORNUMBER')}
                  required={true}
                  variant='outlined'
                  label='Numero de piso'
                  helperText={
                    <label className={classes.helperText}>Segun la altidud del piso en el edificio</label>
                  }
                  className={classes.textField}
                  type='number'/>
                {/* <TextField 
                  id='house-revoked'
                  name='REVOKEHOUSE'
                  variant='outlined'
                  label='Casa revocada'
                  fullWidth
                  select
                  className={classes.select}
                  value={this.state.REVOKEHOUSE}
                  onChange={this.handleChange('REVOKEHOUSE')}>
                  {revokedOptions.map(option => (
                    <option key={option.key} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField> */}
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel
                    htmlFor="house-revokehouse"
                  >
                    Casa revocada
                  </InputLabel>
                  <Select
                    native
                    value={this.state.REVOKEHOUSE}
                    onChange={this.handleChange('REVOKEHOUSE')}
                    input={
                      <OutlinedInput
                        name="REVOKEHOUSE"
                        labelWidth={200}
                        id="house-revokehouse"
                      />
                    }
                  >
                    <option value="" />
                    <option value={true}>SI</option>
                    <option value={false}>NO</option>
                  </Select>
                </FormControl>
                <TextField 
                  id='house-smokers'
                  variant='outlined'
                  onChange={this.handleChange('SMOKERSNUMBER')}
                  name='SMOKERSNUMBER'
                  label='Numero de fumadores'
                  helperText={
                    <label className={classes.helperText}>Si no hay fumadores ingrese 0</label>
                  }
                  type='number'
                  required={true}
                  className={classes.textField}/>
                <TextField
                  id='house-pet-number'
                  name='PETSNUMBER'
                  label='Numero de mascotas'
                  onChange={this.handleChange('PETSNUMBER')}
                  variant='outlined'
                  helperText={
                    <label className={classes.helperText}>Si no hay, ingrese 0</label>
                  }
                  required={true}
                  className={classes.textField}
                  type='number'/>
                <TextField 
                  id='house-floor-material'
                  variant='outlined'
                  name='FLOORMATERIAL'
                  onChange={this.handleChange('FLOORMATERIAL')}
                  label='Material del suelo'
                  className={classes.textField}
                  required={true}/>
                <TextField 
                  id='house-walls-material'
                  name='WALLSMATERIAL'
                  variant='outlined'
                  onChange={this.handleChange('WALLSMATERIAL')}
                  label='Material de las paredes'
                  className={classes.textField}
                  required={true}/>
                <TextField 
                  id='house-paint'
                  variant='outlined'
                  name='PAINTTYPE'
                  onChange={this.handleChange('PAINTTYPE')}
                  label='Tipo de pintura'
                  className={classes.textField}
                  required={true}/>
                 <Map position={2/** ALGO */}/>  
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <Button variant='contained' type='submit' className={classes.button}>Registrar</Button>
          </form>
        </Paper>
      </div>
    );
  }
}

FormHouse.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormHouse);