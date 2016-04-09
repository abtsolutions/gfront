import React from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';

const MAX_GRAPHS_DISPLAYED_OPTIONS = [
  { value: 0, label: '2' },
  { value: 1, label: '4' },
  { value: 3, label: '8' },
  { value: 4, label: '16' },
  { value: 5, label: '24' },
  { value: 6, label: '32' }
];

const WidgetGraphMaxPicker = ({ maxGraphsDisplayed, handleChange }) => {
  const handleGraphMaxGraphsDisplayedChange = (event, index, maxGraphsDisplayed) => {
    handleChange(maxGraphsDisplayed);
  };

  return <div className='WidgetGraphMaxPicker'>
    <span>Max graphs to show</span>
    <DropDownMenu className='DropDownMenu' value={maxGraphsDisplayed} onChange={handleGraphMaxGraphsDisplayedChange} autoWidth={true} menuStyle={{ width: 200 }}>
      {MAX_GRAPHS_DISPLAYED_OPTIONS.map(({ value, label }, index) => (
        <MenuItem key={index} value={value} primaryText={label}/>
      ))}
    </DropDownMenu>
  </div>;
};

export default WidgetGraphMaxPicker;
