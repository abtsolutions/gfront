import React from 'react';

const Loader = ({ isDisplayed }) => (
  <div style={{ display: (isDisplayed ? 'block' : 'none') }}>
    loading...
  </div>
);

export default Loader;
