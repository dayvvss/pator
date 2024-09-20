import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CircularProgress } from '@mui/material';
import api from '../../config/api';
import axios from 'axios';

const TiktokLoginCard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');

    if (code) {
      handleOAuthCallback(code, state);
    }
  }, []);

  const handleTiktokLogin = async () => {
    if (loading) return; // Prevent multiple clicks while loading

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
      console.log('TikTok access token:', response.data);
      // Handle successful login (e.g., update UI, store user info)
    } catch (err) {
      setError('Failed to complete TikTok login. Please try again.');
      console.error('TikTok OAuth callback error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card 
      onClick={handleTiktokLogin}
      style={{
        width: 250,
        height: 250,
        cursor: 'pointer',
        opacity: loading ? 0.7 : 1,
        transition: 'opacity 0.3s',
        position: 'relative',
      }}
    >
      <CardContent style={{ textAlign: 'center', padding: '20px' }}>
        <img
          src="/images/TiktokLogo.png"
          alt="TikTok"
          style={{ width: 48, height: 48, marginBottom: 10 }}
        />
        <Typography variant="h6" component="div">
          Connect TikTok
        </Typography>
        {loading && (
          <CircularProgress 
            size={24}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: -12,
              marginLeft: -12,
            }}
          />
        )}
        {error && (
          <Typography color="error" style={{ marginTop: '1rem', fontSize: '0.8rem' }}>
            {error}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default TiktokLoginCard;
