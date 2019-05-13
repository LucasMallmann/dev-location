export const Types = {
  HIDE: 'form/HIDE',
  SHOW: 'form/SHOW',
};

/**
 * Actions
 */
export const Creators = {
  showModal: coordinates => ({
    type: Types.SHOW,
    payload: { coordinates },
  }),
  hideModal: () => ({
    type: Types.HIDE,
  }),
};

/**
 * Reducer
 */
const initialState = {
  visible: false,
  coordinates: null,
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SHOW:
      return {
        ...state,
        visible: true,
        coordinates: action.payload.coordinates,
      };
    case Types.HIDE:
      return {
        ...state,
        visible: false,
        coordinates: null,
      };
    default:
      return state;
  }
};

export default formReducer;
