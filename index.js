
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//redux
import {createStore} from 'redux';
import {Provide} from 'react-redux';
import allReducers from './reducers';
let store = createStore(allReducers);

const App = () => {
    <Provider store={store}>
    
    </Provider>
}
AppRegistry.registerComponent(appName, () => App);
