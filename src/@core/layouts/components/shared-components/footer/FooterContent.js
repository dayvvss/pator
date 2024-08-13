// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery(theme => theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ mr: 2 }}>
        {`© ${new Date().getFullYear()}, Product of `}
       
        <Link target='_blank' href='https://mikaka.co.ke'>
          Mikaka
        </Link>
      </Typography>
      {hidden ? null : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', '& :not(:last-child)': { mr: 4 } }}>
          <Link
            target='_blank'
            href='#'
          >
            Pater
          </Link>
          <Link target='_blank' href='#'>
            Learn More
          </Link>
          <Link
            target='_blank'
            href='#'
          >
            Documentation
          </Link>
          <Link
            target='_blank'
            href='#'
          >
            Support
          </Link>
        </Box>
      )}
    </Box>
  )
}

export default FooterContent
