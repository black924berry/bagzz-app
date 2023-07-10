import * as React from 'react';
import {Provider} from 'react-redux';
import Routes from './app/routes';
import {store} from './app/redux/store';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
