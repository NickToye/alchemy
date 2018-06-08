// Reducers :: Todos

const dateCreated = x => ({
  x,
});

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          dateCreated: dateCreated('fizz'),
        },
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));
    default:
      return state;
  }
};

export default todos;
