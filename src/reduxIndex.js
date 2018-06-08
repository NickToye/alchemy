/* eslint-disable */

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './reduxComponents/App';

import PrismCode from './components/PrismCode';

const store = createStore(todoApp);
class ReduxIndex extends React.Component {
  render() {
    return (
      <div>
        <h1>Redux Todo List example</h1>
        <div className="u-margin-bottom-large">
          <div className="u-padding a-alchemy-colour1-bg u-margin-bottom">
            <h2 className="u-margin-bottom-none">Actions</h2>
            <p>
              <strong>Actions</strong> are payloads of information that send data from your application to
              your store. These are the <em>only</em> source of information for the store. You send them to
              the store using <code className="u-alchemy-positive-colour">store.dispatch()</code>.
            </p>

            <div className="u-margin-bottom">
              <h3>Step 1 - Adding Action Types</h3>
              <p>
                Actions are plain JavaScript objects. Actions must have a type property that indicates the
                type of action being performed. Types should typically be defined as string constants. Once
                your app is large enough, you may want to move them into a separate module.
              </p>
              <label className="a-code-label">actions.js</label>
              <pre className="u-alchemy-white-bg u-padding o-surface--l2">
                <PrismCode className="language-jsx">{`export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// Other constants

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
`}</PrismCode>
              </pre>
            </div>
          </div>
        </div>

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
