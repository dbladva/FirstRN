import * as ActionType from '../ActionType'


export const fetchProduct = () => (dispatch) => {
    try {
      fetch('http://192.168.43.200:8000/products', {
        // fetch('http://56.114.182.49:8000/products', {
        method: 'GET',
      })
        .then(response => response.json())
        .then(data => {
          dispatch({type: ActionType.FETCH_DATA, payload: data})
        })
        .catch(error => {
          console.log("Error" + error);
        });
    } catch (e) {
      console.log('Catch');
    }
  };