
import React, { Component } from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation,
    Platform, UIManager // added so LayoutAnimation will work on Android
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './Common';
import styles from './Styles/ListItemStyles';
import * as actions from '../Actions';


class ListItem extends Component {
    // this lifecycle event is called whenever
    // the component is about to be rendered
    componentWillUpdate() {
        // needed to make animation work on android
        if (Platform.OS === 'android') { 
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }

        // as long as LayoutAnimation is called before
        // components updates are rendered
            // automatically animate any movement possible on any element
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <View style={styles.descriptionStyles}>
                        <Text style={{ flex: 1 }}>
                            {library.description}
                        </Text>
                    </View>
                </CardSection>
            );
        }
    }

    render() {
        const { id, title } = this.props.library;

        // console.log(this.props);
        return (
            // this.props.library is available from LibraryList renderRow()
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={styles.titleStyles}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}


// application is rerendered
const mapStateToProps = (state, ownProps) => {
    // refactored logic from renderDescription
    // as we only want to know if the library is expanded
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
};


export default connect(mapStateToProps, actions)(ListItem);
