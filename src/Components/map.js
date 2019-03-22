import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

  

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    position: this.props.position
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked = (props, nose) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    } 
  };

  positionMoved = (mapProps, map, pos) => {
    this.setState({
        position: {
          lat: pos.latLng.lat(),
          lng: pos.latLng.lng()
        }
      })
    this.props.updatePositionFields(this.state.position);
  }

  render() {
    const { position } = this.state; 
    return (
      <Map google={this.props.google} 
        zoom={14}
        initialCenter={position}
        onClick = {this.onMapClicked}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Esta es tu casita <3 '} 
                position={position}
                draggable={true}
                onDragend={this.positionMoved}/> 
 
        <InfoWindow
                  marker={this.state.activeMarker}
                  visible={this.state.showingInfoWindow}>
                    <div>
                      <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: "AIzaSyBGsYTyBvpy_UOWl8VWJF27Yz8TD6iPWTU"
})(MapContainer)