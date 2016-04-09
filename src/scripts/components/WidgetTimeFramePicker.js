import _ from 'lodash';
import React from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import TimePicker from 'material-ui/lib/time-picker/time-picker';

const TIME_FRAME_TYPES_CHOICES = [
  { value: 0, label: 'Custom' },
  { value: 1, label: 'Last 1 hour' },
  { value: 2, label: 'Last 2 hours' },
  { value: 3, label: 'Last 4 hours' },
  { value: 4, label: 'Last Day' },
  { value: 5, label: 'Last Week' },
  { value: 6, label: 'Last Month' },
  { value: 7, label: 'Last Year' },
  { value: 8, label: 'Last Job' }
];

const getDefaultBounds = () => {
  const startTime = new Date();
  startTime.setDate(startTime.getDate() - 1);

  const endTime = new Date();

  return [startTime, endTime];
};

const WidgetTimeFramePicker = ({ type, bounds, handleChange }) => {
  const [startTime, endTime] = (_.isUndefined(bounds) ? getDefaultBounds() : bounds);

  const handleTypeChange = (event, index, type) => {
    if (type === 0) {
      handleChange(type, [startTime, endTime]);
    } else {
      handleChange(type, undefined);
    }
  };

  const handleStartTimeChange = (event, value) => {
    startTime.setHours(value.getHours());
    startTime.setMinutes(value.getMinutes());

    handleChange(type, [startTime, endTime]);
  };

  const handleEndTimeChange = (event, value) => {
    endTime.setHours(value.getHours());
    endTime.setMinutes(value.getMinutes());

    handleChange(type, [startTime, endTime]);
  };

  const handleStartDateChange = (event, value) => {
    startTime.setYear(value.getYear());
    startTime.setMonth(value.getMonth());
    startTime.setDate(value.getDate());

    handleChange(type, [startTime, endTime]);
  };

  const handleEndDateChange = (event, value) => {
    endTime.setYear(value.getYear());
    endTime.setMonth(value.getMonth());
    endTime.setDate(value.getDate());

    handleChange(type, [startTime, endTime]);
  };

  return <div className='WidgetTimeFramePicker'>
    <div className='WidgetTimeFramePicker_Type'>
      <span>Period</span>
      <DropDownMenu className="DropDownMenu" value={type} onChange={handleTypeChange} autoWidth={true} menuStyle={{ width: 200 }}>
        {TIME_FRAME_TYPES_CHOICES.map(({ value, label }, index) => (
          <MenuItem key={index} value={value} primaryText={label}/>
        ))}
      </DropDownMenu>
    </div>
    <div className='WidgetTimeFramePicker_Value' style={{ display: (type === 0 ? 'inline-block' : 'none') }}>
      <span>from</span>
      <DatePicker defaultDate={startTime} onChange={handleStartDateChange} hintText='Date'/>
      <TimePicker value={startTime} onChange={handleStartTimeChange} format='24hr' hintText='Time'/>
      <span>to</span>
      <DatePicker defaultDate={endTime} onChange={handleEndDateChange} hintText='Date'/>
      <TimePicker value={endTime} onChange={handleEndTimeChange} format='24hr' hintText='Time'/>
    </div>
  </div>;
};

export default WidgetTimeFramePicker;
