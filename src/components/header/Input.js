import React, { useState} from 'react';

const Input = ({search}) => {
    const [searchInp,setSearchInp]=useState('')

    function inputValue (e) {
        setSearchInp(e.target.value)
    }

    const clickSearch = () => {
        search(searchInp)
        setSearchInp('')

    }
    const clickEnter = (e) => {
      if(e.key==='Enter'){
          clickSearch()
      }
    }

    return (
        <div className="search">
            <input type="text"
                   placeholder={'search movie...'}
                   onInput={inputValue}
                   onKeyDown={clickEnter}/>
            <button onClick={clickSearch} >search</button>

        </div>
    );
};

export default Input;
