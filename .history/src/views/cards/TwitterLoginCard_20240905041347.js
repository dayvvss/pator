import React, { useState } from 'react';
import { Card, CardHeader, CardContent, Button, Typography } from '@mui/material';
import Twitter from 'mdi-material-ui/Twitter';
import api from 'src/config/api';

const TwitterLoginCard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTwitterLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get('/api/twitter/auth');
      window.location.href = response.data.authUrl;
    } catch (err) {
      setError('Failed to initiate Twitter login. Please try again.');
      console.error('Twitter login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
    style={{width:200}}
    >
      <CardHeader title="X/Twitter" />
      <CardContent>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Twitter />}
          onClick={handleTwitterLogin}
          disabled={loading}
        >
          {loading ? 'Connecting...' : 'Connect Twitter'}
        </Button>
        {error && (
          <Typography color="error" style={{ marginTop: '1rem' }}>
            {error}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default TwitterLoginCard;