import { Box, Typography, Button, Grid, AppBar, Toolbar, Card } from '@mui/material'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { Stack } from '@mui/material';
import BlankLayout from 'src/@core/layouts/BlankLayout'
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustration'
import Image from 'next/image'
import Mysvg from  '../../public/images/pages/undraw_social_media_re_sulg.svg'
import Patorlogo from '../../public/images/logos/pator-logo.png'



const Login = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      

      <Grid container sx={{ flexGrow: 1 }}>
        {/* Left Column */}
        <Grid item xs={12} md={6} sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: 16,
          textAlign: 'center',
          
        }}>
          <Card sx={{height:'50vh', p:8, alignContent:'center'}} >
            <Image src={Patorlogo} alt='Pator Logo' width={'auto'} height={100} />
          <Typography variant='h3' sx={{paddingY:'16px'}}>Welcome!</Typography>
          {/* <Typography variant='p' sx={{ mb: 2 }}>
            Manage your social media effortlessly. Automate your posts and engage with your audience like never before.
          </Typography> */}
          <Typography variant='p' sx={{ mx: 12, paddingY:'16px' }}>
            Log in to access your dashboard and take control of your social media strategy.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt:8}}>
            <Stack direction="row" spacing={2}>
              {/* Styled Login Button without Shadow */}
              <Button variant="contained" disableElevation sx={{ mr: 2 }}>
                <LoginLink postLoginRedirectURL="/dashboard" style={{ color: '#fff', textDecoration: 'none' }}>
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
          </Box>
          </Card>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={6} sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <Image 
            src={Mysvg} 
            alt="Social Media Illustration" 
            width={500} 
            height={500} 
            style={{ maxWidth: '100%', height: 'auto' }} 
          />
          
        </Grid>
      </Grid>
      <FooterIllustrationsV1 />
    </Box>
  )
}

Login.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default Login;
