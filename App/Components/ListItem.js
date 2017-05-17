
import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './Common';
import styles from './Styles/ListItemStyles';


class ListItem extends Component {
    render() {
        return (
            // this.props.library is available from LibraryList renderRow()
            <CardSection>
                <Text style={styles.titleStyles}>
                    {this.props.library.title}
                </Text>
            </CardSection>
        );
    }
}


export default ListItem;
