import React from 'react';
import './App.css';

import Tabs from './components/tabs';

function App() {
  return (
    <div className="App">
      <Tabs tabNames={['Tab 1', 'Tab 2', 'Tab 3']} tabContents={['Tab 1 Content is showing here.', 'Tab 2 Content is showing here.', 'Tab 3 Content is showing here.']} />
    </div>
  );
}

export default App;