import React, { useState } from 'react';

const Wiget =  ()=> {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
    

    const handleSubmit = () => {
        alert(`Input Value: ${inputValue}`);
      };
      return (
        <div>
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      );
    };

export default Wiget;