import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue' 
                type='search' 
                placeholder='search robots' 
                onChange={searchChange}
                style={{outline: 'none', fontSize: '20px', borderRadius: '50px'}}
            />
        </div>
    );
}

export default SearchBox;