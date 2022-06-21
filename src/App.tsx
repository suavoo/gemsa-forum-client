import React from 'react';
import './App.css';
import LeftMenu from './components/LeftMenu';
import Main from './components/Main';
import Nav from './components/Nav';
import RightMenu from './components/RightMenu';
import SideBar from './components/sidebar/SideBar';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Nav />
        <SideBar />
        <LeftMenu />
        <Main />
        <RightMenu />
      </ErrorBoundary>
    </div>
  );
}

export default App;
