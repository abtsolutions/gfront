import React from 'react';
import SectionNavigationBar from './SectionNavigationBar';
import DisplayableLoader from '../containers/DisplayableLoader';

const LayoutMain = ({ children }) => (
  <div className='LayoutMain'>
    <SectionNavigationBar/>
    {children}
    <DisplayableLoader/>
  </div>
);

export default LayoutMain;
