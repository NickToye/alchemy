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

            <pre className="u-alchemy-white-bg u-padding o-surface--l2">
              <PrismCode className="language-jsx">const ADD_TODO = 'ADD_TODO'</PrismCode>
            </pre>
            <pre className="u-alchemy-white-bg u-padding o-surface--l2">
              <PrismCode className="language-jsx">
                {`{
  type: ADD_TODO,
  text: 'Build my first Redux app'
}`}
              </PrismCode>
            </pre>
            <pre className="u-alchemy-white-bg u-padding o-surface--l2">
              <PrismCode className="language-jsx">
                {`import { ADD_TODO, REMOVE_TODO } from '../actionTypes'`}
              </PrismCode>
            </pre>
            <p>
              Actions are simple JavaScript objects. They must have a{' '}
              <code className="u-alchemy-positive-colour">type</code> property that indicated the type of
              action being performed. Types should be defined as string constants. If your app becomes large
              you can move these into a separate module.
            </p>
            <h3>Action Creators</h3>
            <p>
              <strong>Action creators</strong> are functions that create actions.
            </p>
            <pre className="u-alchmey-white-bg u-padding o-surface--ls">
              <PrismCode className="language-jsx">
                {`
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}
`}
              </PrismCode>
            </pre>
            <p>To initiate the dispatch...</p>
            <pre className="u-alchemy-white-bg u-padding o-surface--l2">
              <PrismCode className="language-jsx">dispatch(addTodo(text))</PrismCode>
            </pre>
            <p>
              An alternative method is to use a <strong>bound action creator</strong> that automatically does
              the dispatching...
            </p>
            <pre className="u-alchemy-white-bg u-padding o-surface--l2">
              <PrismCode className="language-jsx">
                const boundAddTodo = text => dispatch(addTodo(text))
              </PrismCode>
            </pre>
            <p>And then call them directly...</p>
            <pre className="u-alchemy-white-bg u-padding o-surface--l2">
              <PrismCode className="language-jsx">boundAddTodo(text)</PrismCode>
            </pre>
            <p>
              The <code className="u-alchemy-positive-colour">dispatch()</code> function can be accessed
              directly from the store as <code className="u-alchemy-positive-colour">store.dispatch()</code>,
              but you will mostly use it in a helper like{' '}
              <code className="u-alchemy-positive-colour">connect()</code>, which is built into React Redux.
              You can therefore, use <code className="u-alchemy-positive-colour">bindActionCreators()</code>{' '}
              to automatically bind many actions creaters to a{' '}
              <code className="u-alchemy-positive-colour">dispatch()</code> function.
            </p>
          </div>
          <div className="u-padding a-alchemy-colour1-bg u-margin-bottom">
            <h2 className="u-margin-bottom-none">Reducers</h2>
            <p>
              <strong>Reducers</strong> specify how the applications state changes in response to{' '}
              <strong>actions</strong> sent to the store. Actions only describe <em>what happened</em>, they
              don't describe how the state changes.
            </p>
            <h3>Designing the State Shape</h3>
            <p>
              In Redux, all state's are stored as a single object, so its a good idea to consider the shape
              before you write any code. What is the minimal representation of your app's state as an object?
            </p>
            <ul className="u-margin-bottom">
              <li>The currently selected visibility filter</li>
              <li>The actual list of todo items</li>
            </ul>
            <p>When writing your reducer code, try and keep the data separate from the UI.</p>
            <pre className="u-alchemy-white-bg u-padding o-surface--l2">
              <PrismCode className="language-jsx">{`{
  visibilityFiler: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all the state in a single tree',
      completed: false,
    }
  ]
}`}</PrismCode>
            </pre>
            <h3>Handling Actions</h3>
            <p>
              The reducer is a pure function that takes the previous state and an action, and returns the next
              state.
            </p>
            <pre className="u-alchemy-white-bg u-padding o-surface--l2">
              <PrismCode className="language-jsx">(previousState, action) => newState</PrismCode>
            </pre>
            <p>
              It is called a reducer because it's the type of function you would pass to{' '}
              <code className="u-alchemy-positive-colour">
                Array.prototype.reduce(reducer, ?initialValue)
              </code>. The reducer needs to remain pure, there are things you should <strong>never</strong> do
              inside a reducer:
            </p>
            <ul className="u-margin-bottom">
              <li>Mutate its arguments</li>
              <li>Perform side effects like API calls and routing</li>
              <li>
                Call non-pure functions, e.g. <code className="u-alchemy-positive-colour">Date.now()</code> or{' '}
                <code className="u-alchemy-positive-colour">Math.random()</code>
              </li>
            </ul>
            <h3>Specifying initial state</h3>
            <p>Use the ES6 default arguments syntax:</p>
            <pre className="u-alchemy-white-bg u-padding o-surface--l2">
              <PrismCode className="language-jsx">{`
import { VisibilityFilters } from './actions'
​
const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

function todoApp(state = initialState, action) {
  return state
}`}</PrismCode>
            </pre>
            <p>So for now we are not handling any actions, simply returning state.</p>

            <p>
              Now we handle the <code className="u-alchemy-positive-colour">SET_VISIBILITY_FILTER</code>, and
              all we need to do is change <code className="u-alchemy-positive-colour">visibiltyFilter</code>{' '}
              on the state.
            </p>
            <pre className="u-alchemy-white-bg u-padding o-surface--l2">
              <PrismCode className="language-jsx">{`
function todoApp(state = initialstate, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    default:
      return state
  }
}`}</PrismCode>
            </pre>
            <p>Note:</p>
            <ol className="u-margin-bottom">
              <li>
                <strong>We don't mutate the</strong> <code class="u-alchemy-positive-colour">state</code>. We
                create a copy using <code class="u-alchemy-positive-colour">Object.assign()</code>, and you
                must always supply an empty object as the first parameter. You can also enable the{' '}
                <strong>object spread operator</strong> to write{' '}
                <code class="u-alchemy-positive-colour"> {`{...state, ...newState}`}</code> instead.
              </li>
              <li>
                <strong>
                  We return the previous <code class="u-alchemy-positive-colour"> state </code> in the{' '}
                  <code class="u-alchemy-positive-colour"> default </code> case.
                </strong>{' '}
                It is impotant to return the previous <code class="u-alchemy-positive-colour"> state </code>{' '}
                for any unknown action.
              </li>
            </ol>
            <h3>Handling More Actions</h3>
            <p>
              We have two more actions to handle. We need to import the{' '}
              <code className="u-alchemy-positive-colour">ADD_TODO</code> and{' '}
              <code className="u-alchemy-positive-colour">TOGGLE_TODO</code> actions, and then extend the
              reducer to handle <code className="u-alchemy-positive-colour">ADD_TODO</code>.
            </p>
            <pre className="u-alchemy-white-bg u-padding o-surface--l2">
              <PrismCode className="language-jsx">{`
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'

...

function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      })
    default:
      return state
  }
}`}</PrismCode>
            </pre>
            <p>
              So just like before we never write directly to{' '}
              <code className="u-alchemy-positive-colour">state</code> or its fields, and instead return new
              objects. The new <code className="u-alchemy-positive-colour">todos</code> is equal to the old{' '}
              <code className="u-alchemy-positive-colour">todos</code> concatenated with a single new item at
              the end. The fresh todo was constructed using the data from the action.
            </p>
            <p>
              <code className="u-alchemy-positive-colour">TOGGLE_TODO</code> handler:
            </p>
            <pre className="u-alchemy-white-bg u-padding o-surface--l2">
              <PrismCode className="language-jsx">{`
case TOGGLE_TODO:
  return Object.assign({}, state, {
    todos: state.todos.map((todo, index) => {
      if (index === action.index) {
        return Object.assign({}, todo, {
          completed: !todo.completed
        })
      }
      return todo
    })
  })`}</PrismCode>
            </pre>
            <p>
              So because we want to update a specific item in the array with mutating any, we have to create a
              new array with the same items except the item at the index.{' '}
            </p>
            <h3>Splitting Reducers</h3>
            <p>
              It seems we can split updated <code className="u-alchemy-positive-colour">todos</code> into a
              separate function:
            </p>
            <pre className="u-alchemy-white-bg u-padding o-surface--l2">
              <PrismCode className="language-jsx">{`
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (inex === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: todos(state.todos, action)
      })
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: todos(state.todos, action)
      })
    default:
      return state
  }
}`}</PrismCode>
            </pre>
            <p>
              Note that <code className="u-alchemy-positive-colour">todos</code> also accepts{' '}
              <code className="u-alchemy-positive-colour">state</code> but it is an array. Now{' '}
              <code className="u-alchemy-positive-colour">todoApp</code> just gives it the slice of state to
              manage, and <code className="u-alchemy-positive-colour">todos</code> knows how to update just
              that slice.{' '}
              <strong>
                This is called <em>reducer composition</em>, and it's the fundamental pattern in Redux.
              </strong>
            </p>
            <p>
              Can we also extra a reducer managing just{' '}
              <code className="u-alchemy-positive-colour">visibiltyFilter</code>?
            </p>
            <pre className="u-alchemy-white-bg u-padding o-surface--l2">
              <PrismCode className="language-jsx">{`const {SHOW_ALL} = VisibiltyFilters`}</PrismCode>
            </pre>
            <pre className="u-alchemy-white-bg u-padding o-surface--l2">
              <PrismCode className="language-jsx">{`
function visibiltyFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default
      return state
  }
}`}</PrismCode>
            </pre>
            <p>
              Now we can rewrite the main reducer as a function that calls the reducers managing parts of the
              state, and combines them into a single object. It also doesn't need to know the complete initial
              state anymore. It is enough that the child reducers return their initial state when given{' '}
              <code className="u-alchemy-positive-colour">undefined</code> at first.
            </p>
            <pre className="u-alchemy-white-bg u-padding o-surface--l2">
              <PrismCode className="language-jsx">{`
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}`}</PrismCode>
            </pre>
            <p>
              Finally we can take advantage of a utility called{' '}
              <code className="u-alchemy-positive-colour">combineReducers()</code> to rewrite{' '}
              <code className="u-alchemy-positive-colour">todoApp</code>:
            </p>
            <pre className="u-alchemy-white-bg u-padding o-surface--l2">
              <PrismCode className="language-jsx">{`
import { combineReducers } from 'redux'

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp`}</PrismCode>
            </pre>
            <p>
              All <code className="u-alchemy-positive-colour">combineReducers()</code> does is generate a
              function that calls your reducers with the slices of state selected according to their keys, and
              combining their results into a single object again. It's not magic. And like other reducers,{' '}
              <code className="u-alchemy-positive-colour">combineReducers()</code> does not create a new
              object if all of the reducers provided to it do not change state.
            </p>
          </div>
          <div className="u-padding a-alchemy-colour1-bg u-margin-bottom">
            <h2 className="u-margin-bottom-none">Store</h2>
            <p>
              The <strong>Store</strong> is the object that brings them together. The store has the following
              responsibilities:
            </p>
            <ul className="u-margin-bottom">
              <li>Holds application state</li>
              <li>
                Allows access to state via <code className="u-alchemy-positive-colour">getState()</code>
              </li>
              <li>
                Allows state to be updated via{' '}
                <code className="u-alchemy-positive-colour">dispatch(action)</code>
              </li>
              <li>
                Registers listeners via <code className="u-alchemy-positive-colour">subscribe(listener)</code>
              </li>
              <li>
                Handles unregistering of listeners via the function returned by{' '}
                <code className="u-alchemy-positive-colour">subscribe(listener)</code>
              </li>
            </ul>
            <p>
              You will only ever have a single store in a Redux app, if you need to split data handling logic,
              you will use <strong>reducer composition</strong> rather than many stores.
            </p>
            <p>
              It's quite simple to create a store if you already have a reducer. What was combined will now be
              imported and passed to <code className="u-alchemy-positive-colour">createStore()</code>.
            </p>
            <pre className="u-alchemy-white-bg u-padding o-surface--l2">
              <PrismCode className="language-jsx">{`
import { createStore } from 'redux'
import todoApp from './reducers'
const store = createStore(todoApp)`}</PrismCode>
            </pre>
            <p>
              You may also choose to specifiy the initial state as the second argument in{' '}
              <code className="u-alchemy-positive-colour">createStore()</code>. This is useful for hydrating
              the state of the client to match the state of a Redux application.
            </p>
            <pre className="u-alchemy-white-bg u-padding o-surface--l2">
              <PrismCode className="language-jsx">
                const store = createStore(todoApp, window.STATE_FROM_SERVER)
              </PrismCode>
            </pre>
          </div>
          <div className="u-padding a-alchemy-colour1-bg u-margin-bottom">
            <h2 className="u-margin-bottom-none">Data Flow</h2>
            <p>
              Redux architecture revolves around a <strong>strict unidirectional data flow</strong>
            </p>
            <p>
              This basically means all your application data follows the same lifecycle pattern, and therefore
              your logic is more predictable and easier to understand.
            </p>
            <ol className="o-list-ordered u-margin-bottom">
              <li>
                <strong>You call</strong>{' '}
                <code className="u-alchemy-positive-colour">store.dispatch(action)</code>
                <br />
                An <code className="u-alchemy-positive-colour">action</code> is a plain objet describing{' '}
                <em>what happened</em>.
                <pre className="u-alchemy-white-bg u-padding o-surface--l2">
                  <PrismCode className="language-jsx">{`
{ type: 'LIKE_ARTICE', articleID: 42}
{ type: 'FETCH_USER_SUCCESS', response: { id: 3, name: 'Tom' }}
{ type: 'ADD_TODO', text: 'Read the Redux docs.'}`}</PrismCode>
                </pre>
              </li>
              <li>
                <strong>The Redux store calls the reducer function you gave it</strong>
                <br />
                The <code className="u-alchemy-positive-colour">store</code> will pass two arguments to the{' '}
                <code className="u-alchemy-positive-colour">reducer</code>: the current state tree and the
                action. eg.
                <pre className="u-alchemy-white-bg u-padding o-surface--l2">
                  <PrismCode className="language-jsx">{`
// The current application state (list of todos and chosen filter)
let previousState = {
  visibileTodoFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Read the docs',
      complete: false
    }
  ]
}

// The action being performed (adding a todo)
let action = {
  type: 'ADD_TODO',
  text: 'Understand the flow.'
}

// Your reducer returns the next application state
let nextState = todoApp(previousState, action)`}</PrismCode>
                </pre>
                Note that a reducer is a pure function. It only computes the next state. It should be
                completely predictable: calling it with the same inputs many times should produce the same
                outputs. It shouldn't perform any side effects like API calls or router transitions. These
                should happen before an action is dispatched.
              </li>
              <li>
                <strong>
                  The root reducer may combine the output of multiple reducers into a single state tree.
                </strong>
                <br />
                How you structure the root reducer is up to you, but using{' '}
                <code className="u-alchemy-positive-colour">combineReducers()</code> is recommended.
                <pre className="u-alchemy-white-bg u-padding o-surface--l2">
                  <PrismCode className="language-jsx">{`
function todos(state = [], action) {
   // Somehow calculate it...
   return nextState
 }
​
 function visibleTodoFilter(state = 'SHOW_ALL', action) {
   // Somehow calculate it...
   return nextState
 }
​
 let todoApp = combineReducers({
   todos,
   visibleTodoFilter
 })`}</PrismCode>
                </pre>
                So when you emit an action, <code className="u-alchemy-positive-colour">todoApp</code>{' '}
                returned by <code className="u-alchemy-positive-colour">combineReducers</code> will call both
                reducers.
                <pre className="u-alchemy-white-bg u-padding o-surface--l2">
                  <PrismCode className="language-jsx">{`
let nextTodos = todos(state.todos, action)
let nextVisibleTodoFilter = visibleTodoFilter(state.visibleTodoFilter, action)
`}</PrismCode>
                </pre>
                Which then combines both sets of results into a single state tree:
                <pre className="u-alchemy-white-bg u-padding o-surface--l2">
                  <PrismCode className="language-jsx">{`
return {
  todos: nextTodos,
  visibleTodoFilter: nextVisibleTodoFilter
}
`}</PrismCode>
                </pre>
              </li>
              <li>
                <strong>The Redux store saves the complete state tree returned by the root reducer</strong>
                <br />
                This new tree is now the next state of your app. Every listener registered with{' '}
                <code className="u-alchemy-positive-colour">store.subscribe(listener)</code> will now be
                invoked. Listeners may call{' '}
                <code className="u-alchemy-positive-colour">store.getState()</code> to get the current state.<br />
                Now the UI can be updated to reflet the new state.
              </li>
            </ol>
          </div>
          <div className="u-padding a-alchemy-colour1-bg u-margin-bottom">
            <h2 className="u-margin-bottom-none">Usage</h2>
            <p>This is a UI hierarchy, not necessarily a Redux specific hierarchy.</p>
            <h3>Designing Presentational Components</h3>
            <ul class="u-margin-bottom">
              <li>
                TodoList - is a list showing visible todos.
                <ul>
                  <li>
                    todos: Array - is an array of todo items with{' '}
                    <code className="u-alchemy-positive-colour">{`{(id, text, completed)}`}</code> shape.
                  </li>
                  <li>onTodoClick(id: number) - is a callback to invoke when a todo is clicked.</li>
                </ul>
              </li>
              <li>
                Todo - is a single todo item.
                <ul>
                  <li>text: string - is the text to show</li>
                  <li>completed: boolean - is whether the todo should appear crossed out.</li>
                  <li>onClick() - is a callback to invoke when the todo is clicked.</li>
                </ul>
              </li>
              <li>
                Link - is a link with a callback
                <ul>
                  <li>onClick() - is a callback to invoke when the link is clicked.</li>
                </ul>
              </li>
              <li>Footer - is where we let the user change currently visible todos</li>
              <li>App - is the root component that renders everything else</li>
            </ul>
            <h3>Desiging Container Components</h3>
            <p>
              We will also need some container components to connect the presentational components to Redux.
              For example, the presentational <code className="u-alchemy-positive-colour">TodoList</code>{' '}
              component needs a container like{' '}
              <code className="u-alchemy-positive-colour">VisibleTodoList</code> that subscribes to the Redux
              store and knows how to apply the current visibility filter. To change the visibility filter, we
              will provide a <code className="u-alchemy-positive-colour">FilterLink</code> container component
              that renders a Link that dispatches an appropriate action on click:
            </p>
            <ul className="u-margin-bottom">
              <li>
                VisibleTodoList - filters the todos accoding to the current visibility filter and renders a{' '}
                <code className="u-alchemy-positive-colour">TodoList</code>.
              </li>
              <li>
                FilterLink - gets the current visibility and renders a{' '}
                <code className="u-alchemy-positive-colour">Link</code>.
                <ul>
                  <li>filter: string - is the visibility filter it represents</li>
                </ul>
              </li>
            </ul>
            <h3>Designing Other Components</h3>
            <p>
              Sometimes it's hard to tell if some component should be a presentational component or a
              container. For example, sometimes form and function are really coupled together, such as in the
              case of this tiny component:
            </p>
            <ul className="u-margin-bottom">
              <li>AddToDo - is an input field with an 'Add' button</li>
            </ul>
            <p>
              Technically we could split it into two components but it might be too early at this stage. It's
              fine to mix presentation and logic in a component that is very small. As it grows, it will be
              more obvious how to split it, so we'll leave it mixed.
            </p>
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
