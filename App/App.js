
import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux'; // what makes redux work with react
import { createStore } from 'redux'; // standalone library
import reducers from './Reducers';
import { Header } from './Components/Common';
import LibraryList from './Components/LibraryList';


const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View>
                <Header headerText={'Accordion List'} />
                <LibraryList />
            </View>
        </Provider>
    );
};


export default App;
