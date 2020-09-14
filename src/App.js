import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Login} from 'pages/Login'
import { LoginCallback } from './pages/LoginCallback';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Selector } from './pages/Selector';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Route path="/" component={Login} exact />
          <Route path="/login" component={LoginCallback} />
          <Route path="/selector" component={Selector} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
