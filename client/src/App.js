import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { useState, useContext } from 'react';
import RightSideBar from './components/RightSideBar/RightSideBar';
import LeftSideBar from './components/LeftSideBar/LeftSideBar';
import Center from './components/Center/Center';
import {
  GlobalProvider,
  GlobalContext,
} from './components/context/GlobalState';

function App() {
  const [userData, setUserData] = useState([]);
  const { users } = useContext(GlobalContext);

  users.then((value) => {
    setUserData(value);
  });

  return (
    <GlobalProvider>
      <div className="App">
        <NavBar users={userData[0]} />
        <div className="App__body">
          <LeftSideBar users={userData[0]} />
          <Center users={userData.map((user) => user)} />
          <RightSideBar users={userData.map((user) => user)} />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </GlobalProvider>
  );
}

export default App;
