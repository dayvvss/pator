import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';
import Twitter from 'mdi-material-ui/Twitter';
import api from 'src/config/api';
import axios from 'axios';

const TwitterLoginCard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check for OAuth callback
    const urlParams = new URLSearchParams(window.location.search);
    const oauthToken = urlParams.get('oauth_token');
    const oauthVerifier = urlParams.get('oauth_verifier');

    if (oauthToken && oauthVerifier) {
      handleOAuthCallback(oauthToken, oauthVerifier);
    }
  }, []);

  const handleTwitterLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://api.twitter.com/2/request-token');
      window.location.href = response.data.authorizationUrl;
    } catch (err) {
      setError('Failed to initiate Twitter login. Please try again.');
      console.error('Twitter login error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleOAuthCallback = async (oauthToken, oauthVerifier) => {
    setLoading(true);
    setError(null);
    try {
      await api.post('/api/twitter/access-token', { oauthToken, oauthVerifier });
      // Handle successful login (e.g., update UI, store user info)
    } catch (err) {
      setError('Failed to complete Twitter login. Please try again.');
      console.error('Twitter OAuth callback error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card 
      onClick={handleTwitterLogin}
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
            <Twitter style={{ width: 24, height: 24, marginRight: 8 }} />
            <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>
              X/Twitter
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

export default TwitterLoginCard;