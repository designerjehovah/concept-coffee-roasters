import React, { useReducer, useEffect } from 'react';
import PreferenceContext from './preferenceContext';
import preferenceReducer from './preferenceReducer';
import preferences from '../../pages/Subscribe/preferences/preferences';

import {
  TOGGLE_PREFERENCES,
  CUSTOMIZE_ORDER,
  FOLD_LAST_SELECTED_ITEM,
  LOAD_PREFERENCES,
  READY_TO_ORDER,
  CHOSEN_COFFEE_STYLE,
  CHOSEN_COFFEE_TYPE,
  CHOSEN_QUANTITY,
  CHOSEN_GRIND_OPTION,
  CHOSEN_DELIVERY_FREQUENCY,
  CONFIRM_ORDER,
} from '../types';

const PreferenceState = (props) => {
  const list = {
    preferences: [],
    colors: {
      DEFAULT_CARD_COLOR: 'bg-gray-smooth',
      SELECTED_CARD_COLOR: 'bg-green-650',
      DEFAULT_TEXT_COLOR: 'text-blue-dark',
      SELECTED_TEXT_COLOR: 'text-gray-light',
    },

    tailoredCustomerOrder: {
      coffeeStyle: '',
      coffeeType: '',
      quantity: '',
      grindOption: '',
      deliveryFrequency: '',
    },

    isReadyToOrder: false,
    orderConfirmed: false,
  };

  const [state, dispatch] = useReducer(preferenceReducer, list);

  useEffect(() => {
    dispatch({ type: LOAD_PREFERENCES, payload: preferences });
  }, []);

  function customizeOrder(next, current) {
    const customizedItems = state.preferences.map((item) => {
      if (item.id === next) {
        const updated = {
          ...item,
          isCollapsed: true,
          isArrowTilted: true,
          isActive: true,
        };

        return updated;
      }

      return item;
    });

    const toggleElementsAfterSelection = customizedItems.map((item) => {
      if (item.id === current) {
        const toggled = { ...item, isCollapsed: false, isArrowTilted: false };

        return toggled;
      }

      return item;
    });

    dispatch({ type: CUSTOMIZE_ORDER, payload: toggleElementsAfterSelection });
  }

  function foldAllElements() {
    const newList = preferences.map((item) => {
      return { ...item, isCollapsed: false, isArrowTilted: false, isActive: true };
    });

    dispatch({ type: FOLD_LAST_SELECTED_ITEM, payload: newList });
  }

  function togglePreference(reference) {
    const newList = state.preferences.map((preference) => {
      if (preference.id === reference) {
        const updated = {
          ...preference,
          isArrowTilted: !preference.isArrowTilted,
          isCollapsed: !preference.isCollapsed,
        };

        return updated;
      }
      return preference;
    });

    dispatch({ type: TOGGLE_PREFERENCES, payload: newList });
  }

  // define preference on event
  function selectPreference(elem, parent) {
    const {
      DEFAULT_CARD_COLOR,
      SELECTED_CARD_COLOR,
      DEFAULT_TEXT_COLOR,
      SELECTED_TEXT_COLOR,
    } = state.colors;

    // change card settings for selection
    if (elem.classList.contains(DEFAULT_CARD_COLOR)) {
      elem.classList.remove(DEFAULT_CARD_COLOR);
      elem.classList.add(SELECTED_CARD_COLOR);

      for (let i = 0; i < elem.children.length; i++) {
        elem.children[i].children[0].classList.add(SELECTED_TEXT_COLOR);
        elem.children[i].children[0].classList.remove(DEFAULT_TEXT_COLOR);
      }
    }

    // switch remaing cards to default
    typeof parent === 'object' &&
      Array.from(parent)
        .filter((child) => child !== elem)
        .map((elem) => {
          if (elem.classList.contains(SELECTED_CARD_COLOR))
            elem.classList.remove(SELECTED_CARD_COLOR);
          elem.classList.add(DEFAULT_CARD_COLOR);

          for (let i = 0; i < elem.children.length; i++) {
            elem.children[i].children[0].classList.remove(SELECTED_TEXT_COLOR);
            elem.children[i].children[0].classList.add(DEFAULT_TEXT_COLOR);
          }

          return elem;
        });
  }

  function chooseCoffeeStyle(element) {
    return dispatch({ type: CHOSEN_COFFEE_STYLE, payload: element });
  }

  function chooseCoffeeType(element) {
    return dispatch({ type: CHOSEN_COFFEE_TYPE, payload: element });
  }

  function chooseQuantity(element) {
    return dispatch({ type: CHOSEN_QUANTITY, payload: element });
  }

  function chooseGrindOption(element) {
    return dispatch({ type: CHOSEN_GRIND_OPTION, payload: element });
  }

  function chooseDeliveryFrequency(element) {
    return dispatch({ type: CHOSEN_DELIVERY_FREQUENCY, payload: element });
  }

  function orderSummary() {
    dispatch({ type: READY_TO_ORDER });
  }

  function confirmOrderSummary() {
    dispatch({ type: CONFIRM_ORDER });
  }

  return (
    <PreferenceContext.Provider
      value={{
        preferences: state.preferences,
        colors: state.colors,
        itemsToOrder: state.tailoredCustomerOrder,
        readyToOrder: state.isReadyToOrder,
        confirmOrder: state.orderConfirmed,
        customizeOrder,
        foldAllElements,
        togglePreference,
        selectPreference,
        chooseCoffeeStyle,
        chooseCoffeeType,
        chooseQuantity,
        chooseGrindOption,
        chooseDeliveryFrequency,
        orderSummary,
        confirmOrderSummary,
      }}>
      {props.children}
    </PreferenceContext.Provider>
  );
};

export default PreferenceState;
