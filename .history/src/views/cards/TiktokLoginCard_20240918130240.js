import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, Button, Typography } from '@mui/material';
import Tiktok from 'public/images/logos/tiktok-512.webp'; // Ensure you have the appropriate TikTok icon
import api from 'src/config/api';
import axios from 'axios';

const TiktokLoginCard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check for OAuth callback
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');

    if (code) {
      handleOAuthCallback(code, state);
    }
  }, []);

  const handleTiktokLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('/api/tiktok/request-token');
      window.location.href = response.data.authorizationUrl;
    } catch (err) {
      setError('Failed to initiate TikTok login. Please try again.');
      console.error('TikTok login error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleOAuthCallback = async (code, state) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/api/tiktok/access-token', { code, state });

      // Handle successful login (e.g., update UI, store user info)
      console.log('TikTok access token:', response.data);
    } catch (err) {
      setError('Failed to complete TikTok login. Please try again.');
      console.error('TikTok OAuth callback error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card style={{ width: 250 }}>
      <CardHeader title="TikTok" />
      <CardContent>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Tiktok />}
          onClick={handleTiktokLogin}
          disabled={loading}
        >
          {loading ? 'Connecting...' : 'Connect TikTok'}
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

export default TiktokLoginCard;
