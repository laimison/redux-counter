// Reducer is referenced by the counter variable

// counter function
function counter(state, action) {
  // Initialise 'count' variable as 0 if our state is empty
  if (state === undefined) {
    console.log('reducer.js: count variable initialised');
    return { count: 0 };
  }

  // Take current count from state?
  var count = state.count

  // This reducer deals with two action types: 'increase' and 'decrease'
  switch (action.type) {
    case "increase":
      console.log('reducer.js: count variable increased');
      return { count: count + 1 };
    case "decrease":
      console.log('reducer.js: count variable decreased');
      return { count: count - 1 };
    default:
      console.log('reducer.js: returning state');
      return state;
  }
}

export default counter;
