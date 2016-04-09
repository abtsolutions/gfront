import React from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';

const METRIC_CHOICES = [
  { value: 0, label: 'CPU report' },
  { value: 1, label: 'Report 2' },
  { value: 2, label: 'Report 3' },
  { value: 3, label: 'Report 4' }
];

const WidgetMetricPicker = ({ metric, handleChange }) => {
  const handleMetricChange = (event, index, metric) => {
    handleChange(metric);
  };

  return <div className='WidgetMetricPicker'>
    <span>Metric</span>
    <DropDownMenu className='DropDownMenu' value={metric} onChange={handleMetricChange} autoWidth={true} menuStyle={{ width: 200 }}>
      {METRIC_CHOICES.map(({ value, label }, index) => (
        <MenuItem key={index} value={value} primaryText={label}/>
      ))}
    </DropDownMenu>
  </div>;
};

export default WidgetMetricPicker;
