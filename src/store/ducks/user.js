export const Types = {
  ADD_REQUEST: 'user/ADD_REQUEST',
  ADD_SUCCESS: 'user/ADD_SUCCESS',
  ADD_FAILURE: 'user/ADD_FAILURE',
};

/** Actions */
export const Creators = {
  addRequest: user => ({
    type: Types.ADD_REQUEST,
    payload: { user },
  }),
  addSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),
  addFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
};

/**
 * Reducer
 */
const initialState = {
  data: [],
  error: null,
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload.data],
        loading: false,
        error: false,
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
