import React, { useContext, useState, useEffect } from 'react';
import Post from '../Post/Post';
import { GlobalContext } from '../context/GlobalState';

export default function Posts({ users, pictures }) {
  const { posts, photos, getPosts } = useContext(GlobalContext);

  console.log(posts);

  // const [photoData, setPhotoData] = useState('');

  // photos.then(async (value) => {
  //   setPhotoData(value);
  // });
  // console.log(photoData);
  // const newData = photoData.Map((photo) => photo);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <Post
          users={users[0]}
          key={post._id}
          // day={post.day}
          // like={post.like}
          // comment={post.comment}
          // share={post.share}
          status={post.status}
          _id={post._id}
          // photos={}
        />
      ))}
      {/* <Post
        users={users[0]}
        pictures={pictures[0]}
        day={1}
        like={1}
        comment={1}
        share={1}
        // id={}
      /> */}
      <Post
        users={users[1]}
        pictures={pictures[1]}
        day={3}
        like={23}
        comment={3}
        share={2}
        // id={3}
      />
      <Post
        users={users[2]}
        pictures={pictures[2]}
        day={2}
        like={46}
        comment={20}
        share={19}
        // id={4}
      />
      <Post
        users={users[3]}
        pictures={pictures[3]}
        day={6}
        like={1}
        comment={1}
        share={2}
        // id={5}
      />
    </>
  );
}
