import React from 'react';
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Button from '@mui/material/Button';
import { Stack } from '@mui/material'; // Optional: For layout spacing

const TestPage = () => {
  return (
    <div>
      <h1>Test Page</h1>
      <p>If you can see this, the page is working correctly.</p>
      
      {/* Using Stack for consistent spacing between buttons */}
      <Stack direction="row" spacing={2}>
        {/* Styled Login Button without Shadow */}
        <Button
          variant="contained"
          disableElevation
          sx={{ mr: 2 }}
        >
          <LoginLink style={{ color: '#fff', textDecoration: 'none' }}>
            Sign in
          </LoginLink>
        </Button>

        {/* Styled Register Button with White Background, Border, and no Shadow */}
        <Button
          variant="contained"
          disableElevation
          sx={{
            backgroundColor: 'white',
            border: '1px solid',
            borderColor: 'grey.500',
            color: 'black',
            '&:hover': {
              backgroundColor: 'white',
              borderColor: 'grey.600',
            
            }
          }}
        >
          <RegisterLink style={{ color: '#000', textDecoration: 'none' }}>
            Sign up
          </RegisterLink>
        </Button>
      </Stack>
    </div>
  );
};

export default TestPage;