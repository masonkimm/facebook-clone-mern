import React, { useEffect, useState } from 'react';
import './Center.css';

import axios from 'axios';
import Posts from '../Posts/Posts';
import Stories from '../Stories/Stories';
import StatusBar from '../StatusBar/StatusBar';

export default function Center({ users }) {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://api.unsplash.com/search/photos?query=random&client_id=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
          const newData = [...res.data.results];
          setPictures(newData);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="Center">
      <div className="Center__stories">
        <Stories users={users} pictures={pictures} />
      </div>

      <div className="Center__status">
        <StatusBar users={users} />
      </div>

      <div className="Center__post">
        <Posts users={users} pictures={pictures} />
      </div>
    </div>
  );
}
