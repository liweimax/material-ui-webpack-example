import React from 'react';
import ReactDOM from 'react-dom';
import SimpleTabs from './SimpleTabs';
import WelcomeList from './WelcomeList.jsx';

function App() {
  return (
    <div>
    <SimpleTabs />
    <WelcomeList />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
