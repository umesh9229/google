import React, { useState } from 'react'
import './Search.css'
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { actionTypes } from "./reducer";



function Search({ hideButtons = false}) {
  const [{},dispach] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = e => {
    e.preventDefault();

    console.log('you hit the search button',input);

    dispach({
      type: actionTypes.SET_SEARCH_TERM,
      term: input

    })

    history.push('/search');

  };
  return (
    <form className='search'>
        <div className='search__input'>
            <SearchIcon className='search__inputIcon'/>
            <input value={input} onChange= {e => setInput(e.target.value)}/>

            <MicIcon className='micIcon'/>



        </div>
        { !hideButtons ? (
          <div className='search__buttons'>
          <Button type='submit' onClick={search} variant ="outlined">
            Google Search
          </Button>
          <Button variant ="outlined">i am Feeling Lucky</Button>


        </div>


        ):(
          <div className='search__buttons'>
          <Button className='search__buttonsHidden' type='submit' onClick={search} variant ="outlined">
            Google Search
          </Button>
          


        </div>


        )}
      
        


    </form>
  );
}

export default Search