import React from 'react';
import Table from 'material-ui/lib/table/table';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import Icon from 'react-fa';

const Stats = ({ stats }) => (
  <div className='Stats'>
    <span>Server Load Stats</span>
    <Table>
      <TableBody displayRowCheckbox={false} showRowHover={true}>
        <TableRow>
          <TableRowColumn>
            <i className='IconWrapper'>
              <Icon className='Icon' desktop name='desktop' />
            </i>
            CPUs Total
          </TableRowColumn>
          <TableRowColumn>{stats.cpu}</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>
            <i className='IconWrapper'>
              <Icon className='Icon' database name='database' />
              <Icon className='Icon' level-up name='level-up' />
            </i>
            Hosts up
          </TableRowColumn>
          <TableRowColumn>{stats.hostsUp}</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>
            <i className='IconWrapper'>
              <Icon className='Icon' database name='database' />
              <Icon className='Icon' level-down name='level-down' />
            </i>
            Hosts down
          </TableRowColumn>
          <TableRowColumn>{stats.hostsDown}</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>
            <i className='IconWrapper'>
              <Icon className='Icon' tasks name='tasks' />
            </i>
            Current Load Avg (15, 5, 1m)
          </TableRowColumn>
          <TableRowColumn>{stats.currentLoadAvg}</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>
            <i className='IconWrapper'>
              <Icon className='Icon' spin name='spinner' />
            </i>
            Avg Utilization (last custom)
          </TableRowColumn>
          <TableRowColumn>{stats.utilizationAvg}</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>
            <i className='IconWrapper'>
              <Icon className='Icon' clock-o name='clock-o' />
            </i>
            Local Time
          </TableRowColumn>
          <TableRowColumn>{stats.localTime}</TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

export default Stats;
