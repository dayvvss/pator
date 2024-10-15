/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import CardTwitter from 'src/views/cards/CardTwitter'
import CardFacebook from 'src/views/cards/CardFacebook'
import CardLinkedIn from 'src/views/cards/CardLinkedIn'
import { Button } from '@mui/material'

import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import MessageOutline from 'mdi-material-ui/MessageOutline'

// ** Icons Imports
import Google from 'mdi-material-ui/Google'
import Github from 'mdi-material-ui/Github'
import Twitter from 'mdi-material-ui/Twitter'
import Facebook from 'mdi-material-ui/Facebook'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

import ReactApexcharts from 'src/@core/components/react-apexcharts'

// Import Uploader
import FileUploader from 'src/views/createpost/FileUploader'
import SocialNetworkSelector from 'src/views/createpost/SocialNetworkSelector'

export default function index() {
    const theme = useTheme()
    const [postContent, setPostContent] = useState('');
    const [uploadedFile, setUploadedFile] = useState(null);
    const [uploadedFileUrl, setUploadedFileUrl] = useState(null);
    const [fileType, setFileType] = useState(null);

    const handleContentChange = (event) => {
      setPostContent(event.target.value)
    };

    const handleFileUpload = (file) => {
        setUploadedFile(file);
        
        const reader = new FileReader();
        reader.onloadend = () => {
          setUploadedFileUrl(reader.result);
          setFileType(file.type.startsWith('image/') ? 'image' : 'video');
        };
        reader.readAsDataURL(file);
    };

    const handleFileRemove = () => {
        setUploadedFile(null);
        setUploadedFileUrl(null);
        setFileType(null);
    };

  return (
    <Grid container spacing={2}>
    {/* Left side */}
    <Grid item xs={12} sx={{backgroundColor: theme.palette.background.paper, height:'100vh', boxShadow:2, borderRadius:1, px:6}}  md={7}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ padding: 2}}>
          <TextField
            fullWidth
            multiline
            minRows={3}
            label='Caption'
            placeholder='Write Post...'
            value={postContent}
            onChange={handleContentChange}
            sx={{ '& .MuiOutlinedInput-root': { alignItems: 'baseline' } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  {/* <MessageOutline /> */}
                </InputAdornment>
              )
            }}
          />
        </Grid>    
        <Grid item xs={12}>
            <FileUploader onFileUpload={handleFileUpload} onFileRemove={handleFileRemove} />
        </Grid>
        <Grid item xs={12} sx={{ width: '100%' }}>
            <SocialNetworkSelector />
        </Grid>
        <Grid item xs={12}>
             <Button
             variant="contained"
             sx={{mr:2}}>Post</Button>
             <Button
              variant="contained"
              sx={{
              backgroundColor: 'grey.500',
              '&:hover': { backgroundColor: 'grey.600' }
              }}
            >
              Draft
            </Button>
        </Grid>  
       
      </Grid>
    </Grid>
  
    {/* Right side */}
    <Grid item xs={12} md={5}>
      <Grid container direction="column" spacing={2}>
        <Grid item xs={12} sm={6} md={1}>
          <CardTwitter content={postContent} uploadedFile={{url: uploadedFileUrl, type: fileType}}  />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardFacebook content={postContent} uploadedFile={{url: uploadedFileUrl, type: fileType}}/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardLinkedIn content={postContent} uploadedFile={{url: uploadedFileUrl, type: fileType}}/>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
   
  )
}
