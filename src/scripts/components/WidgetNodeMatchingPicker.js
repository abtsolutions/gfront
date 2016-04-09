import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

const WidgetNodeMatchingPicker = ({ nodeMatching, handleChange }) => {
  let inputValue = nodeMatching;

  const handleInputValueChange = (event, value) => {
    inputValue = value;
  };

  const handleNodeMatchingChange = () => {
    handleChange(inputValue);
  };

  return  <div className='WidgetNodeMatchingPicker'>
    <TextField className='TextField'
      hintText='Start typing nodes name'
      multiLine={true}
      defaultValue={inputValue}
      onChange={handleInputValueChange}
    />
    <RaisedButton className='FlatButton FlatButton_right'
      label='Filter'
      labelPosition='before'
      secondary={true}
      onClick={handleNodeMatchingChange}
    />
    <br/>
  </div>
};

export default WidgetNodeMatchingPicker;
