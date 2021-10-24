import React from 'react';
import Story from '../Story/Story';

export default function Stories({ users, pictures }) {
  return (
    <>
      <Story users={users[0]} pictures={pictures[0]} />
      <Story users={users[1]} pictures={pictures[1]} />
      <Story users={users[2]} pictures={pictures[2]} />
      <Story users={users[3]} pictures={pictures[3]} />
      <Story users={users[4]} pictures={pictures[4]} />
      <Story users={users[5]} pictures={pictures[5]} />
      <Story users={users[6]} pictures={pictures[6]} />
      <Story users={users[7]} pictures={pictures[7]} />
      <Story users={users[8]} pictures={pictures[8]} />
      <Story users={users[9]} pictures={pictures[9]} />
    </>
  );
}
