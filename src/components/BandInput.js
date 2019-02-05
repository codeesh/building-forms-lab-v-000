import React, { Component } from 'react'
import{connect} from 'react-redux'

class BandInput extends Component {
  constructor(){
     super()
     this.state= {
       name:""
     }
   }

  handleChange=(event)=>{
    this.setState({
      name: event.target.value,
    });
  }

  handleSubmit=(event)=>{
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: '',
    });
  }

  render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label> Name:</label>
            <input type="text" value={this.state.name} onChange={this.handleChange} />
            <input type="submit" />
          </form>
        </div>
      );
    }
  };

  const mapDispatchToProps= dispatch =>({
     addBand: data=> dispatch({type: 'ADD_BAND', band: data})
  })


export default BandInput
