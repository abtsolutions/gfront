import React from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';

const NODES_CHOICES = [
  { value: 0, label: 'Node 1' },
  { value: 1, label: 'Node 2' },
  { value: 2, label: 'Node 3' },
  { value: 3, label: 'Node 4' }
];

const WidgetNodePicker = ({ node, handleChange }) => {
  const handleNodeChange = (event, index, node) => {
    handleChange(node);
  };

  return <div className='WidgetNodePicker'>
    <span>Node</span>
    <DropDownMenu className='DropDownMenu' value={node} onChange={handleNodeChange} autoWidth={true} menuStyle={{ width: 200 }}>
      {NODES_CHOICES.map(({ value, label }, index) => (
        <MenuItem key={index} value={value} primaryText={label}/>
      ))}
    </DropDownMenu>
  </div>;
};

export default WidgetNodePicker;
