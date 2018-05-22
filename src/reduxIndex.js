import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './reduxComponents/App';
const store = createStore(todoApp);
class ReduxIndex extends React.Component {
  render() {
    return (
      <div>
        <h1>Redux Examples</h1>

        <div>
          <Provider store={store}>
            <App />
          </Provider>
        </div>
      </div>
    );
  }
}

export default ReduxIndex;
