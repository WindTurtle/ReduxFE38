const burgerState = {
  burger: { cheese: 1, beef: 1, salad: 1 },
  // [{name:'salad',amount:1},{name:'cheese',amount:1},{name:'beef',amount:1}]
  menu: {
    salad: 10,
    cheese: 20,
    beef: 55,
  },
  total: 85,
};

const burgerReducer = (state = burgerState, action) => {
  switch (action.type) {
    case "ADD_TOPPING": {
      let { item, amount } = action;
      if (amount === -1 && state.burger[item] < 2) {
        alert("Có gì đó sai sai");
      } else {
        let burgerUpdate = { ...state.burger };
        burgerUpdate[item] += amount;
        state.burger = burgerUpdate;
        state.total += state.menu[item] * amount;
      }
      return { ...state };
    }
    default:
  }
  return { ...state };
};

export default burgerReducer;
