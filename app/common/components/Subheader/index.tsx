import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type SubheaderProps = {
  text: string,
}

/**
 * Subheader component
 */
function Subheader({ text }: SubheaderProps) {
  return (
    // got some lazy style options with box and MUI that are good for nudging some thing around
    <Box my={2} color="#777">
      <Typography component="h1" variant="h6" color="inherit">
        {text}
      </Typography>
    </Box>
  )
}

export default React.memo(Subheader);
