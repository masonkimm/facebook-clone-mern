// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case 'ADD_POST':
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case 'POSTS_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
