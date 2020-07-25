import React, {useEffect, useState} from 'react';

import './App.css';

const App = () =>{

  const APP_ID = 'f077f25a';
  const APP_KEY='660c5ad267fee3ba0159fe56ad5ae00d';

  const EXAMPLE_REQUEST=`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return(
    <div className="app">
      <form className="search-form">
        <input type="text" className="search-bar"></input>
          <button className="search-button" type="submit">Search</button>
        
      </form>
    </div>
  )
}

export default App;
