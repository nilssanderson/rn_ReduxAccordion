
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';


class LibraryList extends Component {
    componentWillMount() {
        // this is standard and can copy and paste from here
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
        // to here (but changeing the - this.props.libraries)
    }

    // can pass in an arguement for an individual item from the list
    renderRow(library) {
        return <ListItem library={library} />;
    }

    render() {
        // console.log(this.props);
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}


const mapStateToProps = state => {
    // console.log(state);
    return { libraries: state.libraries };
};

// connect is called and it itself calls a function and we pass it LibraryList
export default connect(mapStateToProps)(LibraryList);
