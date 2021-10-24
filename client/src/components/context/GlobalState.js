import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const getUsers = async () => {
  const users = await axios
    .get('https://randomuser.me/api/?results=15')
    .then((res) => {
      return [...res.data.results];
    });
  return users;
};

const getPhotos = async () => {
  const photos = await axios
    .get(
      `https://api.unsplash.com/search/photos?query=random&client_id=${process.env.REACT_APP_API_KEY}`
    )
    .then((res) => {
      return [...res.data.results];
    });
  return photos;
};

const initialState = {
  users: getUsers(),
  photos: getPhotos(),
  posts: [
    // {
    //   id: 1,
    //   status: 'hello',
    //   day: 1,
    //   like: 2,
    //   comment: 3,
    //   share: 4,
    //   // photos: photoData,
    // },
  ],
  error: null,
  loading: true,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  // eslint-disable-next-line
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getPosts = async () => {
    try {
      const res = await axios.get('/api/v1/posts');

      dispatch({
        type: 'GET_POSTS',
        payload: res.data.data.reverse(),
      });
    } catch (err) {
      dispatch({
        type: 'ERROR_POSTS',
        payload: err.response.data.error,
      });
    }
  };

  const addPost = async (post) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/v1/posts', post, config);
      dispatch({
        type: 'ADD_POST',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'POSTS_ERROR',
        payload: err.response.data.error,
      });
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`/api/v1/posts/${id}`);
      dispatch({
        type: 'DELETE_POST',
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: 'POSTS_ERROR',
        payload: err.response.data.error,
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        posts: state.posts,
        users: state.users,
        photos: state.photos,
        error: state.error,
        loading: state.loading,
        addPost,
        deletePost,
        getPosts,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
