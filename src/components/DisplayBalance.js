import React from 'react';
import { Statistic } from 'semantic-ui-react';

function DisplayBalance({
  label,
  value,
  size='small',
  color='black',
  labelAlign='left',
  valueAlign='left'}) {
    return (
        <Statistic size={size} color={color}>
        <Statistic.Label style={{textAlign: {labelAlign}}}>
          {label}
        </Statistic.Label>
        <Statistic.Value style={{textAlign: {valueAlign}}}>
          {value}
        </Statistic.Value>
      </Statistic>
    )
}

export default DisplayBalance