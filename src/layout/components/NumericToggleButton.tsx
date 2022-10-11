import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Grid, Typography } from '@mui/material';

export interface NumericToggleButtonProps {
  id: string
  label: string,
  size: any,
}

export const NumericToggleButton = ({
  id,
  label,
  size
}: NumericToggleButtonProps) => {
  const [alignment, setAlignment] = React.useState('5+');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };
  
  return (
    <Grid container item xs={12} style={{ display: "flex"}}>
      <Typography paddingLeft={2} variant="caption">{label}</Typography>
      <ToggleButtonGroup
        id={id}
        size={size}
        color="primary"
        value={alignment}
        style={{ width: '100%' }}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="1" style={{ width: '100%' }}>1</ToggleButton>
        <ToggleButton value="2" style={{ width: '100%' }}>2</ToggleButton>
        <ToggleButton value="3" style={{ width: '100%' }}>3</ToggleButton>
        <ToggleButton value="4" style={{ width: '100%' }}>4</ToggleButton>
        <ToggleButton value="5+" style={{ width: '100%' }}>5+</ToggleButton>
      </ToggleButtonGroup>
    </Grid>
  );
};