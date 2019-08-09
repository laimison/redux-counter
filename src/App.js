import { connect } from "react-redux";
import Counter from "./Counter";

// The main purpose of the code here is to turn all the Redux-specific hooks into something we can use in React.
// More specifically, we provide all those hooks as props taht our component can easily consume through two functions, called:
// - mapStateToProps
// - mapDispatchToProps

// Map Redux state to component props (Redux to React state)
// This function subscribes to all Store updates and gets called when anything in our Store changes.
function mapStateToProps(state) {
  console.log('App.js mapStateToProps: mapping Redux state <-> React component props');
  return {
    countValue: state.count
  }
}

// Action
// Giving our components access in the form of props to the:
// - action creators
// - actions
// This ensures that whatever component we want to provide all these props to
// has some way of receiving them
var increaseAction = { type: "increase" };
var decreaseAction = { type: "decrease" };

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  console.log('App.js mapDispatchToProps: mapping Redux actions <-> React component props');
  return {
    increaseCount: function() {
      return dispatch(increaseAction);
    },
    decreaseCount: function() {
      return dispatch(decreaseAction);
    }
  };
}

// The HOC - magical connect function
// It takes our functions as input:
// - mapStateToProps
// - mapDispatchToProps
// ... and passes all of that into the Counter component
var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
) (Counter);

export default connectedComponent;
