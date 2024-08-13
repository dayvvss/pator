import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  FormGroup, 
  FormControlLabel, 
  Switch 
} from '@mui/material';

const SocialNetworkSelector = () => {
  return (
    <Box 
      sx={{ 
        border: 1, 
        borderColor: 'grey.300', 
        borderRadius: 1, 
        p: 3,
        mt:6,
        width: '100%', 
        
        // margin: 'auto'

      }}
    >
      <Typography variant="body1" gutterBottom>
        Choose social network to send your post to
      </Typography>
      <Grid container spacing={12}>
        <Grid item xs={12} md={6}>
          <FormGroup>
            <FormControlLabel 
              control={<Switch />} 
              label="Facebook Page" 
            />
            <FormControlLabel 
              control={<Switch />} 
              label="LinkedIn" 
            />
          </FormGroup>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormGroup>
            <FormControlLabel 
              control={<Switch />} 
              label="TikTok" 
              disabled
            />
            <FormControlLabel 
              control={<Switch />} 
              label="Instagram" 
            />
          </FormGroup>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormGroup>
            <FormControlLabel 
              control={<Switch />} 
              label="Youtube" 
            />
            <FormControlLabel 
              control={<Switch />} 
              label="X/Twitter" 
              disabled
            />
          </FormGroup>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SocialNetworkSelector;