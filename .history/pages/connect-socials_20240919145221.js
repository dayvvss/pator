import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import TwitterLoginCard from 'src/views/cards/TwitterLoginCard';
import LinkedInLoginCard from 'src/views/cards/LinkedInLoginCard';
import TiktokLoginCard from 'src/views/cards/TiktokLoginCard';
import YouTubeLoginCard from 'src/views/cards/YouTubeLoginCard';
import FacebookLoginCard from 'src/views/cards/FacebookLoginCard';
import InstagramLoginCard from 'src/views/cards/InstagramLoginCard';
import { useRouter } from 'next/router';

const ConnectSocials = () => {
  const router = useRouter();

  useEffect(() => {
    const { twitterAccessToken, twitterAccessTokenSecret } = router.query;
    if (twitterAccessToken && twitterAccessTokenSecret) {
      // Store the tokens securely (e.g., in your database)
      console.log('Twitter tokens received:', { twitterAccessToken, twitterAccessTokenSecret });
      
      // Clear the tokens from the URL
      router.replace('/connect-socials', undefined, { shallow: true });
    }
  }, [router]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5">Connect Social Media Accounts</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <TwitterLoginCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <LinkedInLoginCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <TiktokLoginCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <YouTubeLoginCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <FacebookLoginCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <InstagramLoginCard />
      </Grid>
    </Grid>
  );
};

export default ConnectSocials;