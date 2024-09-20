// ** React Imports
import { useState, useEffect } from 'react'

import api, { endpoints } from 'src/config/api'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip' 

// ** Icon Imports
import LinkedInIcon from 'mdi-material-ui/Linkedin'
import LinkedInLogo from 'public/images/logos/LinkedIn.png'

// ** Third Party Imports
import axios from 'axios'

const LinkedInLoginCard = () => {
  const [isConnected, setIsConnected] = useState(false)
  const [connectedCard, setConnectedCard] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const clientId = process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID
  const redirectUri = process.env.NEXT_PUBLIC_LINKEDIN_REDIRECT_URI
  const client_secret = process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_SECRET

  // const sendLinkedInAuthCode = async (authCode) => {
  //   try {
  //     const response = await axios.get(`/api/linkedin/callback?code=${authCode}`)
  //     return response
  //   } catch (error) {
  //     console.error('Error sending LinkedIn auth code:', error)
  //     throw error
  //   }
  // }

  const sendAuthCodeToBackend = async (authCode) => {
    try {
      const response = await api.post(endpoints.linkedinCallback, 
        { "code": authCode },
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          }
        }
      )
      return response.data
      } 
      catch (error) 
      {
      console.error('Error sending auth code to backend:', error)
      throw error
      }
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.has('code')) {
      setConnectedCard('connected-card')
      const authCode = urlParams.get('code')
      console.log(authCode)
      
      const handleLinkedInCallback = async () => {
        setLoading(true)
        try {
          const response = await sendAuthCodeToBackend(authCode)
          console.log('LinkedIn connected successfully:', response.data)
          
          // Send the auth code to the backend
          const backendResponse = await sendAuthCodeToBackend(authCode)
          console.log('Backend response:', backendResponse)
          
          setIsConnected(true)

          // Handle successful connection (e.g., update UI, store in context)
        } catch (error) {
          console.error('Error connecting LinkedIn:', error)
          setError('Failed to connect to LinkedIn. Please try again.')
          setIsConnected(false)
        } finally {
          setLoading(false)
        }
      }

      handleLinkedInCallback()
    }
  }, [])

  const handleLinkedInLogin = () => {
    if (!clientId || !redirectUri) {
      setError('LinkedIn configuration is not properly set up.')
      return
    }

    // Redirect to LinkedIn authorization URL
    const linkedInAuthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&state=randomStateValue&scope=w_member_social`
    window.location.href = linkedInAuthUrl
  }

  return (
    <Card sx={{ cursor: 'pointer',width:200 }} className={connectedCard} onClick={handleLinkedInLogin} >
      
      <CardContent>
        <Box sx={{ my: 4, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: '#0A66C2' } }}>
            {/* <LinkedInIcon /> */}
            <img src='/images/logos/LinkedIn.png' alt="LinkedIn" style={{ width: 24, height: 24, marginLeft: 8 }} />
            <Typography sx={{ color: '#0A66C2', fontWeight: 600, fontSize: '0.875rem' }}>LinkedIn</Typography>
          </Box>
        </Box>
        <Box sx={{ gap: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* <Button 
            variant='contained' 
            sx={{ '& svg': { mr: 2 } }} 
            
            disabled={loading || isConnected}
          > */}
          
            {loading ? 'Connecting...' : isConnected ? 'Connected' : ''}
          {/* </Button> */}
        </Box>
        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
      </CardContent>
    </Card>
  )
}

export default LinkedInLoginCard