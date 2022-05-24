import * as ActionType from '../ActionType';

const initValue = {
  isLoading: false,
  product: [],
  error: '',
};

export const productReducer = (state = initValue, action) => {
  switch (action.type) {
    case ActionType.FETCH_DATA:
      return{
          ...state,
          product: action.payload,
          isLoading: false,
          error: ''                
      }
    default:
      return state;
  }
};
