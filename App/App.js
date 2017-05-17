import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux'; // what makes redux work with react
import { createStore } from 'redux'; // standalone library
import reducers from './Reducers';


const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View />
        </Provider>
    );
};


export default App;
