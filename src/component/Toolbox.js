import React from 'react';
import PropTypes from 'prop-types';

const Toolbox = ({toolbox, handleOnClick}) => (
  <div>
    {
      toolbox.map((item, index) => (
        <input value={ item.getName() }
               key={ index }
               data-key={ index } 
               type="button"
               onClick={ handleOnClick }
        />
      ))
    }
  </div>
);

Toolbox.propTypes = {
  toolbox : PropTypes.array.isRequired,
  handleOnClick : PropTypes.func.isRequired,
};

export default Toolbox;