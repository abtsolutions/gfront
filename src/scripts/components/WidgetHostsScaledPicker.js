import React from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';

const HOSTS_SCALED_CHOICES = [
  { value: 0, label: 'Auto' },
  { value: 1, label: 'Same' },
  { value: 2, label: 'None' }
];


const WidgetHostsScaledPicker = ({ hostsScaled, handleChange }) => {
  const handleHostScaledChange = (event, index, hostsScaled) => {
    handleChange(hostsScaled);
  };

  return <div className='WidgetHostsScaledPicker'>
    <span>Show hosts scaled</span>
    <DropDownMenu className='DropDownMenu' value={hostsScaled} onChange={handleHostScaledChange} autoWidth={true} menuStyle={{ width: 200 }}>
      {HOSTS_SCALED_CHOICES.map(({ value, label }, index) => (
        <MenuItem key={index} value={value} primaryText={label} menuStyle={{ width: 200 }}/>
      ))}
    </DropDownMenu>
  </div>;
};

export default WidgetHostsScaledPicker;
