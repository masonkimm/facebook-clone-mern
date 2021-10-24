import React, { useContext, useEffect } from 'react';
import Post from '../Post/Post';
import { GlobalContext } from '../context/GlobalState';

export default function Posts({ users, pictures }) {
  const { posts, getPosts } = useContext(GlobalContext);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {posts.map((post) => (
        <Post
          users={users[0]}
          key={post._id}
          status={post.status}
          _id={post._id}
        />
      ))}
      {/* preset data */}
      <Post
        users={users[1]}
        pictures={pictures[1]}
        day={3}
        like={23}
        comment={3}
        share={2}
      />
      <Post
        users={users[2]}
        pictures={pictures[2]}
        day={2}
        like={46}
        comment={20}
        share={19}
      />
      <Post
        users={users[3]}
        pictures={pictures[3]}
        day={6}
        like={1}
        comment={1}
        share={2}
      />
    </>
  );
}
