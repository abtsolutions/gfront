import React from 'react';
import RadioGroup from 'react-radio-group';
import Radio from 'react-radio-group';

const SORT_OPTIONS = [
  { value: 0, label: 'ascending' },
  { value: 1, label: 'descending' },
  { value: 2, label: 'by name'}
];

const WidgetGraphSortPicker = ({ sort, handleChange }) => {
  const handleGraphSortChange = (event, index, sort) => {
    handleChange(sort);
  };

  return <div className='WidgetGraphSortPicker'>
    <span>Sort graphs</span>
    <RadioGroup
      name=''
      selectedValue={sort}
      onChange={handleGraphSortChange}
    >
      {SORT_OPTIONS.map(({ value, label }, index) => (
        <label>
          <Radio key={index} value={value}/>
        </label>
      ))}
    </RadioGroup>
  </div>;
};

export default WidgetGraphSortPicker;
