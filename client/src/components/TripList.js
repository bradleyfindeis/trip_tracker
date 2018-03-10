import React from 'react'
import Trip from './Trip'

const TripList = ({ trips, ...props }) => (
  <div className="row">
    { trips.map( trip =>
      <Trip
        key={trip.id}
        {...trip}
        // locations={locations}
        // updateTrip={updateTrip}
        // deleteTrip={deleteTrip}
        // showTrip={showTrip}
        // deleteLocation={this.deleteLocation}
        // updateLocation={this.updateLocation}
        // addLocation={this.addLocation}
        {...props}
      />
    )
    }
  </div>
)

export default TripList;