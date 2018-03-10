import React from 'react'

  class Location extends React.Component {


    render () {
      return(
        <div>
        <li>{this.props.city} - {this.props.state}</li>
        <button className="btn"> Edit </button>
        <button onClick= {() => this.props.deleteLocation(this.props.trip_id, this.props.id)} className="btn"> Delete </button>

        </div>
      )
    }
  }

export default Location;