import {
  LOAD_PREFERENCES,
  TOGGLE_PREFERENCES,
  CUSTOMIZE_ORDER,
  FOLD_LAST_SELECTED_ITEM,
  READY_TO_ORDER,
  CHOSEN_COFFEE_STYLE,
  CHOSEN_COFFEE_TYPE,
  CHOSEN_QUANTITY,
  CHOSEN_GRIND_OPTION,
  CHOSEN_DELIVERY_FREQUENCY,
  CONFIRM_ORDER,
} from '../types';

const preferenceReducer = (state, action) => {
  switch (action.type) {
    case LOAD_PREFERENCES:
      return { ...state, preferences: action.payload };

    case TOGGLE_PREFERENCES:
      return { ...state, preferences: action.payload };

    case CUSTOMIZE_ORDER:
      return { ...state, preferences: action.payload };

    case FOLD_LAST_SELECTED_ITEM:
      return { ...state, preferences: action.payload };

    case CHOSEN_COFFEE_STYLE:
      return {
        ...state,
        tailoredCustomerOrder: {
          ...state.tailoredCustomerOrder,
          coffeeStyle: action.payload,
        },
      };

    case CHOSEN_COFFEE_TYPE:
      return {
        ...state,
        tailoredCustomerOrder: {
          ...state.tailoredCustomerOrder,
          coffeeType: action.payload,
        },
      };

    case CHOSEN_QUANTITY:
      return {
        ...state,
        tailoredCustomerOrder: {
          ...state.tailoredCustomerOrder,
          quantity: action.payload,
        },
      };

    case CHOSEN_GRIND_OPTION:
      return {
        ...state,
        tailoredCustomerOrder: {
          ...state.tailoredCustomerOrder,
          grindOption: action.payload,
        },
      };

    case CHOSEN_DELIVERY_FREQUENCY: {
      return {
        ...state,
        tailoredCustomerOrder: {
          ...state.tailoredCustomerOrder,
          deliveryFrequency: action.payload,
        },
      };
    }

    case READY_TO_ORDER:
      return { ...state, isReadyToOrder: true };

    case CONFIRM_ORDER:
      return { ...state, orderConfirmed: true };

    default:
      throw new Error();
  }
};

export default preferenceReducer;
