// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import Container from '@mui/material/Container'

// ** Icon Imports
import Facebook from 'mdi-material-ui/Facebook'
import Instagram from 'mdi-material-ui/Instagram'
import Linkedin from 'mdi-material-ui/Linkedin'
import Twitter from 'mdi-material-ui/Twitter'
import Youtube from 'mdi-material-ui/Youtube'
import TikTok from 'mdi-material-ui/MusicNote' // Using MusicNote as a placeholder for TikTok

// ** Custom Component Imports
import LinkedInLoginCard from 'src/views/cards/LinkedInLoginCard'

const ConnectSocials = () => {
  const socialCards = [
    { name: 'Facebook Page', Icon: Facebook },
    { name: 'Facebook Group', Icon: Facebook },
    { name: 'Instagram', Icon: Instagram },
    { name: 'LinkedIn', component: LinkedInLoginCard },
    { name: 'TikTok Page', Icon: TikTok },
    { name: 'X/Twitter', Icon: Twitter },
    { name: 'YouTube', Icon: Youtube }
  ]

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 6 }}>
        <Typography variant='h3' component="h1" gutterBottom>
          Connect Your Socials
        </Typography>
        <Typography variant='body1'>
          Add at least one social media account
        </Typography>
      </Box>

      <Box sx={{ mb: 8, display: 'flex', justifyContent: 'center' }}>
        <Grid item xs={12} md={7}>
          <LinearProgress
            variant='determinate'
            value={90}
            sx={{ height: 10, borderRadius: 5 }}
          />
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid container spacing={6} justifyContent='center'>
          {socialCards.map((social, index) => (
            <Grid item key={index}>
              {social.component ? (
                <social.component />
              ) : (
                <Card
                  sx={{
                    py: 4,
                    px: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                    '&:hover': {
                      boxShadow: 6
                    }
                  }}
                >
                  <social.Icon sx={{ fontSize: '2rem' }} />
                  <Typography sx={{ mt: 2 }}>{social.name}</Typography>
                </Card>
              )}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default ConnectSocials