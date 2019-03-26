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
    margin: '2em',
    borderRadius: 5,
    paddingTop: 15,
    width: '80%',
  },
  form: {
    display: 'flexbox',
    margin: '10px',    
  },
  textField: {
    margin: theme.spacing.unit,
    borderRadius: 5,
    backgroundColor: '#fff',
    border: '8px solid #fff'
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
    backgroundColor: '#424242',
    borderRadius: 15,
  },
  tittle : {
    flexWrap: 'wrap',
    color: '#000',  
    width: '50%',
    padding: '0.1em',
    fontFamily: "'Righteous', cursive",
    textOverflow: 'ellipsis'
  },
  dense: {
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: '#000a12'
  },
  details: {
    display: 'block'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 170,
    borderRadius: 5,
    backgroundColor: '#fff',
    border: '8px solid #fff'
  },
  button: {
    border: '1.5px solid #00e5ff',
    borderRadius: 5,
    marginTop:20,
    marginBottom: 10,
    color: '#00e5ff'
  },
  helperText: {
    color: '#424242',
    fontStyle: 'italic',
    fontSize: '1.3em'
  },
  heading: {
    color: '#00e5ff'
  },
  expandIcon: {
    color: '#00e5ff'
  }
});


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
    LATITUDE: '',
    LONGITUDE: '',
    ALTITUDE: '',
    DISPLAY: 1,
    HOUSECODE: 3,
    INSTALLER: "1",
    INSTALLDATE: "2018-11-04T00:00:00.000Z"
  }

  componentDidMount(){
    this.setLocation();
  }

  /**
   * Envia la petición HTTP con la información del formulario
   */
  sendForm = async (e) => {
    e.preventDefault();
    api.postHouse(this.state);
  }

  /**
   * Obtine la ubicación del dispositivo
   */
  setLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(ubication =>{
        this.setState({
          LONGITUDE:ubication.coords.longitude,
          LATITUDE: ubication.coords.latitude,
          ALTITUDE: ubication.coords.altitude
        });        
      });
    } else {
      alert('Debes activar la ubicación para registrarte')
    }
  }

  getLocation = () => {
    return {
      lat: this.state.LATITUDE,
      lng: this.state.LONGITUDE
    }
  }
  
  /**
   * Muestra los valores de latitud y longitud cuando se actualizan
   */
  updatePositionFields = (position) => {
    this.setState({
      LONGITUDE:position.lat,
      LATITUDE: position.lng,
    });  
    console.log(position)
    // return currentPosition
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
        <Typography className={classes.tittle} variant='h2' align='left'>Registro de Vivienda...</Typography>
        <Paper className={classes.paper} elevation={8}>
          <form className={classes.form} autoComplete="off" method='POST' onSubmit={this.sendForm}>
            <ExpansionPanel className={classes.dense}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.expandIcon}/>}>
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
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.expandIcon}/>}>
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
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <Button variant='outlined' size='large' type='submit' className={classes.button}>Registrar</Button>
          </form>
        </Paper>
        <div>
            <Typography className={classes.tittle} variant='h2' align={'left'} gutterBottom>Tu ubicación...</Typography>
            <TextField
              id="house-latitude"
              label="Latitud"
              defaultValue={this.state.LATITUDE}
              className={classes.textField}
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="house-longitude"
              label="Longitud"
              defaultValue={this.state.LONGITUDE}
              className={classes.textField}
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
            />
            <Map
            position={ this.getLocation() }
            updatePositionFields = { this.updatePositionFields }/>         
          </div>
      </div>
    );
  }
}

FormHouse.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormHouse);