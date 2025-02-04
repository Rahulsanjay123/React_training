import React from 'react';
import './button.css';

function Button({ text, updateText }) {
  return (
    <div>
      <button onClick={updateText} className='button'>
        {text}
      </button>
    </div>
  );
}

export default Button;
