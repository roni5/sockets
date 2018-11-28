// calling the connect wrapper and the function created in the actions section
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchData } from './actions';
import fetchdata from '../reducers/fetchdata';

class FetchData extends Component {

  componentDidMount() {
    // call default function to display redux operation
    this.props.fetchData();
  }

    render() {
        console.log(fetchData);
      const {fetchData} = this.props
    return (
        <div fetchdata={fetchData}>
            Where is the data
        {/* React Redux  {fetchData} */}
      </div>
    );
  }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return {
    default: state.default
  };
}

// wrapping the component within the connect HOC and calling the default function directly
export default connect(mapStateToProps, { fetchData })(FetchData);



