import { combineReducers } from 'redux'; // allows reducers to play nicely
import LibraryReducer from './LibraryReducer';


export default combineReducers({
    libraries: LibraryReducer // 1 to 1 - data to file
});

// store.getState();
// should return something like:
// [ { id: 1, title: "Webpack", description: "Webpack description "} ]
