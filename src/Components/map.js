import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component{
    defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };

    /**
     * Get position from props
     * Render maps component according that position latitude and longitude
     */
    render(){
        const { position } = this.props
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBGsYTyBvpy_UOWl8VWJF27Yz8TD6iPWTU"}}
                defaultCenter={this.defaultProps.center}
                defaultZoom={this.defaultProps.zoom}
              >
                <h1>
                    lat {2}
                    lng {1}
                </h1>
              </GoogleMapReact>
            </div>
          );
        }
    
}

export default Map;