import React from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';

const GRAPH_COLUMNS = [
  { value: 0, label: '2' },
  { value: 1, label: '4' },
  { value: 3, label: '8' },
  { value: 4, label: '16' },
  { value: 5, label: '24' },
  { value: 6, label: '32' }
];

const WidgetGraphColumnPicker = ({ column, handleChange }) => {
  const handleColChange = (event, index, col) => {
    handleChange(col);
  };

  return <div className='WidgetGraphColumnPicker'>
    <span>Columns</span>
    <DropDownMenu className='DropDownMenu' value={column} onChange={handleColChange} autoWidth={true} menuStyle={{ width: 200 }}>
      {GRAPH_COLUMNS.map(({ value, label }, index) => (
        <MenuItem key={index} value={value} primaryText={label}/>
      ))}
    </DropDownMenu>
  </div>;
};

export default WidgetGraphColumnPicker;
