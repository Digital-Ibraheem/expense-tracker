import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { History } from './components/History';
import { NewTransaction } from './components/NewTransaction';

function App() {
  return (
    <>
      <div style={{ backgroundColor: '#DDD', height: '100%', width: '100%', marginTop: '-23.5px', position: 'fixed' }}>
      </div>
      <div className='mx-auto col-xs-4 col-sm-7 col-md-7 col-lg-5'>
        <Header />
        <Balance />
        <IncomeExpense />
        <History />
        <NewTransaction />
      </div>
    </>
  );
}

export default App;
