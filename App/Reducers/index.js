import { combineReducers } from 'redux'; // allows reducers to play nicely
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';


export default combineReducers({
    libraries: LibraryReducer, // 1 to 1 - data to file
    selectedLibraryId: SelectionReducer
});

// store.getState();
// should return something like:
// [ { id: 1, title: "Webpack", description: "Webpack description "} ]
