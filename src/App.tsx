import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Totalbalance from './components/Totalbalcne/TotalBalance'
import { GlobalProvider } from './Services/GlobalState'
import Income from './components/Income/Income'
import History from './components/History/History'
import Addnewtransaction from './components/addNewTransaction/NewTransaction'

const App = () =>{
  return (
    <div className="back">
      <GlobalProvider>
        <Header />
        <Totalbalance />
        <Income />
        <History />
        <Addnewtransaction />
      </GlobalProvider>
    </div>
  );
}

export default App;
