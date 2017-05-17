
import React, { Component } from 'react';
import { connect } from 'react-redux';


class LibraryList extends Component {
    render() {
        console.log(this.props);
        return;
    }
}


const mapStateToProps = state => {
    // console.log(state);
    return { libraries: state.libraries };
};

// connect is called and it itself calls a function and we pass it LibraryList
export default connect(mapStateToProps)(LibraryList);
