import React,{Component} from 'react';
import
{
  AppRegistry,
  View,
  Text,
}from 'react-native';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import App from './containers/App';
import Login from './containers/login';


const createStoreWithMW = applyMiddleware(thunk)(createStore)
const store = createStoreWithMW(reducers)

export default class Root extends Component
{

  render()
  {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}
