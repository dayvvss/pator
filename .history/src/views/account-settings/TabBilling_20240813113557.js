// ** React Imports
import { useState } from 'react'
import Image from 'next/image'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'

// ** Icons Imports
import PaypalIcon from 'mdi-material-ui/Paypal'

// ** Third Party Imports
import Payment from 'payment'

const TabBilling = () => {
  // ** States
  const [cardNumber, setCardNumber] = useState('')
  const [cardType, setCardType] = useState('')

  const handleCardNumberChange = (event) => {
    const { value } = event.target
    setCardNumber(Payment.fns.formatCardNumber(value))
    setCardType(Payment.fns.cardType(value))
  }

  const CardTypeIcon = () => {
    if (cardType === 'visa') {
      return <Image src="/images/misc/visa-icon.png" alt="Visa" width={30} height={20} />
    } else if (cardType === 'mastercard') {
      return <Image src="/images/misc/mastercard-icon.png" alt="Mastercard" width={30} height={20} />
    } else if (cardType === 'amex') {
      return <Image src="/images/misc/amex-icon-2048x1286-jssggdy1.png" alt="American Express" width={30} height={20} />
    } else {
      return null
    }
  }

  return (
    <form>
      <Card>
        <CardHeader title='Billing Information' titleTypographyProps={{ variant: 'h6' }} />
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Name on Card' placeholder='John Doe' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Card Number'
                value={cardNumber}
                onChange={handleCardNumberChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <CardTypeIcon />
                    </InputAdornment>
                  ),
                }}
                placeholder='1234 5678 9012 3456'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Expiry Date' placeholder='MM/YY' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type='number' label='CVC' placeholder='123' />
            </Grid>

            <Grid item xs={12}>
              <Typography variant='h6'>Current Plan</Typography>
              <Typography>Your Current Plan is <strong>Basic</strong></Typography>
              <Button variant='contained' sx={{ marginTop: 2 }}>
                Upgrade Plan
              </Button>
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant='body2' sx={{ mr: 2 }}>We accept:</Typography>
                <Image src="/images/misc/visa-icon.png" alt="Visa" width={30} height={20} style={{ marginRight: '8px' }} />
                <Image src="/images/misc/mastercard-icon.png" alt="Mastercard" width={30} height={20} style={{ marginRight: '8px' }} />
                <Image src="/images/misc/amex-icon-2048x1286-jssggdy1.png" alt="American Express" width={30} height={20} style={{ marginRight: '8px' }} />
                <PaypalIcon sx={{ color: '#003087' }} />
              </Box>
              <Button variant='contained' sx={{ marginRight: 3.5 }}>
                Save Changes
              </Button>
              <Button type='reset' variant='outlined' color='secondary'>
                Reset
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  )
}

export default TabBilling