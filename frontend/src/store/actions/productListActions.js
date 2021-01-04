import axios from 'axios';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED';

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PRODUCTS });

    const { data } = await axios.get('/api/products');

    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data });
  } catch(error) {
    dispatch({
      type: FETCH_PRODUCTS_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.reponse.data.message
          : error.message,
    });
  }
};
