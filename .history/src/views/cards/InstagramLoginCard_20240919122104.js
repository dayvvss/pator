import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';
import api from 'src/config/api';
import axios from 'axios';

const InstagramLoginCard = () => {
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

  const handleInstagramLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('/api/instagram/request-token');
      window.location.href = response.data.authorizationUrl;
    } catch (err) {
      setError('Failed to initiate Instagram login. Please try again.');
      console.error('Instagram login error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleOAuthCallback = async (code, state) => {
    setLoading(true);
    setError(null);
    try {
      await api.post('/api/instagram/access-token', { code, state });
      
      // Handle successful login (e.g., update UI, store user info)
    } catch (err) {
      setError('Failed to complete Instagram login. Please try again.');
      console.error('Instagram OAuth callback error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card 
      onClick={handleInstagramLogin}
      sx={{ 
        cursor: 'pointer', 
        width: 200,
        opacity: loading ? 0.7 : 1,
        transition: 'opacity 0.3s',
        position: 'relative',
      }}
    >
      <CardContent>
        <Box sx={{ my: 4, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', '& svg': { mr: 1 } }}>
            <img
              src="/images/logos/Instagram.png"
              alt="Instagram"
              style={{ width: 34, height: 34, marginRight: 8 }}
            />
            <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>
              Instagram
            </Typography>
          </Box>
        </Box>
        {loading && (
          <CircularProgress 
            size={24}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: -12,
              marginLeft: -12,
            }}
          />
        )}
        {error && (
          <Typography color="error" sx={{ mt: 1, fontSize: '0.8rem' }}>
            {error}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default InstagramLoginCard;
