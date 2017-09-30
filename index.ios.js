import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store';
import {Provider} from 'react-redux';
import {loadPeople} from './actions/peopleActions';

const store = configureStore();
store.dispatch(loadPeople());//el dispatch ejecuta una action

const WithProvider = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

ReactDOM.render(<WithProvider />, document.getElementById('root'));
registerServiceWorker();


import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as objectActions from './actions/objectActions';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store';
import {Provider} from 'react-redux';
import {loadPeople} from './actions/peopleActions';

class Redux extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.people.map((p,i)=><li key={i}>){p.name}</li>)}</Text>
      </View>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return{
    people: state.people
  };
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators (objectActions, dispatch)
  };
}

AppRegistry.registerComponent('Redux', () => Redux);
export default connect(mapStateToProps, mapDispatchToProps)
