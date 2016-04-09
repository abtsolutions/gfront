import React from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';

const GRAPH_SIZE_OPTIONS = [
  { value: 0, label: 'small' },
  { value: 1, label: 'medium' },
  { value: 3, label: 'big' }
];

const WidgetGraphSizePicker = ({ graphSize, handleChange }) => {
  const handleSizeChange = (event, index, size) => {
    handleChange(size);
  };

  return <div className='WidgetGraphSizePicker'>
    <span>Size</span>
    <DropDownMenu className='DropDownMenu' value={graphSize} onChange={handleSizeChange} autoWidth={true} menuStyle={{ width: 200 }}>
      {GRAPH_SIZE_OPTIONS.map(({ value, label }, index) => (
        <MenuItem key={index} value={value} primaryText={label}/>
      ))}
    </DropDownMenu>
  </div>;
};

export default WidgetGraphSizePicker;
