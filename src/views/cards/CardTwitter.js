// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import Heart from 'mdi-material-ui/Heart'
import Twitter from 'mdi-material-ui/Twitter'
import ShareVariant from 'mdi-material-ui/ShareVariant'

const CardTwitter = ({ content, uploadedFile }) => {
  return (
    <Card sx={{ border: 0, boxShadow: 0, color: 'theme.palette.text.primary', backgroundColor: 'theme.palette.background.default', display: 'flex', justifyContent: 'center' }}>
      <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important`, borderColor: 'gray' }}>
        <Typography
          variant='h6'
          sx={{ display: 'flex', marginBottom: 2.75, alignItems: 'center', color: 'theme.palette.text.primary' }}
        >
          <Twitter sx={{ marginRight: 2.5 }} />
          Twitter Preview
        </Typography>
        <Typography variant='body2' sx={{ marginBottom: 3, color: 'theme.palette.text.primary' }}>
          {content}
        </Typography>
        <Box>
          {uploadedFile && uploadedFile.url && (
            uploadedFile.type === 'image' ? (
              <img src={uploadedFile.url} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'contain' }} />
            ) : (
              <video src={uploadedFile.url} controls style={{ maxWidth: '100%', maxHeight: '200px' }} />
            )
          )}
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
            <Avatar alt='Mary Vaughn' src='/images/avatars/4.png' sx={{ width: 34, height: 34, marginRight: 2.75 }} />
            <Typography variant='body2' sx={{ color: 'theme.palette.text.primary' }}>
              Mary Vaughn
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 3.5 }}>
              <Heart sx={{ marginRight: 1.25 }} />
              <Typography variant='body2' sx={{ color: 'theme.palette.text.primary' }}>
                1.2k
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ShareVariant sx={{ marginRight: 1.25 }} />
              <Typography variant='body2' sx={{ color: 'theme.palette.text.primary' }}>
                80
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardTwitter
