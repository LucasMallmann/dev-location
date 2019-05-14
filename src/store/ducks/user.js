export const Types = {
  ADD_REQUEST: 'user/ADD_REQUEST',
  ADD_SUCCESS: 'user/ADD_SUCCESS',
  ADD_FAILURE: 'user/ADD_FAILURE',
  RESET_QUERY: 'user/RESET_QUERY',
  DELETE_USER: 'user/DELETE_USER',
};

/** Actions */
export const Creators = {
  addRequest: (user, coordinates) => ({
    type: Types.ADD_REQUEST,
    payload: { user, coordinates },
  }),
  addSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),
  addFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
  resetQuery: () => ({
    type: Types.RESET_QUERY,
  }),
  deleteUser: id => ({
    type: Types.DELETE_USER,
    payload: { id },
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
        error: null,
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case Types.RESET_QUERY:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case Types.DELETE_USER:
      return {
        ...state,
        data: state.data.filter(user => user.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default userReducer;
