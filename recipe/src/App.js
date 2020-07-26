import React, {useEffect, useState} from 'react';
import Recipe from './Recipe'
import './App.css';

const App = () =>{

  const APP_ID = 'f077f25a';
  const APP_KEY='660c5ad267fee3ba0159fe56ad5ae00d';

  const [recipes, setRecipes] = useState([]);

  useEffect( ()=>{
    getRecipes();
  },[]);

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data =  await response.json();
    setRecipes(data.hits);
  }

 

  return(
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar"></input>
          <button  className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe=>(
        <Recipe/>
      ))};
    </div>
  )
}

export default App;
